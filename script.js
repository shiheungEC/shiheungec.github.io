/* ======================================================
   시흥 특수학급 배치현황 지도 Final
====================================================== */


// =============================
// 전역 변수
// =============================
let map;

let currentOverlay = null;   // 현재 열려있는 커스텀 학교 정보창
let topMarkers = [];         // TOP5 번호 마커

let myLocationMarker = null;
let myLocationCircle = null;

let homeMarker = null;
let homeCircle = null;
let homeOverlay = null;

let currentLat = null;
let currentLng = null;

let routeStartName = "";
let routeStartLat = null;
let routeStartLng = null;

let searchOrigin = null;
let searchOriginName = "";
let selectedType = "전체";

// ⭐ TOP5 순위별 공통 색상 (마커 + 좌측 목록에서 함께 사용)
const RANK_COLORS = [

    "#E53935",   // 1등 - 빨강
    "#FB8C00",   // 2등 - 주황
    "#FDD835",   // 3등 - 노랑
    "#43A047",   // 4등 - 초록
    "#1976D2"    // 5등 - 파랑

];

const RANK_TEXT_COLORS = [

    "white",
    "white",
    "#333",      // 노랑 배경은 어두운 글자색이 잘 보임
    "white",
    "white"

];


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

    updateToggleBtn();

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

    // 학교 검색 초기화(X)
    document
        .getElementById("btnResetSchool")
        .addEventListener("click",resetSchoolSearch);

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

    // 주소 검색 초기화(X)
    document
        .getElementById("btnResetAddress")
        .addEventListener("click",resetAddressSearch);

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
                    .forEach(b=>{

                        b.classList.remove("active");

                        b.setAttribute("aria-pressed","false");

                    });

                this.classList.add("active");

                this.setAttribute("aria-pressed","true");

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

    // 사이드바 토글
    document
        .getElementById("toggleSidebar")
        .addEventListener("click",function(){

            document
                .querySelector(".sidebar")
                .classList.toggle("hide");

            updateToggleBtn();

        });

    window.addEventListener("resize",function(){

        const sidebar =
            document.querySelector(".sidebar");

        if(!sidebar.classList.contains("hide")){

            document.getElementById("toggleSidebar")
                .style.left = sidebar.offsetWidth + "px";

        }

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

                // 위도/경도, 학교명을 제외한 나머지 필드는
                // 전부 extra에 담아서 정보창에서 보여줍니다.
                const extra = {};

                Object.keys(school).forEach(key=>{

                    if(key==="위도" || key==="경도" || key==="학교명"){

                        return;

                    }

                    extra[key] = school[key];

                });

                allSchools.push({

                    name:school["학교명"],

                    type:fileInfo.type,

                    lat:lat,

                    lng:lng,

                    address:school["주소"] || "",

                    phone:school["연락처"] || "",

                    establish:school["학교설립별"] || "",

                    classInfo:
                        school["특수/순회학급수"] !== undefined
                            ? String(school["특수/순회학급수"])
                            : "",

                    extra:extra

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
// 학교 이동 + 정보창 열기
// ======================================================
function moveSchool(item){

    hideSearchResults();

    const position =
        new kakao.maps.LatLng(
            item.lat,
            item.lng
        );

    map.setCenter(position);

    map.setLevel(3);

    openSchoolCard(item);

}

// ======================================================
// 커스텀 학교 정보창 (X 버튼 + 복사 버튼 포함)
// ======================================================
function closeSchoolCard(){

    if(currentOverlay){

        currentOverlay.setMap(null);

        currentOverlay = null;

    }

}

function openSchoolCard(item){

    closeSchoolCard();

    const wrap =
        document.createElement("div");

    wrap.className = "schoolCard";

    // ⭐ 위도/경도 제외한 나머지 필드는 전부 학부모에게 보여줍니다.
    // (주소/연락처/학교설립별/특수학급수는 위에서 이미 보여주므로 중복 제외)
    const skipKeys =
        ["주소","연락처","학교설립별","특수/순회학급수"];

    let extraHtml = "";

    Object.keys(item.extra || {}).forEach(key=>{

        if(skipKeys.includes(key)){

            return;

        }

        const value = item.extra[key];

        if(value===undefined || value===null || value===""){

            return;

        }

        extraHtml += `<div class="row"><b>${key}</b> : ${String(value)}</div>`;

    });

    wrap.innerHTML = `

        <button class="closeBtn" type="button" aria-label="${item.name} 정보창 닫기">✕</button>

        <div class="title">${item.name}</div>

        <div class="badgeRow">

            ${item.establish ? `<span class="establishBadge">${item.establish}</span>` : ""}

            ${getSchoolBadge(item.type)}

        </div>

        <hr>

        <div class="row">📍 ${item.address}</div>

        <div class="row">☎ ${item.phone}</div>

        ${item.classInfo ? `<div class="row">🏫 ${item.classInfo}</div>` : ""}

        ${extraHtml ? `<hr>${extraHtml}` : ""}

        <div class="btnRow">

            <button class="navBtn" type="button" aria-label="${item.name}까지 카카오맵 길찾기">🧭 길찾기</button>

            <button class="copyBtn" type="button" aria-label="${item.name} 정보 클립보드에 복사">📋 복사</button>

        </div>

    `;

    wrap.querySelector(".closeBtn")
        .onclick = closeSchoolCard;

    wrap.querySelector(".navBtn")
        .onclick = function(){

            openKakaoNavigation(
                item.name,
                item.lat,
                item.lng
            );

        };

    wrap.querySelector(".copyBtn")
        .onclick = function(){

            copySchoolInfo(item);

        };

    const overlay =
        new kakao.maps.CustomOverlay({

            position:
                new kakao.maps.LatLng(
                    item.lat,
                    item.lng
                ),

            content:wrap,

            yAnchor:1.3,

            zIndex:999

        });

    overlay.setMap(map);

    currentOverlay = overlay;

}

// ======================================================
// 학교 정보 클립보드 복사
// ======================================================
function copySchoolInfo(item){

    const text =
        `${item.name}\n${item.address}\n${item.phone}`;

    if(navigator.clipboard && navigator.clipboard.writeText){

        navigator.clipboard.writeText(text)
            .then(()=>{

                alert("📋 학교 정보가 복사되었습니다!");

            })
            .catch(()=>{

                alert("복사에 실패했습니다.");

            });

    }else{

        alert("이 브라우저에서는 복사 기능을 사용할 수 없습니다.");

    }

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

        li.tabIndex = 0;

        li.setAttribute("role","button");

        li.setAttribute("aria-label",`${item.name} 지도에서 보기`);

        li.onclick=function(){

            moveSchool(item);

        };

        li.addEventListener("keydown",function(e){

            if(e.key==="Enter" || e.key===" "){

                e.preventDefault();

                moveSchool(item);

            }

        });

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

    const matches =
        allSchools
            .filter(item=>
                item.name.includes(keyword)
            )
            // 더 짧고 정확한 이름(예: "소래초등학교")이
            // 위쪽에 오도록 정렬
            .sort((a,b)=>
                a.name.length - b.name.length
            );

    if(matches.length===0){

        alert("검색 결과가 없습니다.");

        hideSearchResults();

        return;

    }

    if(matches.length===1){

        hideSearchResults();

        moveSchool(matches[0]);

        return;

    }

    // 일치하는 학교가 여러 개면 골라서 선택하도록 목록으로 표시
    showSearchResults(matches);

}

// ======================================================
// 학교 검색 결과가 여러 개일 때 선택 목록 표시
// ======================================================
function showSearchResults(matches){

    const list =
        document.getElementById("searchResults");

    list.innerHTML = "";

    matches.forEach(item=>{

        const li =
            document.createElement("li");

        li.innerHTML =
            `${getSchoolBadge(item.type)} ${item.name}`;

        li.tabIndex = 0;

        li.setAttribute("role","button");

        li.setAttribute(
            "aria-label",
            `${item.name} 선택`
        );

        function select(){

            hideSearchResults();

            moveSchool(item);

        }

        li.addEventListener("click",select);

        li.addEventListener("keydown",function(e){

            if(e.key==="Enter" || e.key===" "){

                e.preventDefault();

                select();

            }

        });

        list.appendChild(li);

    });

    list.hidden = false;

}

function hideSearchResults(){

    const list =
        document.getElementById("searchResults");

    list.hidden = true;

    list.innerHTML = "";

}

// ======================================================
// 학교 검색 초기화(X)
// ======================================================
function resetSchoolSearch(){

    document.getElementById("keyword").value = "";

    hideSearchResults();

    clearTop5();

    closeSchoolCard();

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

            // 우리집 정보창 (X 버튼 포함 커스텀 오버레이)
            openHomeCard(lat,lng);

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
// 우리집 정보창 (X 버튼 포함)
// ======================================================
function closeHomeCard(){

    if(homeOverlay){

        homeOverlay.setMap(null);

        homeOverlay = null;

    }

}

function openHomeCard(lat,lng){

    closeHomeCard();

    const wrap =
        document.createElement("div");

    wrap.className = "homeCard";

    wrap.innerHTML = `

        <span>🏠 우리집</span>

        <button class="closeBtn" type="button" aria-label="우리집 표시 닫기">✕</button>

    `;

    wrap.querySelector(".closeBtn")
        .onclick = closeHomeCard;

    homeOverlay =
        new kakao.maps.CustomOverlay({

            position:
                new kakao.maps.LatLng(lat,lng),

            content:wrap,

            yAnchor:2.2,

            zIndex:998

        });

    homeOverlay.setMap(map);

}

// ======================================================
// 주소 검색 초기화(X)
// ======================================================
function resetAddressSearch(){

    document.getElementById("address").value = "";

    clearTop5();

    closeSchoolCard();

    // 우리집 마커/반경/정보창도 함께 정리
    if(homeMarker){

        homeMarker.setMap(null);

        homeMarker = null;

    }

    if(homeCircle){

        homeCircle.setMap(null);

        homeCircle = null;

    }

    closeHomeCard();

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

    const top5 =
    schools.slice(0,5);


createTopMarkers(top5);

makeTop5(top5);


    // ⭐ 제목("가까운 학교 TOP5")은 항상 고정, 기준 위치만 아래 작은 문구로 표시
    document.getElementById("top5Origin").textContent =
        `${title} 기준 (${selectedType})`;

    // ⭐ 기준 위치 + TOP5 학교가 전부 화면 안에 보이도록 범위 자동 조정
    // (TOP5 학교가 화면 밖에 있어서 안 보이던 문제 해결)
    if(top5.length > 0){

        const bounds =
            new kakao.maps.LatLngBounds();

        bounds.extend(
            new kakao.maps.LatLng(lat,lng)
        );

        top5.forEach(item=>{

            bounds.extend(
                new kakao.maps.LatLng(item.lat,item.lng)
            );

        });

        map.setBounds(bounds);

    }

}

// ======================================================
// TOP5 초기화 (검색어 삭제 시 함께 정리)
// ======================================================
function clearTop5(){

    document.getElementById("top5List").innerHTML = "";

    topMarkers.forEach(marker=>{

        marker.setMap(null);

    });

    topMarkers = [];

    document.getElementById("top5Origin").textContent = "";

    searchOrigin = null;

    searchOriginName = "";

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

            <b>
                <span class="rankNum" style="background:${RANK_COLORS[index]};color:${RANK_TEXT_COLORS[index]};">${index+1}</span>
                ${item.name}
            </b>

        </div>

        <div class="topInfo">

            <div class="topBadges">

                ${item.establish ? `<span class="establishBadge">${item.establish}</span>` : ""}

                ${getSchoolBadge(item.type)}

            </div>

            <span class="distance">

                📏 ${item.distance.toFixed(2)} km

            </span>

        </div>

        <div class="topButtons">

            <button class="viewBtn" type="button" aria-label="${item.name} 학교보기">

                📍 학교보기

            </button>

            <button class="navBtn" type="button" aria-label="${item.name}까지 카카오맵 길찾기">

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
// 카카오 길찾기 (카카오만 사용, 네이버 없음)
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

// ======================================================
// 사이드바 토글 버튼 위치/화살표 갱신
// ======================================================
function updateToggleBtn(){

    const toggle =
        document.getElementById("toggleSidebar");

    const sidebar =
        document.querySelector(".sidebar");

    const icon =
        toggle.querySelector(".toggleIcon");

    const label =
        toggle.querySelector(".toggleText");

    const hidden =
        sidebar.classList.contains("hide");

    icon.textContent = hidden ? "▶" : "◀";

    label.innerHTML =
        (hidden ? "열기" : "숨김")
            .split("")
            .join("<br>");

    toggle.setAttribute(
        "aria-expanded",
        hidden ? "false" : "true"
    );

    toggle.setAttribute(
        "aria-label",
        hidden ? "사이드바 열기" : "사이드바 숨김"
    );

    toggle.style.left =
        hidden ? "0px" : sidebar.offsetWidth + "px";

}

// ======================================================
// TOP5 숫자 마커 표시 (클릭 시 해당 학교 정보 표시)
// ======================================================
function createTopMarkers(top5){

    // 기존 TOP5 마커 제거
    topMarkers.forEach(marker=>{

        marker.setMap(null);

    });

    topMarkers=[];


    top5.forEach((item,index)=>{


        const content = document.createElement("div");

        content.innerHTML = index+1;

        content.style.width="35px";
        content.style.height="35px";

        content.style.borderRadius="50%";

        content.style.background=RANK_COLORS[index] || "#1976D2";

        content.style.color=RANK_TEXT_COLORS[index] || "white";

        content.style.fontSize="18px";

        content.style.fontWeight="bold";

        content.style.display="flex";

        content.style.alignItems="center";

        content.style.justifyContent="center";

        content.style.border="3px solid white";

        content.style.boxShadow="0 2px 6px rgba(0,0,0,.4)";

        content.style.cursor="pointer";

        content.tabIndex = 0;

        content.setAttribute("role","button");

        content.setAttribute(
            "aria-label",
            `${index+1}순위 ${item.name}, 거리 ${item.distance.toFixed(2)}km, 정보 보기`
        );

        // ⭐ 번호 클릭 시 해당 학교 정보 표시
        function openThisCard(){

            map.panTo(
                new kakao.maps.LatLng(item.lat,item.lng)
            );

            openSchoolCard(item);

        }

        content.addEventListener("click",openThisCard);

        content.addEventListener("keydown",function(e){

            if(e.key==="Enter" || e.key===" "){

                e.preventDefault();

                openThisCard();

            }

        });


        const marker =
            new kakao.maps.CustomOverlay({

                position:
                    new kakao.maps.LatLng(
                        item.lat,
                        item.lng
                    ),

                content:content,

                yAnchor:1,

                zIndex:997

            });


        marker.setMap(map);


        topMarkers.push(marker);


    });

}