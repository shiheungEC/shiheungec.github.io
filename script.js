/* ======================================================
   시흥 특수학급 설치현황 지도 V2 Final Complete
====================================================== */

// =============================
// 전역 변수
// =============================
let map;
let openedInfo = null;

let myLocationMarker = null;
let myLocationCircle = null;

let homeMarker = null;
let homeCircle = null;

let currentLat = null;
let currentLng = null;

let routeStartName = "";
let routeStartLat = null;
let routeStartLng = null;

let searchOrigin = null;
let searchOriginName = "";
let selectedType = "전체";


const allSchools = [];

const files = [

    { file:"json/kindergarten.json", type:"유치원" },
    { file:"json/elementary.json", type:"초등학교" },
    { file:"json/middle.json", type:"중학교" },
    { file:"json/high.json", type:"고등학교" }

];

// =============================
// 시작
// =============================
window.onload=function(){

    createMap();

    bindEvents();

    loadSchools();

};

// =============================
// 지도 생성
// =============================
function createMap(){

    const container =
        document.getElementById("map");

    const options={

        center:new kakao.maps.LatLng(
            37.3802,
            126.8031
        ),

        level:6

    };

    map =
        new kakao.maps.Map(
            container,
            options
        );

}

// =============================
// 이벤트 연결
// =============================
function bindEvents(){

    // 학교 검색
    document
        .getElementById("btnSchoolSearch")
        .addEventListener("click",searchSchool);

    document
        .getElementById("keyword")
        .addEventListener("keydown",function(e){

            if(e.key==="Enter"){

                searchSchool();

            }

        });

    // 주소 검색
    document
        .getElementById("btnAddressSearch")
        .addEventListener("click",searchAddress);

    document
        .getElementById("address")
        .addEventListener("keydown",function(e){

            if(e.key==="Enter"){

                searchAddress();

            }

        });

    // 현재 위치
    document
        .getElementById("btnMyLocation")
        .addEventListener("click",showMyLocation);

    // 학교급 필터
    document
        .querySelectorAll(".topFilter button")
        .forEach(btn=>{

            btn.addEventListener("click",function(){

                document
                    .querySelectorAll(".topFilter button")
                    .forEach(b=>b.classList.remove("active"));

                this.classList.add("active");

                selectedType=this.dataset.type;

                if(searchOrigin){

                    showNearestSchools(

                        searchOrigin.lat,
                        searchOrigin.lng,
                        searchOriginName

                    );

                }

            });

        });

}
// ======================================================
// 학교 JSON 읽기
// ======================================================
async function loadSchools(){

    allSchools.length = 0;

    for(const fileInfo of files){

        try{

            const response =
                await fetch(fileInfo.file);

            if(!response.ok){

                throw new Error(fileInfo.file);

            }

            const data =
                await response.json();

            data.forEach(school=>{

                const lat =
                    Number(school["위도"]);

                const lng =
                    Number(school["경도"]);

                if(isNaN(lat) || isNaN(lng)){

                    return;

                }

                allSchools.push({

                    name:school["학교명"],

                    type:fileInfo.type,

                    lat:lat,

                    lng:lng,

                    address:school["주소"] || "",

                    phone:school["연락처"] || ""

                });

            });

        }

        catch(error){

            console.error("JSON 읽기 실패 :", fileInfo.file);

        }

    }

    console.log("학교 개수 :", allSchools.length);

    createMarkers();

    makeSchoolList();

    document
        .getElementById("loading")
        .style.display="none";

}

// ======================================================
// 학교 마커 생성
// ======================================================
function createMarkers(){

    allSchools.forEach(item=>{

        const position =
            new kakao.maps.LatLng(
                item.lat,
                item.lng
            );

        item.marker =
            new kakao.maps.Marker({

                map:map,

                position:position

            });

        item.info =
            new kakao.maps.InfoWindow({

                content:
                `
                <div style="padding:12px;width:280px;line-height:1.6">

                    <b>${item.name}</b>

                    <br>

                    ${getSchoolBadge(item.type)}

                    <br><br>

                    📍 ${item.address}

                    <br>

                    ☎ ${item.phone}

                    <br><br>

                    <button
                        onclick="openKakaoNavigation('${item.name}',${item.lat},${item.lng})"
                        style="
                            width:100%;
                            padding:8px;
                            border:none;
                            border-radius:8px;
                            background:#FEE500;
                            cursor:pointer;
                            font-weight:bold;
                        ">

                        🧭 길찾기

                    </button>

                </div>
                `

            });

        kakao.maps.event.addListener(

            item.marker,

            "click",

            function(){

                moveSchool(item);

            }

        );

    });

}

// ======================================================
// 학교 이동
// ======================================================
function moveSchool(item){

    const position =
        new kakao.maps.LatLng(
            item.lat,
            item.lng
        );

    map.setCenter(position);

    map.setLevel(3);

    if(openedInfo){

        openedInfo.close();

    }

    item.info.open(

        map,

        item.marker

    );

    openedInfo =
        item.info;

}

// ======================================================
// 학교 목록
// ======================================================
function makeSchoolList(){

    const list =
        document.getElementById("schoolItems");

    list.innerHTML = "";

    allSchools.forEach(item=>{

        const li =
            document.createElement("li");

        li.innerHTML =
            `
            ${getSchoolBadge(item.type)}
            ${item.name}
            `;

        li.onclick=function(){

            moveSchool(item);

        };

        list.appendChild(li);

    });

}
// ======================================================
// 학교 검색
// ======================================================
function searchSchool(){

    const keyword =
        document.getElementById("keyword")
        .value.trim();

    if(keyword===""){

        alert("학교명을 입력하세요.");

        return;

    }

    const school =
        allSchools.find(item=>
            item.name.includes(keyword)
        );

    if(!school){

        alert("검색 결과가 없습니다.");

        return;

    }

    moveSchool(school);

}

// ======================================================
// 주소 검색
// ======================================================
function searchAddress(){

    const keyword =
        document.getElementById("address")
        .value.trim();

    if(keyword===""){

        alert("주소를 입력하세요.");

        return;

    }

    const geocoder =
        new kakao.maps.services.Geocoder();

    geocoder.addressSearch(

        keyword,

        function(result,status){

            if(status!==kakao.maps.services.Status.OK){

                alert("주소를 찾을 수 없습니다.");

                return;

            }

            const lat = Number(result[0].y);
            const lng = Number(result[0].x);

            routeStartName = "현재 위치";

            routeStartLat = currentLat;

            routeStartLng = currentLng;
  

           // 기존 우리집 표시 제거
if(homeMarker){
    homeMarker.setMap(null);
}

if(homeCircle){
    homeCircle.setMap(null);
}

const homePosition =
    new kakao.maps.LatLng(lat,lng);

// 우리집 마커
homeMarker = new kakao.maps.Marker({

    position: homePosition,

    map: map

});

// 우리집 정보창
const homeInfo =
    new kakao.maps.InfoWindow({

        content:`
        <div style="
            padding:8px;
            font-weight:bold;
            color:#1976d2;
        ">
            🏠 우리집
        </div>
        `

    });

homeInfo.open(map,homeMarker);

// 반경 원
homeCircle =
    new kakao.maps.Circle({

        center:homePosition,

        radius:200,

        strokeWeight:2,

        strokeColor:"#43A047",

        strokeOpacity:0.8,

        fillColor:"#66BB6A",

        fillOpacity:0.15

    });

homeCircle.setMap(map); 

            const position =
                new kakao.maps.LatLng(lat,lng);

            map.setCenter(position);

            map.setLevel(5);

            showNearestSchools(

                lat,

                lng,

                "🏠 " + keyword

            );

        }

    );

}

// ======================================================
// 현재 위치
// ======================================================
function showMyLocation(){

    if(!navigator.geolocation){

        alert("현재 위치를 사용할 수 없습니다.");

        return;

    }

    navigator.geolocation.getCurrentPosition(

        function(position){

            currentLat =
                position.coords.latitude;

            currentLng =
                position.coords.longitude;

            const currentPosition =
                new kakao.maps.LatLng(

                    currentLat,

                    currentLng

                );

            // 기존 제거
            if(myLocationMarker){

                myLocationMarker.setMap(null);

            }

            if(myLocationCircle){

                myLocationCircle.setMap(null);

            }

            // 현재 위치 마커
            myLocationMarker =
                new kakao.maps.Marker({

                    map:map,

                    position:currentPosition

                });

            // 현재 위치 반경
            myLocationCircle =
                new kakao.maps.Circle({

                    center:currentPosition,

                    radius:200,

                    strokeWeight:2,

                    strokeColor:"#1976d2",

                    strokeOpacity:0.8,

                    fillColor:"#2196F3",

                    fillOpacity:0.15

                });

            myLocationCircle.setMap(map);

            map.setCenter(currentPosition);

            map.setLevel(5);

            showNearestSchools(

                currentLat,

                currentLng,

                "📍 현재 위치"

            );

        },

        function(){

            alert("현재 위치를 가져올 수 없습니다.");

        }

    );

}
// ======================================================
// TOP5 검색 엔진
// ======================================================
function showNearestSchools(lat,lng,title){

    searchOrigin={

        lat:lat,
        lng:lng

    };

    searchOriginName=title;

    let schools=[...allSchools];

    // 학교급 필터
    if(selectedType!=="전체"){

        schools=schools.filter(item=>

            item.type===selectedType

        );

    }

    // 거리 계산
    schools=schools.map(item=>{

        return{

            ...item,

            distance:getDistance(

                lat,
                lng,
                item.lat,
                item.lng

            )

        };

    });

    // 거리순 정렬
    schools.sort(

        (a,b)=>a.distance-b.distance

    );

    makeTop5(

        schools.slice(0,5)

    );

    document.getElementById("top5Title").innerHTML=

        `⭐ ${title} (${selectedType})`;

}

// ======================================================
// TOP5 출력
// ======================================================
function makeTop5(top5){

    const list=

        document.getElementById("top5List");

    list.innerHTML="";

    top5.forEach((item,index)=>{

        const li=

            document.createElement("li");

        li.className="topCard";

        li.innerHTML=`

        <div class="topHeader">

            <b>${index+1}. ${item.name}</b>

        </div>

        <div class="topInfo">

            ${getSchoolBadge(item.type)}

            <span class="distance">

                📏 ${item.distance.toFixed(2)} km

            </span>

        </div>

        <div class="topButtons">

            <button class="viewBtn">

                📍 학교보기

            </button>

            <button class="navBtn">

                🧭 길찾기

            </button>

        </div>

        `;

        // 학교보기
        li.querySelector(".viewBtn").onclick=function(){

            moveSchool(item);

        };

        // 길찾기
        li.querySelector(".navBtn").onclick=function(){

            openKakaoNavigation(

                item.name,

                item.lat,

                item.lng

            );

        };

        list.appendChild(li);

    });

}

// ======================================================
// 거리 계산 (km)
// ======================================================
function getDistance(lat1,lng1,lat2,lng2){

    const R=6371;

    const dLat=(lat2-lat1)*Math.PI/180;

    const dLng=(lng2-lng1)*Math.PI/180;

    const a=

        Math.sin(dLat/2)**2+

        Math.cos(lat1*Math.PI/180)*

        Math.cos(lat2*Math.PI/180)*

        Math.sin(dLng/2)**2;

    const c=

        2*Math.atan2(

            Math.sqrt(a),

            Math.sqrt(1-a)

        );

    return R*c;

}
// ======================================================
// 카카오 길찾기
// ======================================================
function openKakaoNavigation(name,lat,lng){

    let url;

    if(routeStartLat){

        url =
        `https://map.kakao.com/link/from/${encodeURIComponent(routeStartName)},${routeStartLat},${routeStartLng}/to/${encodeURIComponent(name)},${lat},${lng}`;

    }else{

        url =
        `https://map.kakao.com/link/to/${encodeURIComponent(name)},${lat},${lng}`;

    }

    window.open(url,"_blank");

}

// ======================================================
// 학교급 배지
// ======================================================
function getSchoolBadge(type){

    switch(type){

        case "유치원":
            return '<span class="badge kinder">유치원</span>';

        case "초등학교":
            return '<span class="badge elementary">초등학교</span>';

        case "중학교":
            return '<span class="badge middle">중학교</span>';

        case "고등학교":
            return '<span class="badge high">고등학교</span>';

        default:
            return "";

    }

}