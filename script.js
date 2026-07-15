/* ======================================================
   시흥 특수학급 설치현황 지도 Final
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

// ⭐ 치료기관 / 예체능학원 지원기관 (공통 설정)
const SUPPORT_COLOR_PALETTE = [

    "#00897B",   // 틸
    "#F4511E",   // 주황
    "#FDD835",   // 노랑
    "#43A047",   // 초록
    "#8E24AA",   // 보라
    "#3949AB",   // 남색
    "#D81B60",   // 핑크
    "#6D4C41"    // 갈색

];

const SUPPORT_CATEGORIES = {

    therapy:{

        file:"json/therapy.json",
        cardClass:"therapyCard",
        sectionSelector:".therapySection",
        toggleId:"therapyToggle",
        filterId:"therapyFilter",
        listId:"therapyItems",
        keywordId:"therapyKeyword",
        searchBtnId:"btnTherapySearch",
        resetBtnId:"btnResetTherapySearch",
        searchResultsId:"therapySearchResults",
        items:[],
        markers:[],
        visible:false,
        selectedRegion:"전체",
        regionColors:{}

    },

    art:{

        file:"json/art.json",
        cardClass:"artCard",
        sectionSelector:".artSection",
        toggleId:"artToggle",
        filterId:"artFilter",
        listId:"artItems",
        keywordId:"artKeyword",
        searchBtnId:"btnArtSearch",
        resetBtnId:"btnResetArtSearch",
        searchResultsId:"artSearchResults",
        items:[],
        markers:[],
        visible:false,
        selectedRegion:"전체",
        regionColors:{}

    }

};

function getSupportColor(cat,region){

    if(!cat.regionColors[region]){

        const usedCount =
            Object.keys(cat.regionColors).length;

        cat.regionColors[region] =
            SUPPORT_COLOR_PALETTE[usedCount % SUPPORT_COLOR_PALETTE.length];

    }

    return cat.regionColors[region];

}

// =============================
// 시작
// =============================
window.onload=function(){

    createMap();

    bindEvents();

    loadSchools();

    Object.values(SUPPORT_CATEGORIES).forEach(cat=>{

        loadSupportCategory(cat);

    });

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

    // ⭐ 배너를 끌어당기면 커지는 기능
    bindLogoPullToGrow();

    // ⭐ 사이드바 폭 조절(PC에서 오른쪽으로 드래그)
    bindSidebarResize();

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

    // TOP5 닫기(X) 버튼
    document
        .getElementById("btnCloseTop5")
        .addEventListener("click",function(){

            clearTop5();

        });

    // 치료기관 / 예체능학원 : 검색, 체크박스, 접기버튼 (공통)
    Object.values(SUPPORT_CATEGORIES).forEach(cat=>{

        document
            .getElementById(cat.searchBtnId)
            .addEventListener("click",function(){

                searchSupportItem(cat);

            });

        document
            .getElementById(cat.keywordId)
            .addEventListener("keydown",function(e){

                if(e.key==="Enter"){

                    searchSupportItem(cat);

                }

            });

        document
            .getElementById(cat.resetBtnId)
            .addEventListener("click",function(){

                resetSupportSearch(cat);

            });

        document
            .getElementById(cat.toggleId)
            .addEventListener("change",function(){

                setSupportVisible(cat,this.checked);

            });

    });

    // 접기/펼치기 버튼 (치료기관, 예체능학원)
    document
        .querySelectorAll(".collapseBtn")
        .forEach(btn=>{

            btn.addEventListener("click",function(){

                const bodyId = this.getAttribute("aria-controls");

                const body = document.getElementById(bodyId);

                const collapsed = body.classList.toggle("collapsed");

                this.classList.toggle("collapsed",collapsed);

                this.setAttribute("aria-expanded",collapsed ? "false" : "true");

            });

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
// 배너(로고) 당기면 커지는 기능 (pull-to-grow)
// ======================================================
function bindLogoPullToGrow(){

    const logo =
        document.getElementById("logoBanner");

    if(!logo){

        return;

    }

    let startY = 0;

    let dragging = false;

    const MAX_SCALE = 1.6;

    const PULL_DISTANCE = 160; // 이만큼 당기면 최대 크기

    function onDown(clientY){

        dragging = true;

        startY = clientY;

        logo.classList.add("dragging");

    }

    function onMove(clientY){

        if(!dragging){

            return;

        }

        const delta =
            Math.max(0, clientY - startY);

        const ratio =
            Math.min(delta / PULL_DISTANCE, 1);

        const scale =
            1 + ratio * (MAX_SCALE - 1);

        logo.style.transform = `scale(${scale})`;

    }

    function onUp(){

        if(!dragging){

            return;

        }

        dragging = false;

        logo.classList.remove("dragging");

        // 손을 떼면 원래 크기로 탱글탱글 돌아옵니다.
        logo.style.transform = "scale(1)";

    }

    // 마우스
    logo.addEventListener("mousedown",function(e){

        onDown(e.clientY);

    });

    window.addEventListener("mousemove",function(e){

        onMove(e.clientY);

    });

    window.addEventListener("mouseup",onUp);

    // 터치 (모바일)
    logo.addEventListener("touchstart",function(e){

        onDown(e.touches[0].clientY);

    },{ passive:true });

    logo.addEventListener("touchmove",function(e){

        onMove(e.touches[0].clientY);

    },{ passive:true });

    logo.addEventListener("touchend",onUp);

    logo.addEventListener("touchcancel",onUp);

}

// ======================================================
// 사이드바 폭 조절 (PC에서 오른쪽 경계를 드래그해서 늘리기)
// ======================================================
// ======================================================
// 번역 → 한국어로 되돌리기
// (구글 번역이 심어놓는 쿠키를 지우고 새로고침하면 원래 언어로 복귀)
// ======================================================


function bindSidebarResize(){

    const resizer =
        document.getElementById("sidebarResizer");

    const sidebar =
        document.querySelector(".sidebar");

    const toggle =
        document.getElementById("toggleSidebar");

    if(!resizer){

        return;

    }

    let resizing = false;

    let startX = 0;

    let startWidth = 0;

    const MIN_WIDTH = 320;

    const MAX_WIDTH = 720;

    resizer.addEventListener("mousedown",function(e){

        // 모바일 화면 폭에서는 리사이즈 기능을 쓰지 않습니다.
        if(window.innerWidth <= 600){

            return;

        }

        resizing = true;

        startX = e.clientX;

        startWidth = sidebar.offsetWidth;

        resizer.classList.add("resizing");

        document.body.style.userSelect = "none";

    });

    window.addEventListener("mousemove",function(e){

        if(!resizing){

            return;

        }

        const delta = e.clientX - startX;

        let newWidth = startWidth + delta;

        newWidth = Math.min(Math.max(newWidth,MIN_WIDTH),MAX_WIDTH);

        sidebar.style.width = newWidth + "px";

        // 사이드바가 펼쳐진 상태라면 숨김 버튼 위치도 같이 이동
        if(!sidebar.classList.contains("hide")){

            toggle.style.left = newWidth + "px";

        }

    });

    window.addEventListener("mouseup",function(){

        if(resizing){

            resizing = false;

            resizer.classList.remove("resizing");

            document.body.style.userSelect = "";

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

                // 이름 컬럼은 파일마다 표기가 다를 수 있어 여러 후보를 순서대로 확인합니다.
                const nameKeyCandidates =
                    ["학교명","유치원명","기관명","원명","시설명","이름"];

                const nameKey =
                    nameKeyCandidates.find(key=>
                        school[key] !== undefined &&
                        school[key] !== null &&
                        String(school[key]).trim() !== ""
                    );

                const schoolName =
                    nameKey ? school[nameKey] : "이름없음";

                // 위도/경도, 이름 컬럼을 제외한 나머지 필드는
                // 전부 extra에 담아서 정보창에서 보여줍니다.
                const extra = {};

                Object.keys(school).forEach(key=>{

                    if(key==="위도" || key==="경도" || key===nameKey){

                        return;

                    }

                    extra[key] = school[key];

                });

                allSchools.push({

                    name:schoolName,

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
// 학교 마커 전체 표시/숨김
// ======================================================
function toggleSchoolMarkers(visible){

    allSchools.forEach(item=>{

        if(item.marker){

            item.marker.setMap(visible ? map : null);

        }

    });

}

// ======================================================
// ⭐ 학교 모드 / 지원기관 모드 전환
// (학교 ↔ 치료기관·예체능학원, 서로 절대 같이 안 보이게)
// 단, 치료기관과 예체능학원 두 카테고리는 서로 같이 켤 수 있습니다.
// ======================================================
function syncSchoolVisibility(){

    const anySupportVisible =
        Object.values(SUPPORT_CATEGORIES)
            .some(cat=>cat.visible);

    toggleSchoolMarkers(!anySupportVisible);

    if(anySupportVisible){

        // TOP5로 떠 있던 번호 마커도 학교 좌표이므로 같이 정리
        clearTop5();

    }

}

function setSupportVisible(cat,visible){

    cat.visible = visible;

    document.getElementById(cat.toggleId).checked = visible;

    applySupportFilter(cat);

    syncSchoolVisibility();

}

function enterSupportMode(cat){

    setSupportVisible(cat,true);

}

function enterSchoolMode(){

    Object.values(SUPPORT_CATEGORIES).forEach(cat=>{

        cat.visible = false;

        document.getElementById(cat.toggleId).checked = false;

        applySupportFilter(cat);

    });

    toggleSchoolMarkers(true);

}

// ======================================================
// 학교 이동 + 정보창 열기
// ======================================================
function moveSchool(item){

    enterSchoolMode();

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
// 지원기관(치료기관 / 예체능학원) : JSON 읽기
// ======================================================
async function loadSupportCategory(cat){

    cat.items.length = 0;

    try{

        const response =
            await fetch(cat.file);

        if(!response.ok){

            throw new Error(cat.file + " 없음");

        }

        const data =
            await response.json();

        data.forEach(row=>{

            const lat =
                Number(row["위도"]);

            const lng =
                Number(row["경도"]);

            if(isNaN(lat) || isNaN(lng)){

                return;

            }

            const extra = {};

            Object.keys(row).forEach(key=>{

                if(key==="위도" || key==="경도" || key==="기관명"){

                    return;

                }

                extra[key] = row[key];

            });

            cat.items.push({

                name:row["기관명"] || row["이름"] || "이름없음",

                region:row["지역구"] || row["지역"] || "기타",

                address:row["주소"] || "",

                phone:row["연락처"] || "",

                extra:extra,

                lat:lat,

                lng:lng

            });

        });

    }

    catch(error){

        // 아직 해당 json이 없으면 그냥 이 카테고리를 건너뜁니다.
        console.log(cat.file + " 데이터 없음");

        document
            .querySelector(cat.sectionSelector)
            ?.setAttribute("hidden","");

        return;

    }

    if(cat.items.length===0){

        return;

    }

    createSupportMarkers(cat);

    makeSupportFilter(cat);

    makeSupportList(cat);

    // 체크박스 초기 상태(기본 꺼짐)에 맞춰 마커 표시 여부 적용
    applySupportFilter(cat);

}

// ======================================================
// 지원기관 : 지도 마커 (지역구별 색상)
// ======================================================
function createSupportMarkers(cat){

    cat.markers.forEach(m=> m.overlay.setMap(null));

    cat.markers = [];

    cat.items.forEach(item=>{

        const color =
            getSupportColor(cat,item.region);

        const content =
            document.createElement("div");

        content.className = "therapyPin";

        content.style.background = color;

        content.title = item.name;

        content.tabIndex = 0;

        content.setAttribute("role","button");

        content.setAttribute(
            "aria-label",
            `${item.region} ${item.name} 정보 보기`
        );

        function open(){

            showSupportOnMap(cat,item);

        }

        content.addEventListener("click",open);

        content.addEventListener("keydown",function(e){

            if(e.key==="Enter" || e.key===" "){

                e.preventDefault();

                open();

            }

        });

        const overlay =
            new kakao.maps.CustomOverlay({

                position:
                    new kakao.maps.LatLng(item.lat,item.lng),

                content:content,

                yAnchor:1,

                zIndex:50

            });

        overlay.setMap(map);

        cat.markers.push({ item:item, overlay:overlay });

    });

}

// ======================================================
// 지원기관 : 지역구 필터 버튼 생성
// ======================================================
function makeSupportFilter(cat){

    const box =
        document.getElementById(cat.filterId);

    box.innerHTML = "";

    const regions =
        [...new Set(cat.items.map(item=>item.region))];

    const allBtn =
        document.createElement("button");

    allBtn.type = "button";

    allBtn.textContent = "전체";

    allBtn.className = "active";

    allBtn.setAttribute("aria-pressed","true");

    allBtn.onclick = function(){

        selectSupportRegion(cat,"전체",this);

    };

    box.appendChild(allBtn);

    regions.forEach(region=>{

        const btn =
            document.createElement("button");

        btn.type = "button";

        btn.setAttribute("aria-pressed","false");

        btn.innerHTML =
            `<span class="dot" style="background:${getSupportColor(cat,region)}"></span>${region}`;

        btn.onclick = function(){

            selectSupportRegion(cat,region,this);

        };

        box.appendChild(btn);

    });

}

function selectSupportRegion(cat,region,btn){

    cat.selectedRegion = region;

    document
        .querySelectorAll(`#${cat.filterId} button`)
        .forEach(b=>{

            b.classList.remove("active");

            b.setAttribute("aria-pressed","false");

        });

    btn.classList.add("active");

    btn.setAttribute("aria-pressed","true");

    applySupportFilter(cat);

    makeSupportList(cat);

}

// ======================================================
// 지원기관 : 이름 검색
// ======================================================
function searchSupportItem(cat){

    const keyword =
        document.getElementById(cat.keywordId)
        .value.trim();

    if(keyword===""){

        alert("기관명을 입력하세요.");

        return;

    }

    const matches =
        cat.items
            .filter(item=>
                item.name.includes(keyword)
            )
            .sort((a,b)=>
                a.name.length - b.name.length
            );

    if(matches.length===0){

        alert("검색 결과가 없습니다.");

        hideSupportSearchResults(cat);

        return;

    }

    if(matches.length===1){

        hideSupportSearchResults(cat);

        showSupportOnMap(cat,matches[0]);

        return;

    }

    showSupportSearchResults(cat,matches);

}

function showSupportSearchResults(cat,matches){

    const list =
        document.getElementById(cat.searchResultsId);

    list.innerHTML = "";

    matches.forEach(item=>{

        const li =
            document.createElement("li");

        li.innerHTML =
            `<span class="dot" style="background:${getSupportColor(cat,item.region)}"></span>${item.name}`;

        li.tabIndex = 0;

        li.setAttribute("role","button");

        li.setAttribute("aria-label",`${item.name} 선택`);

        function select(){

            hideSupportSearchResults(cat);

            showSupportOnMap(cat,item);

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

function hideSupportSearchResults(cat){

    const list =
        document.getElementById(cat.searchResultsId);

    list.hidden = true;

    list.innerHTML = "";

}

function resetSupportSearch(cat){

    document.getElementById(cat.keywordId).value = "";

    hideSupportSearchResults(cat);

}

// ======================================================
// 지원기관 : 검색/목록/마커 클릭 시 지도에서 바로 보여주기
// ======================================================
function showSupportOnMap(cat,item){

    enterSupportMode(cat);

    cat.selectedRegion = "전체";

    document
        .querySelectorAll(`#${cat.filterId} button`)
        .forEach(b=>{

            b.classList.remove("active");

            b.setAttribute("aria-pressed","false");

        });

    const allBtn =
        document.querySelector(`#${cat.filterId} button`);

    if(allBtn){

        allBtn.classList.add("active");

        allBtn.setAttribute("aria-pressed","true");

    }

    applySupportFilter(cat);

    makeSupportList(cat);

    map.setCenter(
        new kakao.maps.LatLng(item.lat,item.lng)
    );

    map.setLevel(3);

    openSupportCard(cat,item);

}

// ======================================================
// 지원기관 : 표시 여부(체크박스 + 지역구 필터) 반영
// ======================================================
function applySupportFilter(cat){

    cat.markers.forEach(entry=>{

        const match =
            cat.selectedRegion==="전체" ||
            entry.item.region===cat.selectedRegion;

        const visible = cat.visible && match;

        entry.overlay.setMap(visible ? map : null);

    });

}

// ======================================================
// 지원기관 : 목록
// ======================================================
function makeSupportList(cat){

    const list =
        document.getElementById(cat.listId);

    list.innerHTML = "";

    const filtered =
        cat.selectedRegion==="전체"
            ? cat.items
            : cat.items.filter(
                item=>item.region===cat.selectedRegion
            );

    filtered.forEach(item=>{

        const li =
            document.createElement("li");

        li.innerHTML =
            `
            <span class="dot" style="background:${getSupportColor(cat,item.region)}"></span>
            ${item.name}
            <span class="regionTag">${item.region}</span>
            `;

        li.tabIndex = 0;

        li.setAttribute("role","button");

        li.setAttribute("aria-label",`${item.name} 지도에서 보기`);

        li.onclick=function(){

            showSupportOnMap(cat,item);

        };

        li.addEventListener("keydown",function(e){

            if(e.key==="Enter" || e.key===" "){

                e.preventDefault();

                li.onclick();

            }

        });

        list.appendChild(li);

    });

}

// ======================================================
// 지원기관 : 정보창 (학교 정보창과 동일한 형태 + 카테고리별 포인트 색)
// ======================================================
function openSupportCard(cat,item){

    closeSchoolCard();

    const wrap =
        document.createElement("div");

    wrap.className = `schoolCard ${cat.cardClass}`;

    let extraHtml = "";

    Object.keys(item.extra || {}).forEach(key=>{

        if(["주소","연락처","지역구","지역"].includes(key)){

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

            <span class="establishBadge regionBadge">${item.region}</span>

        </div>

        <hr>

        <div class="row">📍 ${item.address}</div>

        <div class="row">☎ ${item.phone}</div>

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
                new kakao.maps.LatLng(item.lat,item.lng),

            content:wrap,

            yAnchor:1.3,

            zIndex:999

        });

    overlay.setMap(map);

    currentOverlay = overlay;

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

            // ⭐ 길찾기 출발지를 "우리집 주소"로 설정
            routeStartName = "우리집";

            routeStartLat = lat;

            routeStartLng = lng;


            // 기존 우리집 표시 제거
            if(homeMarker){
                homeMarker.setMap(null);
            }

            if(homeCircle){
                homeCircle.setMap(null);
            }

            const homePosition =
                new kakao.maps.LatLng(lat,lng);

            // 우리집 마커 (사랑이 캐릭터)
            homeMarker = new kakao.maps.Marker({

                position: homePosition,

                map: map,

                image: new kakao.maps.MarkerImage(

                    "images/mascot_sarangi.png",

                    new kakao.maps.Size(56,64),

                    { offset: new kakao.maps.Point(28,64) }

                )

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

            yAnchor:3.4,

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

    // 길찾기 출발지도 같이 초기화 (우리집 기준으로 설정돼 있었을 수 있으므로)
    if(routeStartName === "우리집"){

        routeStartName = "";

        routeStartLat = null;

        routeStartLng = null;

    }

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

            // ⭐ 길찾기 출발지를 "현재 위치"로 설정
            routeStartName = "현재 위치";

            routeStartLat = currentLat;

            routeStartLng = currentLng;

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

            // 현재 위치 마커 (호랑이 캐릭터)
            myLocationMarker =
                new kakao.maps.Marker({

                    map:map,

                    position:currentPosition,

                    image:new kakao.maps.MarkerImage(

                        "images/mascot_tiger.png",

                        new kakao.maps.Size(56,64),

                        { offset:new kakao.maps.Point(28,64) }

                    )

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
async function showNearestSchools(lat,lng,title){

    enterSchoolMode();

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

    // 1차 : 직선거리로 후보 15개만 추리기 (도보거리 API 호출량 절약)
    schools=schools.map(item=>{

        return{

            ...item,

            straightDistance:getDistance(

                lat,
                lng,
                item.lat,
                item.lng

            )

        };

    });

    schools.sort(

        (a,b)=>a.straightDistance-b.straightDistance

    );

    const candidates = schools.slice(0,15);

    document.getElementById("top5Origin").textContent =
        "🚶 도보거리 계산 중...";

    // 2차 : 후보들의 실제 도보거리를 한 번에 계산
    const walkingDistances =
        await getWalkingDistances(lat,lng,candidates);

    let finalList;

    if(walkingDistances){

        finalList = candidates.map((item,i)=>{

            const walked = walkingDistances[i];

            return{

                ...item,

                // 도보거리 계산에 실패한 개별 항목은 직선거리로 대체
                distance:(walked===null || walked===undefined)
                    ? item.straightDistance
                    : walked

            };

        });

    }else{

        // API 키 미설정/호출 실패 시 전체를 직선거리로 대체
        finalList = candidates.map(item=>{

            return{ ...item, distance:item.straightDistance };

        });

    }

    // 도보거리 기준 재정렬
    finalList.sort(

        (a,b)=>a.distance-b.distance

    );

    const top5 =
    finalList.slice(0,5);


createTopMarkers(top5);

makeTop5(top5);


    // ⭐ 제목("가까운 학교 TOP5")은 항상 고정, 기준 위치만 아래 작은 문구로 표시
    document.getElementById("top5Origin").textContent =
        `${title} 기준 (${selectedType}) · 🚶 도보거리`;

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

                🚶 ${item.distance.toFixed(2)} km

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
// ⭐ 실제 도보거리 계산 (OpenRouteService Matrix API)
// https://openrouteservice.org/dev/#/signup 에서
// 무료 API 키를 발급받아 아래 값에 넣어주세요.
// ======================================================
const ORS_API_KEY = "eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6Ijk3ODEzNTVhZWIyZTQ4NjhiM2RlYzEzMzcwOWRiNGE2IiwiaCI6Im11cm11cjY0In0=";

async function getWalkingDistances(originLat,originLng,candidates){

    if(!ORS_API_KEY || ORS_API_KEY.includes("여기에")){

        console.log("ORS_API_KEY가 설정되지 않아 직선거리로 대체합니다.");

        return null;

    }

    if(candidates.length===0){

        return [];

    }

    const locations = [

        [originLng,originLat],

        ...candidates.map(item=>[item.lng,item.lat])

    ];

    const destinations =
        candidates.map((_,i)=>i+1);

    try{

        const response =
            await fetch(

                "https://api.openrouteservice.org/v2/matrix/foot-walking",

                {

                    method:"POST",

                    headers:{

                        "Authorization":ORS_API_KEY,

                        "Content-Type":"application/json"

                    },

                    body:JSON.stringify({

                        locations:locations,

                        sources:[0],

                        destinations:destinations,

                        metrics:["distance"],

                        units:"km"

                    })

                }

            );

        if(!response.ok){

            throw new Error("ORS 응답 오류 : " + response.status);

        }

        const data = await response.json();

        // data.distances[0] = [기준점→후보1, 기준점→후보2, ...] (km)
        return data.distances[0];

    }

    catch(error){

        console.warn("도보거리 계산 실패, 직선거리로 대체합니다.",error);

        return null;

    }

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

    if(hidden){

        // 접힌 상태(열기) : 화살표 + 세로 글씨
        icon.textContent = "▶";

        label.innerHTML =
            "열기"
                .split("")
                .join("<br>");

        toggle.classList.remove("closedX");

    }else{

        // 펼친 상태(숨김) : 글자 없이 귀여운 X만
        icon.textContent = "✕";

        label.innerHTML = "";

        toggle.classList.add("closedX");

    }

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