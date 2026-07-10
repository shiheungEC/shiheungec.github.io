let map;

window.onload = async function(){

    createMap();

    await loadSchools();

};

function createMap(){

    const container=document.getElementById("map");

    map=new kakao.maps.Map(container,{

        center:new kakao.maps.LatLng(

            37.3802,

            126.8031

        ),

        level:6

    });

}

// =============================
// 학교 데이터
// =============================
const allSchools = [];

const jsonFiles = [

    {
        type: "유치원",
        file: "json/kindergarten.json"
    },

    {
        type: "초등학교",
        file: "json/elementary.json"
    },

    {
        type: "중학교",
        file: "json/middle.json"
    },

    {
        type: "고등학교",
        file: "json/high.json"
    }

];

// =============================
// 학교 데이터 읽기
// =============================
async function loadSchools(){

    for(const info of jsonFiles){

        try{

            const response = await fetch(info.file);

            if(!response.ok){

                throw new Error(info.file);

            }

            const data = await response.json();

            data.forEach(school=>{

                const lat = Number(school["위도"]);
                const lng = Number(school["경도"]);

                if(isNaN(lat) || isNaN(lng)) return;

                allSchools.push({

                    name: school["학교명"],

                    type: info.type,

                    lat: lat,

                    lng: lng,

                    address: school["주소"] || "",

                    phone: school["연락처"] || ""

                });

            });

        }

        catch(error){

            console.error(info.file,error);

        }

    }

    console.log(allSchools.length+"개 학교 로딩 완료");

    createMarkers();

}

// =============================
// 학교 마커 생성
// =============================
function createMarkers(){

    allSchools.forEach(item=>{

        const marker = new kakao.maps.Marker({

            map: map,

            position: new kakao.maps.LatLng(

                item.lat,

                item.lng

            )

        });

        item.marker = marker;

    });

    document.getElementById("loading").style.display="none";

}