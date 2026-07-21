/* ======================================================
   시흥 특수학급 설치현황 지도 Final
====================================================== */


// =============================
// 번역 데이터 (i18n)
// =============================
const I18N = {

    ko:{
        skipLink:"본문(지도)으로 바로가기",
        sidebarAria:"특수학급 지도 검색 및 목록",
        resizerTitle:"드래그해서 폭 조절",
        logoAlt:"경기도시흥교육지원청 로고",
        bannerTitle:"시흥 특수학급 배치 및<br>꿈이든 현황",
        schoolSearchTitle:"🔍 학교 검색",
        schoolSearchAria:"학교명 검색",
        schoolSearchPlaceholder:"학교명을 입력하세요",
        btnSearch:"검색",
        resetTitle:"검색 초기화",
        schoolResetAria:"학교 검색어 및 결과 초기화",
        addressSearchTitle:"🏠 우리집 주소",
        addressSearchAria:"우리집 주소 검색",
        addressSearchPlaceholder:"우리집 주소를 입력하세요",
        addressResetAria:"우리집 주소 검색어 및 결과 초기화",
        myLocationBtn:"📍 현재 위치 찾기",
        top5CloseAria:"TOP5 검색결과 닫기",
        top5Title:"⭐ 가까운 학교 TOP5",
        schoolLevelFilterAria:"학교급 필터",
        filterAll:"전체",
        filterKinder:"유",
        filterElementary:"초",
        filterMiddle:"중",
        filterHigh:"고",
        schoolListTitle:"📚 학교 목록",
        therapyTitle:"🏥 치료기관 현황",
        therapyCollapseAria:"치료기관 현황 접기/펼치기",
        therapySearchAria:"치료기관 이름 검색",
        orgNamePlaceholder:"기관명을 입력하세요",
        therapyResetAria:"치료기관 검색어 및 결과 초기화",
        therapyFilterAria:"치료기관 지역구 필터",
        therapyListAria:"치료기관 목록",
        artTitle:"🎨 예체능학원 현황",
        artCollapseAria:"예체능학원 현황 접기/펼치기",
        artSearchAria:"예체능학원 이름 검색",
        academyNamePlaceholder:"학원명을 입력하세요",
        artResetAria:"예체능학원 검색어 및 결과 초기화",
        artFilterAria:"예체능학원 지역구 필터",
        artListAria:"예체능학원 목록",
        mapAria:"시흥시 특수학급 설치현황 지도",
        loadingTitle:"🏫 학교정보 불러오는 중...",
        loadingSubtitle:"잠시만 기다려 주세요.",
        toggleHide:"숨김",
        toggleOpen:"열기",
        toggleHideAria:"사이드바 숨김",
        toggleOpenAria:"사이드바 열기",

        modeSchool:"특수학급 검색",
        modeNearby:"우리집 주변 학교",
        modeDream:"꿈이든 카드 사용처",
        nearbyEmptyHint:"📍 현재 위치 또는 🏠 우리집 버튼을 눌러서 시작하세요",
        chooseLocationTitle:"우리집 위치",
        chooseLocationDesc:"아래 방법 중 선택해주세요",
        chooseAddressBtn:"주소 검색",
        orLabel:"또는",
        chooseMapBtn:"지도에서 집 선택",
        chooseLocationNote:"✓ 선택한 위치는 기기에 저장됩니다",
        pickHomeBannerText:"지도를 눌러 우리집 위치를 선택하세요",
        cancelBtn:"취소",
        nearbyResetAria:"우리집 주변 학교 검색 초기화",
        refreshListBtn:"목록 새로고침",
        changeLocationBtn:"위치 다시 선택",
        therapyTitleShort:"🏥 치료기관",
        artTitleShort:"🎨 예체능학원",
        recentSearchTitle:"🕑 최근 검색",
        recentSearchEmpty:"최근 검색한 학교가 여기에 표시돼요",
        favoritesTitle:"⭐ 즐겨찾기",
        favoritesEmpty:"학교 정보창에서 ☆를 눌러 즐겨찾기에 추가하세요",
        languageTitle:"🌐 언어 / Language",
        homeModalTitle:"🏠 우리집 주소 등록",
        homeModalDesc:"우리집 주소를 등록하면 주변 학교를 바로 찾아드려요.",
        menuOpenAria:"메뉴 열기",
        currentLocationAria:"현재 위치",
        homeAria:"우리집",

        appTitleShort:"시흥특수교육지원센터 지도",
        mainScreenBtn:"메인화면",
        modeSchoolDesc:"학교명으로 검색",
        modeNearbyDesc:"주소 또는 지도에서 집 지정",
        modeDreamDesc:"치료기관 · 예체능 기관",
        backAria:"뒤로가기"
    },

    en:{
        skipLink:"Skip to main content (map)",
        sidebarAria:"Special class map search and list",
        resizerTitle:"Drag to resize",
        logoAlt:"Siheung Office of Education logo",
        bannerTitle:"Siheung Special Class Placement &<br>Kkumidun Status",
        schoolSearchTitle:"🔍 School Search",
        schoolSearchAria:"Search by school name",
        schoolSearchPlaceholder:"Enter school name",
        btnSearch:"Search",
        resetTitle:"Clear search",
        schoolResetAria:"Clear school search and results",
        addressSearchTitle:"🏠 Home Address",
        addressSearchAria:"Search home address",
        addressSearchPlaceholder:"Enter your home address",
        addressResetAria:"Clear home address search and results",
        myLocationBtn:"📍 Find My Location",
        top5CloseAria:"Close TOP5 results",
        top5Title:"⭐ Nearest Schools TOP5",
        schoolLevelFilterAria:"School level filter",
        filterAll:"All",
        filterKinder:"Kinder",
        filterElementary:"Elem.",
        filterMiddle:"Middle",
        filterHigh:"High",
        schoolListTitle:"📚 School List",
        therapyTitle:"🏥 Therapy Centers",
        therapyCollapseAria:"Expand/collapse therapy centers",
        therapySearchAria:"Search therapy center name",
        orgNamePlaceholder:"Enter organization name",
        therapyResetAria:"Clear therapy search and results",
        therapyFilterAria:"Therapy center district filter",
        therapyListAria:"Therapy center list",
        artTitle:"🎨 Arts & PE Academies",
        artCollapseAria:"Expand/collapse arts & PE academies",
        artSearchAria:"Search academy name",
        academyNamePlaceholder:"Enter academy name",
        artResetAria:"Clear academy search and results",
        artFilterAria:"Academy district filter",
        artListAria:"Academy list",
        mapAria:"Siheung special class placement map",
        loadingTitle:"🏫 Loading school data...",
        loadingSubtitle:"Please wait a moment.",
        toggleHide:"Hide",
        toggleOpen:"Show",
        toggleHideAria:"Hide sidebar",
        toggleOpenAria:"Show sidebar",

        modeSchool:"Special Class Search",
        modeNearby:"Schools Near Home",
        modeDream:"Kkumidun",
        nearbyEmptyHint:"Tap 📍 Current Location or 🏠 Home to get started",
        chooseLocationTitle:"Home Location",
        chooseLocationDesc:"Choose one of the methods below",
        chooseAddressBtn:"Search Address",
        orLabel:"or",
        chooseMapBtn:"Pick on Map",
        chooseLocationNote:"✓ Your selection is saved on this device",
        pickHomeBannerText:"Tap the map to select your home location",
        cancelBtn:"Cancel",
        nearbyResetAria:"Reset nearby school search",
        refreshListBtn:"Refresh List",
        changeLocationBtn:"Change Location",
        therapyTitleShort:"🏥 Therapy Centers",
        artTitleShort:"🎨 Arts & PE",
        recentSearchTitle:"🕑 Recent Searches",
        recentSearchEmpty:"Schools you've searched will appear here",
        favoritesTitle:"⭐ Favorites",
        favoritesEmpty:"Tap ☆ on a school card to add it to favorites",
        languageTitle:"🌐 Language",
        homeModalTitle:"🏠 Register Home Address",
        homeModalDesc:"Register your home address to instantly find nearby schools.",
        menuOpenAria:"Open menu",
        currentLocationAria:"Current location",
        homeAria:"Home",

        appTitleShort:"Siheung Special Ed Map",
        mainScreenBtn:"Home",
        modeSchoolDesc:"Search by school name",
        modeNearbyDesc:"Set home by address or on map",
        modeDreamDesc:"Therapy & Arts/PE centers",
        backAria:"Back"
    },

    zh:{
        skipLink:"跳转到主要内容(地图)",
        sidebarAria:"特殊班级地图搜索及列表",
        resizerTitle:"拖动以调整宽度",
        logoAlt:"始兴教育支援厅标志",
        bannerTitle:"始兴特殊班级配置及<br>圆梦现况",
        schoolSearchTitle:"🔍 学校搜索",
        schoolSearchAria:"按学校名称搜索",
        schoolSearchPlaceholder:"请输入学校名称",
        btnSearch:"搜索",
        resetTitle:"清除搜索",
        schoolResetAria:"清除学校搜索及结果",
        addressSearchTitle:"🏠 家庭住址",
        addressSearchAria:"搜索家庭住址",
        addressSearchPlaceholder:"请输入家庭住址",
        addressResetAria:"清除家庭住址搜索及结果",
        myLocationBtn:"📍 查找我的位置",
        top5CloseAria:"关闭TOP5结果",
        top5Title:"⭐ 最近学校TOP5",
        schoolLevelFilterAria:"学校级别筛选",
        filterAll:"全部",
        filterKinder:"幼儿园",
        filterElementary:"小学",
        filterMiddle:"初中",
        filterHigh:"高中",
        schoolListTitle:"📚 学校列表",
        therapyTitle:"🏥 治疗机构现况",
        therapyCollapseAria:"展开/收起治疗机构",
        therapySearchAria:"搜索治疗机构名称",
        orgNamePlaceholder:"请输入机构名称",
        therapyResetAria:"清除治疗机构搜索及结果",
        therapyFilterAria:"治疗机构地区筛选",
        therapyListAria:"治疗机构列表",
        artTitle:"🎨 文体学院现况",
        artCollapseAria:"展开/收起文体学院",
        artSearchAria:"搜索学院名称",
        academyNamePlaceholder:"请输入学院名称",
        artResetAria:"清除学院搜索及结果",
        artFilterAria:"学院地区筛选",
        artListAria:"学院列表",
        mapAria:"始兴市特殊班级配置地图",
        loadingTitle:"🏫 正在加载学校信息...",
        loadingSubtitle:"请稍候。",
        toggleHide:"隐藏",
        toggleOpen:"展开",
        toggleHideAria:"隐藏侧边栏",
        toggleOpenAria:"展开侧边栏",

        modeSchool:"特殊班级搜索",
        modeNearby:"家附近的学校",
        modeDream:"圆梦",
        nearbyEmptyHint:"点击 📍当前位置 或 🏠我家 开始使用",
        chooseLocationTitle:"我家位置",
        chooseLocationDesc:"请选择以下方式之一",
        chooseAddressBtn:"搜索地址",
        orLabel:"或",
        chooseMapBtn:"在地图上选择",
        chooseLocationNote:"✓ 所选位置将保存在本设备上",
        pickHomeBannerText:"点击地图选择我家的位置",
        cancelBtn:"取消",
        nearbyResetAria:"重置附近学校搜索",
        refreshListBtn:"刷新列表",
        changeLocationBtn:"重新选择位置",
        therapyTitleShort:"🏥 治疗机构",
        artTitleShort:"🎨 文体学院",
        recentSearchTitle:"🕑 最近搜索",
        recentSearchEmpty:"搜索过的学校会显示在这里",
        favoritesTitle:"⭐ 收藏",
        favoritesEmpty:"在学校信息卡中点击☆即可添加收藏",
        languageTitle:"🌐 语言",
        homeModalTitle:"🏠 登记家庭住址",
        homeModalDesc:"登记家庭住址后可立即查找附近学校。",
        menuOpenAria:"打开菜单",
        currentLocationAria:"当前位置",
        homeAria:"我家",

        appTitleShort:"始兴特殊教育地图",
        mainScreenBtn:"主页",
        modeSchoolDesc:"按学校名称搜索",
        modeNearbyDesc:"通过地址或地图指定我家",
        modeDreamDesc:"治疗机构 · 文体机构",
        backAria:"返回"
    },

    vi:{

        skipLink:"Chuyển đến nội dung chính (bản đồ)",

        sidebarAria:"Tìm kiếm và danh sách bản đồ lớp học đặc biệt",

        resizerTitle:"Kéo để điều chỉnh chiều rộng",

        logoAlt:"Logo Sở Giáo dục Siheung, Gyeonggi-do",

        bannerTitle:"Bố trí lớp học đặc biệt Siheung và<br>tình hình Kkumidun",

        schoolSearchTitle:"🔍 Tìm trường học",

        schoolSearchAria:"Tìm tên trường",

        schoolSearchPlaceholder:"Nhập tên trường học",

        btnSearch:"Tìm kiếm",

        resetTitle:"Xóa tìm kiếm",

        schoolResetAria:"Xóa từ khóa và kết quả tìm trường",

        addressSearchTitle:"🏠 Địa chỉ nhà",

        addressSearchAria:"Tìm địa chỉ nhà",

        addressSearchPlaceholder:"Nhập địa chỉ nhà của bạn",

        addressResetAria:"Xóa từ khóa và kết quả tìm địa chỉ nhà",

        myLocationBtn:"📍 Tìm vị trí hiện tại",

        top5CloseAria:"Đóng kết quả TOP5",

        top5Title:"⭐ TOP5 trường gần nhất",

        schoolLevelFilterAria:"Bộ lọc cấp học",

        filterAll:"Tất cả",

        filterKinder:"MN",

        filterElementary:"TH",

        filterMiddle:"THCS",

        filterHigh:"THPT",

        schoolListTitle:"📚 Danh sách trường",

        therapyTitle:"🏥 Tình hình cơ sở trị liệu",

        therapyCollapseAria:"Thu gọn/mở rộng tình hình cơ sở trị liệu",

        therapySearchAria:"Tìm tên cơ sở trị liệu",

        orgNamePlaceholder:"Nhập tên cơ sở",

        therapyResetAria:"Xóa từ khóa và kết quả tìm cơ sở trị liệu",

        therapyFilterAria:"Bộ lọc khu vực cơ sở trị liệu",

        therapyListAria:"Danh sách cơ sở trị liệu",

        artTitle:"🎨 Tình hình học viện nghệ thuật/thể thao",

        artCollapseAria:"Thu gọn/mở rộng tình hình học viện nghệ thuật/thể thao",

        artSearchAria:"Tìm tên học viện nghệ thuật/thể thao",

        academyNamePlaceholder:"Nhập tên học viện",

        artResetAria:"Xóa từ khóa và kết quả tìm học viện",

        artFilterAria:"Bộ lọc khu vực học viện nghệ thuật/thể thao",

        artListAria:"Danh sách học viện nghệ thuật/thể thao",

        mapAria:"Bản đồ bố trí lớp học đặc biệt thành phố Siheung",

        loadingTitle:"🏫 Đang tải thông tin trường học...",

        loadingSubtitle:"Vui lòng đợi trong giây lát.",

        toggleHide:"Ẩn",

        toggleOpen:"Mở",

        toggleHideAria:"Ẩn thanh bên",

        toggleOpenAria:"Mở thanh bên",

        modeSchool:"Tìm lớp học đặc biệt",

        modeNearby:"Trường gần nhà",

        modeDream:"Kkumidun",

        nearbyEmptyHint:"Nhấn 📍 Vị trí hiện tại hoặc 🏠 Nhà để bắt đầu",

        chooseLocationTitle:"Vị trí nhà",

        chooseLocationDesc:"Vui lòng chọn một trong các cách dưới đây",

        chooseAddressBtn:"Tìm địa chỉ",

        orLabel:"hoặc",

        chooseMapBtn:"Chọn trên bản đồ",

        chooseLocationNote:"✓ Vị trí đã chọn được lưu trên thiết bị này",

        pickHomeBannerText:"Nhấn vào bản đồ để chọn vị trí nhà của bạn",

        cancelBtn:"Hủy",

        nearbyResetAria:"Đặt lại tìm kiếm trường gần nhà",

        refreshListBtn:"Làm mới danh sách",

        changeLocationBtn:"Chọn lại vị trí",

        therapyTitleShort:"🏥 Cơ sở trị liệu",

        artTitleShort:"🎨 Học viện nghệ thuật/thể thao",

        recentSearchTitle:"🕑 Tìm kiếm gần đây",

        recentSearchEmpty:"Các trường bạn đã tìm sẽ hiện ở đây",

        favoritesTitle:"⭐ Yêu thích",

        favoritesEmpty:"Nhấn ☆ trên thẻ trường để thêm vào yêu thích",

        languageTitle:"🌐 Ngôn ngữ / Language",

        homeModalTitle:"🏠 Đăng ký địa chỉ nhà",

        homeModalDesc:"Đăng ký địa chỉ nhà để tìm trường gần đó ngay lập tức.",

        menuOpenAria:"Mở menu",

        currentLocationAria:"Vị trí hiện tại",

        homeAria:"Nhà",

        appTitleShort:"Bản đồ giáo dục đặc biệt Siheung",

        mainScreenBtn:"Trang chính",

        modeSchoolDesc:"Tìm theo tên trường",

        modeNearbyDesc:"Chọn bằng địa chỉ hoặc trên bản đồ",

        modeDreamDesc:"Cơ sở trị liệu · Nghệ thuật/thể thao",

        backAria:"Quay lại"

    },

    th:{

        skipLink:"ข้ามไปยังเนื้อหาหลัก (แผนที่)",

        sidebarAria:"ค้นหาและรายการแผนที่ชั้นเรียนพิเศษ",

        resizerTitle:"ลากเพื่อปรับความกว้าง",

        logoAlt:"โลโก้สำนักงานการศึกษาชีฮึง",

        bannerTitle:"การจัดชั้นเรียนพิเศษชีฮึงและ<br>สถานะ Kkumidun",

        schoolSearchTitle:"🔍 ค้นหาโรงเรียน",

        schoolSearchAria:"ค้นหาชื่อโรงเรียน",

        schoolSearchPlaceholder:"กรอกชื่อโรงเรียน",

        btnSearch:"ค้นหา",

        resetTitle:"ล้างการค้นหา",

        schoolResetAria:"ล้างคำค้นหาและผลลัพธ์โรงเรียน",

        addressSearchTitle:"🏠 ที่อยู่บ้าน",

        addressSearchAria:"ค้นหาที่อยู่บ้าน",

        addressSearchPlaceholder:"กรอกที่อยู่บ้านของคุณ",

        addressResetAria:"ล้างคำค้นหาและผลลัพธ์ที่อยู่บ้าน",

        myLocationBtn:"📍 ค้นหาตำแหน่งปัจจุบัน",

        top5CloseAria:"ปิดผลลัพธ์ TOP5",

        top5Title:"⭐ TOP5 โรงเรียนใกล้ที่สุด",

        schoolLevelFilterAria:"ตัวกรองระดับชั้น",

        filterAll:"ทั้งหมด",

        filterKinder:"อนุบาล",

        filterElementary:"ประถม",

        filterMiddle:"ม.ต้น",

        filterHigh:"ม.ปลาย",

        schoolListTitle:"📚 รายชื่อโรงเรียน",

        therapyTitle:"🏥 สถานะศูนย์บำบัด",

        therapyCollapseAria:"ย่อ/ขยายสถานะศูนย์บำบัด",

        therapySearchAria:"ค้นหาชื่อศูนย์บำบัด",

        orgNamePlaceholder:"กรอกชื่อหน่วยงาน",

        therapyResetAria:"ล้างคำค้นหาและผลลัพธ์ศูนย์บำบัด",

        therapyFilterAria:"ตัวกรองเขตศูนย์บำบัด",

        therapyListAria:"รายชื่อศูนย์บำบัด",

        artTitle:"🎨 สถานะสถาบันศิลปะ/พลศึกษา",

        artCollapseAria:"ย่อ/ขยายสถานะสถาบันศิลปะ/พลศึกษา",

        artSearchAria:"ค้นหาชื่อสถาบันศิลปะ/พลศึกษา",

        academyNamePlaceholder:"กรอกชื่อสถาบัน",

        artResetAria:"ล้างคำค้นหาและผลลัพธ์สถาบัน",

        artFilterAria:"ตัวกรองเขตสถาบันศิลปะ/พลศึกษา",

        artListAria:"รายชื่อสถาบันศิลปะ/พลศึกษา",

        mapAria:"แผนที่การจัดชั้นเรียนพิเศษเมืองชีฮึง",

        loadingTitle:"🏫 กำลังโหลดข้อมูลโรงเรียน...",

        loadingSubtitle:"กรุณารอสักครู่",

        toggleHide:"ซ่อน",

        toggleOpen:"เปิด",

        toggleHideAria:"ซ่อนแถบด้านข้าง",

        toggleOpenAria:"เปิดแถบด้านข้าง",

        modeSchool:"ค้นหาชั้นเรียนพิเศษ",

        modeNearby:"โรงเรียนใกล้บ้าน",

        modeDream:"Kkumidun",

        nearbyEmptyHint:"แตะ 📍 ตำแหน่งปัจจุบัน หรือ 🏠 บ้าน เพื่อเริ่มต้น",

        chooseLocationTitle:"ตำแหน่งบ้าน",

        chooseLocationDesc:"กรุณาเลือกวิธีด้านล่าง",

        chooseAddressBtn:"ค้นหาที่อยู่",

        orLabel:"หรือ",

        chooseMapBtn:"เลือกบนแผนที่",

        chooseLocationNote:"✓ ตำแหน่งที่เลือกจะถูกบันทึกไว้ในอุปกรณ์นี้",

        pickHomeBannerText:"แตะแผนที่เพื่อเลือกตำแหน่งบ้านของคุณ",

        cancelBtn:"ยกเลิก",

        nearbyResetAria:"รีเซ็ตการค้นหาโรงเรียนใกล้บ้าน",

        refreshListBtn:"รีเฟรชรายการ",

        changeLocationBtn:"เลือกตำแหน่งใหม่",

        therapyTitleShort:"🏥 ศูนย์บำบัด",

        artTitleShort:"🎨 สถาบันศิลปะ/พลศึกษา",

        recentSearchTitle:"🕑 ค้นหาล่าสุด",

        recentSearchEmpty:"โรงเรียนที่คุณค้นหาจะแสดงที่นี่",

        favoritesTitle:"⭐ รายการโปรด",

        favoritesEmpty:"แตะ ☆ บนการ์ดโรงเรียนเพื่อเพิ่มในรายการโปรด",

        languageTitle:"🌐 ภาษา / Language",

        homeModalTitle:"🏠 ลงทะเบียนที่อยู่บ้าน",

        homeModalDesc:"ลงทะเบียนที่อยู่บ้านเพื่อค้นหาโรงเรียนใกล้เคียงได้ทันที",

        menuOpenAria:"เปิดเมนู",

        currentLocationAria:"ตำแหน่งปัจจุบัน",

        homeAria:"บ้าน",

        appTitleShort:"แผนที่การศึกษาพิเศษชีฮึง",

        mainScreenBtn:"หน้าหลัก",

        modeSchoolDesc:"ค้นหาด้วยชื่อโรงเรียน",

        modeNearbyDesc:"กำหนดด้วยที่อยู่หรือบนแผนที่",

        modeDreamDesc:"ศูนย์บำบัด · ศิลปะ/พลศึกษา",

        backAria:"ย้อนกลับ"

    },

    ru:{

        skipLink:"Перейти к основному содержимому (карта)",

        sidebarAria:"Поиск и список карты специальных классов",

        resizerTitle:"Перетащите, чтобы изменить ширину",

        logoAlt:"Логотип Управления образования Сихына",

        bannerTitle:"Размещение специальных классов Сихына и<br>статус Ккумидун",

        schoolSearchTitle:"🔍 Поиск школы",

        schoolSearchAria:"Поиск по названию школы",

        schoolSearchPlaceholder:"Введите название школы",

        btnSearch:"Поиск",

        resetTitle:"Очистить поиск",

        schoolResetAria:"Очистить запрос и результаты поиска школ",

        addressSearchTitle:"🏠 Домашний адрес",

        addressSearchAria:"Поиск домашнего адреса",

        addressSearchPlaceholder:"Введите ваш домашний адрес",

        addressResetAria:"Очистить запрос и результаты поиска адреса",

        myLocationBtn:"📍 Найти текущее местоположение",

        top5CloseAria:"Закрыть результаты ТОП5",

        top5Title:"⭐ ТОП5 ближайших школ",

        schoolLevelFilterAria:"Фильтр по уровню школы",

        filterAll:"Все",

        filterKinder:"Д/с",

        filterElementary:"Нач.",

        filterMiddle:"Сред.",

        filterHigh:"Ст.",

        schoolListTitle:"📚 Список школ",

        therapyTitle:"🏥 Статус терапевтических центров",

        therapyCollapseAria:"Свернуть/развернуть статус терапевтических центров",

        therapySearchAria:"Поиск названия терапевтического центра",

        orgNamePlaceholder:"Введите название учреждения",

        therapyResetAria:"Очистить запрос и результаты поиска центров",

        therapyFilterAria:"Фильтр по району терапевтических центров",

        therapyListAria:"Список терапевтических центров",

        artTitle:"🎨 Статус творческих/спортивных учреждений",

        artCollapseAria:"Свернуть/развернуть статус творческих/спортивных учреждений",

        artSearchAria:"Поиск названия творческого/спортивного учреждения",

        academyNamePlaceholder:"Введите название учреждения",

        artResetAria:"Очистить запрос и результаты поиска учреждений",

        artFilterAria:"Фильтр по району творческих/спортивных учреждений",

        artListAria:"Список творческих/спортивных учреждений",

        mapAria:"Карта размещения специальных классов города Сихын",

        loadingTitle:"🏫 Загрузка информации о школах...",

        loadingSubtitle:"Пожалуйста, подождите.",

        toggleHide:"Скрыть",

        toggleOpen:"Открыть",

        toggleHideAria:"Скрыть боковую панель",

        toggleOpenAria:"Открыть боковую панель",

        modeSchool:"Поиск спецклассов",

        modeNearby:"Школы рядом с домом",

        modeDream:"Ккумидун",

        nearbyEmptyHint:"Нажмите 📍 Текущее местоположение или 🏠 Дом, чтобы начать",

        chooseLocationTitle:"Местоположение дома",

        chooseLocationDesc:"Пожалуйста, выберите один из способов ниже",

        chooseAddressBtn:"Поиск адреса",

        orLabel:"или",

        chooseMapBtn:"Выбрать на карте",

        chooseLocationNote:"✓ Выбранное местоположение сохраняется на этом устройстве",

        pickHomeBannerText:"Нажмите на карту, чтобы выбрать местоположение вашего дома",

        cancelBtn:"Отмена",

        nearbyResetAria:"Сбросить поиск школ рядом с домом",

        refreshListBtn:"Обновить список",

        changeLocationBtn:"Выбрать другое местоположение",

        therapyTitleShort:"🏥 Терапевтические центры",

        artTitleShort:"🎨 Творческие/спортивные учреждения",

        recentSearchTitle:"🕑 Недавние поиски",

        recentSearchEmpty:"Школы, которые вы искали, появятся здесь",

        favoritesTitle:"⭐ Избранное",

        favoritesEmpty:"Нажмите ☆ на карточке школы, чтобы добавить в избранное",

        languageTitle:"🌐 Язык / Language",

        homeModalTitle:"🏠 Регистрация домашнего адреса",

        homeModalDesc:"Зарегистрируйте домашний адрес, чтобы сразу найти ближайшие школы.",

        menuOpenAria:"Открыть меню",

        currentLocationAria:"Текущее местоположение",

        homeAria:"Дом",

        appTitleShort:"Карта спецобразования Сихына",

        mainScreenBtn:"Главная",

        modeSchoolDesc:"Поиск по названию школы",

        modeNearbyDesc:"Укажите адрес или выберите на карте",

        modeDreamDesc:"Терапевтические центры · Творчество/спорт",

        backAria:"Назад"

    },

    mn:{

        skipLink:"Үндсэн агуулга руу шилжих (газрын зураг)",

        sidebarAria:"Тусгай ангийн газрын зургийн хайлт ба жагсаалт",

        resizerTitle:"Чирж өргөнийг тохируулах",

        logoAlt:"Сихүн боловсролын албаны лого",

        bannerTitle:"Сихүн тусгай ангийн байршил ба<br>Ккумидүний төлөв байдал",

        schoolSearchTitle:"🔍 Сургууль хайх",

        schoolSearchAria:"Сургуулийн нэрээр хайх",

        schoolSearchPlaceholder:"Сургуулийн нэрийг оруулна уу",

        btnSearch:"Хайх",

        resetTitle:"Хайлтыг арилгах",

        schoolResetAria:"Сургуулийн хайлт болон үр дүнг арилгах",

        addressSearchTitle:"🏠 Гэрийн хаяг",

        addressSearchAria:"Гэрийн хаяг хайх",

        addressSearchPlaceholder:"Гэрийн хаягаа оруулна уу",

        addressResetAria:"Гэрийн хаягийн хайлт болон үр дүнг арилгах",

        myLocationBtn:"📍 Одоогийн байршлыг олох",

        top5CloseAria:"ТОП5 хайлтын үр дүнг хаах",

        top5Title:"⭐ Хамгийн ойрхон ТОП5 сургууль",

        schoolLevelFilterAria:"Сургуулийн шатлалын шүүлтүүр",

        filterAll:"Бүгд",

        filterKinder:"Ц/Ц",

        filterElementary:"Бага",

        filterMiddle:"Дунд",

        filterHigh:"Ахлах",

        schoolListTitle:"📚 Сургуулийн жагсаалт",

        therapyTitle:"🏥 Эмчилгээний төвийн төлөв",

        therapyCollapseAria:"Эмчилгээний төвийн төлөвийг хураах/дэлгэх",

        therapySearchAria:"Эмчилгээний төвийн нэрээр хайх",

        orgNamePlaceholder:"Байгууллагын нэрийг оруулна уу",

        therapyResetAria:"Эмчилгээний төвийн хайлт болон үр дүнг арилгах",

        therapyFilterAria:"Эмчилгээний төвийн дүүргийн шүүлтүүр",

        therapyListAria:"Эмчилгээний төвийн жагсаалт",

        artTitle:"🎨 Урлаг/биеийн тамирын сургуулийн төлөв",

        artCollapseAria:"Урлаг/биеийн тамирын сургуулийн төлөвийг хураах/дэлгэх",

        artSearchAria:"Урлаг/биеийн тамирын сургуулийн нэрээр хайх",

        academyNamePlaceholder:"Сургуулийн нэрийг оруулна уу",

        artResetAria:"Сургуулийн хайлт болон үр дүнг арилгах",

        artFilterAria:"Урлаг/биеийн тамирын сургуулийн дүүргийн шүүлтүүр",

        artListAria:"Урлаг/биеийн тамирын сургуулийн жагсаалт",

        mapAria:"Сихүн хотын тусгай ангийн байршлын газрын зураг",

        loadingTitle:"🏫 Сургуулийн мэдээллийг ачааллаж байна...",

        loadingSubtitle:"Түр хүлээнэ үү.",

        toggleHide:"Нуух",

        toggleOpen:"Нээх",

        toggleHideAria:"Хажуугийн самбарыг нуух",

        toggleOpenAria:"Хажуугийн самбарыг нээх",

        modeSchool:"Тусгай анги хайх",

        modeNearby:"Гэрийн ойролцоох сургууль",

        modeDream:"Ккумидүн",

        nearbyEmptyHint:"📍 Одоогийн байршил эсвэл 🏠 Гэр товчийг дарж эхлээрэй",

        chooseLocationTitle:"Гэрийн байршил",

        chooseLocationDesc:"Доорх аргуудаас сонгоно уу",

        chooseAddressBtn:"Хаяг хайх",

        orLabel:"эсвэл",

        chooseMapBtn:"Газрын зураг дээр сонгох",

        chooseLocationNote:"✓ Сонгосон байршил энэ төхөөрөмжид хадгалагдана",

        pickHomeBannerText:"Гэрийн байршлаа сонгохын тулд газрын зураг дээр дарна уу",

        cancelBtn:"Цуцлах",

        nearbyResetAria:"Гэрийн ойролцоох сургуулийн хайлтыг шинэчлэх",

        refreshListBtn:"Жагсаалтыг сэргээх",

        changeLocationBtn:"Байршлыг дахин сонгох",

        therapyTitleShort:"🏥 Эмчилгээний төв",

        artTitleShort:"🎨 Урлаг/биеийн тамирын сургууль",

        recentSearchTitle:"🕑 Сүүлийн хайлт",

        recentSearchEmpty:"Таны хайсан сургуулиуд энд харагдана",

        favoritesTitle:"⭐ Дуртай",

        favoritesEmpty:"Сургуулийн картан дээрх ☆-г дарж дуртай жагсаалтад нэмнэ үү",

        languageTitle:"🌐 Хэл / Language",

        homeModalTitle:"🏠 Гэрийн хаяг бүртгэх",

        homeModalDesc:"Гэрийн хаягаа бүртгэснээр ойролцоох сургуулиудыг шууд олох боломжтой.",

        menuOpenAria:"Цэсийг нээх",

        currentLocationAria:"Одоогийн байршил",

        homeAria:"Гэр",

        appTitleShort:"Сихүн тусгай боловсролын газрын зураг",

        mainScreenBtn:"Нүүр хуудас",

        modeSchoolDesc:"Сургуулийн нэрээр хайх",

        modeNearbyDesc:"Хаяг эсвэл газрын зураг дээр гэрээ тохируулах",

        modeDreamDesc:"Эмчилгээний төв · Урлаг/биеийн тамир",

        backAria:"Буцах"

    }

};

let currentLang = "ko";

// ======================================================
// 언어 전환 적용
// ======================================================
function setLanguage(lang){

    if(!I18N[lang]){

        lang = "ko";

    }

    currentLang = lang;

    const dict = I18N[lang];

    document.documentElement.lang =
        (lang==="zh") ? "zh-CN" : lang;

    document
        .querySelectorAll("[data-i18n]")
        .forEach(el=>{

            const key = el.getAttribute("data-i18n");

            if(dict[key]!==undefined){

                el.innerHTML = dict[key];

            }

        });

    document
        .querySelectorAll("[data-i18n-placeholder]")
        .forEach(el=>{

            const key = el.getAttribute("data-i18n-placeholder");

            if(dict[key]!==undefined){

                el.placeholder = dict[key];

            }

        });

    document
        .querySelectorAll("[data-i18n-aria]")
        .forEach(el=>{

            const key = el.getAttribute("data-i18n-aria");

            if(dict[key]!==undefined){

                el.setAttribute("aria-label",dict[key]);

            }

        });

    document
        .querySelectorAll("[data-i18n-title]")
        .forEach(el=>{

            const key = el.getAttribute("data-i18n-title");

            if(dict[key]!==undefined){

                el.setAttribute("title",dict[key]);

            }

        });

    document
        .querySelectorAll("[data-i18n-alt]")
        .forEach(el=>{

            const key = el.getAttribute("data-i18n-alt");

            if(dict[key]!==undefined){

                el.setAttribute("alt",dict[key]);

            }

        });

    document
        .querySelectorAll(".langBtn")
        .forEach(btn=>{

            btn.classList.toggle(

                "active",
                btn.dataset.lang===lang

            );

        });

    try{

        localStorage.setItem("siheungMapLang",lang);

    }catch(e){}

}

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

// ⭐ V4 : 지도 중심 재구성용 상태
let currentMode = "school";       // 'school' | 'nearby' | 'dream'
let currentDreamTab = "therapy";  // 'therapy' | 'art'

let savedHomeLat = null;
let savedHomeLng = null;
let savedHomeAddress = "";

const MAX_RECENT = 8;

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
        tabSelector:'.dreamTab[data-cat="therapy"]',
        bodySelector:'.dreamCatBody[data-cat-body="therapy"]',
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
        tabSelector:'.dreamTab[data-cat="art"]',
        bodySelector:'.dreamCatBody[data-cat-body="art"]',
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

    // ⭐ 데이터 로딩을 가장 먼저 시작 (로딩 화면이 확실히 꺼지도록)
    loadSchools();

    Object.values(SUPPORT_CATEGORIES).forEach(cat=>{

        loadSupportCategory(cat);

    });

    // ⭐ 버튼 연결 중 하나가 실패해도(요소를 못 찾아도)
    // 전체 실행이 멈추지 않도록 안전하게 감쌉니다.
    try{

        bindEvents();

    }catch(error){

        console.error("bindEvents 중 오류 발생 : ",error);

    }

    // ⭐ 항상 한국어로 시작
    setLanguage("ko");

    // ⭐ 저장된 우리집 주소 불러오기
    loadSavedHome();

    // ⭐ 최근검색 / 즐겨찾기 목록 렌더링
    renderRecentSearchList();

    renderFavoritesList();

    // ⭐ 초기 화면 모드 : 홈 (메뉴 카드 3개)
    // (처음 진입은 히스토리에 새로 쌓지 않고, 현재 항목을 홈으로 교체합니다)
    setMainMode("home",false);

    history.replaceState({ mode:"home" },"","#home");

    // ⭐ 뒤로가기(popstate) 처리 : 앱을 벗어나지 않고 이전 화면으로 복원
    window.addEventListener("popstate",function(e){

        // 열려있을 수 있는 오버레이(모달/메뉴)는 뒤로가기 시 항상 먼저 닫음
        document.getElementById("homeAddressModal").hidden = true;

        document.getElementById("sideMenu").classList.remove("open");

        document.getElementById("sideMenu").setAttribute("aria-hidden","true");

        document.getElementById("menuOverlay").hidden = true;

        const state = e.state || { mode:"home" };

        // 오버레이 자체의 히스토리 항목으로 돌아온 경우는
        // (거의 발생하지 않지만) 별도 처리 없이 이미 닫힘 처리로 충분합니다.
        if(state.overlay){

            return;

        }

        if(state.mode==="dream"){

            setMainMode("dream",false);

            selectDreamTab(state.dreamTab || "therapy",false);

        }else{

            setMainMode(state.mode || "home",false);

        }

    });

    // ⭐ 안전장치 : 어떤 이유로든 8초 후에도 로딩화면이 안 사라지면 강제로 숨김
    setTimeout(function(){

        const loading = document.getElementById("loading");

        if(loading && loading.style.display!=="none"){

            console.warn("로딩이 8초 넘게 지속되어 강제로 숨김 처리합니다.");

            loading.style.display = "none";

        }

    },8000);

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

    // ⭐ 언어 선택 버튼
    document
        .querySelectorAll(".langBtn")
        .forEach(btn=>{

            btn.addEventListener("click",function(){

                setLanguage(this.dataset.lang);

            });

        });

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

    document
        .getElementById("btnResetSchool")
        .addEventListener("click",resetSchoolSearch);

    // 우리집 주소 검색 (모달 내부)
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

    document
        .getElementById("btnResetAddress")
        .addEventListener("click",resetAddressSearch);

    // 우리집 주변 학교 결과화면 : 인라인 주소 검색
    document
        .getElementById("btnNearbyAddressQuick")
        .addEventListener("click",searchAddressInline);

    document
        .getElementById("nearbyAddressQuick")
        .addEventListener("keydown",function(e){

            if(e.key==="Enter"){

                searchAddressInline();

            }

        });

    // 학교급 필터 칩 (특수학급 검색 / 우리집 주변 학교 공용)
    document
        .querySelectorAll("#schoolFilterChips .chip, #nearbyFilterChips .chip")
        .forEach(chip=>{

            chip.addEventListener("click",function(){

                const group = this.closest(".chipRow");

                group.querySelectorAll(".chip").forEach(c=>{

                    c.classList.remove("active");

                });

                this.classList.add("active");

                selectedType = this.dataset.type;

                if(currentMode==="school"){

                    makeSchoolList();

                }else if(currentMode==="nearby" && searchOrigin){

                    showNearestSchools(

                        searchOrigin.lat,
                        searchOrigin.lng,
                        searchOriginName

                    );

                }

            });

        });

    // 치료기관 / 예체능학원 : 검색
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

    });

    // ⭐ 꿈이든 탭 전환 (치료기관 ↔ 예체능학원)
    document
        .querySelectorAll(".dreamTab")
        .forEach(tab=>{

            tab.addEventListener("click",function(){

                selectDreamTab(this.dataset.cat);

            });

        });

    // ⭐ 홈 화면 메뉴 카드 3개
    document
        .querySelectorAll(".menuCard")
        .forEach(card=>{

            card.addEventListener("click",function(){

                onMainActionClick(this.dataset.mode);

            });

        });

    // ⭐ 상세 패널의 뒤로가기(‹) 버튼
    document
        .querySelectorAll(".backBtn")
        .forEach(btn=>{

            btn.addEventListener("click",function(){

                setMainMode("home");

            });

        });

    // ⭐ 헤더의 🌐 언어 단축버튼 (메뉴를 열어줌)
    document
        .getElementById("btnLangShortcut")
        .addEventListener("click",openSideMenu);

    // ⭐ 헤더 제목 : 언제든 누르면 홈 화면으로
    document
        .getElementById("btnGoHome")
        .addEventListener("click",function(){

            setMainMode("home");

        });

    // ⭐ 사이드 메뉴 안의 메인화면 / 3개 카드 바로가기
    document
        .getElementById("menuGoHome")
        .addEventListener("click",function(){

            closeSideMenu();

            setMainMode("home");

        });

    document
        .querySelectorAll(".menuNavItem[data-mode]")
        .forEach(btn=>{

            btn.addEventListener("click",function(){

                closeSideMenu();

                onMainActionClick(this.dataset.mode);

            });

        });

    // ⭐ 지도 위 고정 버튼
    document
        .getElementById("btnCurrentLocationFloat")
        .addEventListener("click",function(){

            setMainMode("nearby");

            showMyLocation();

        });

    document
        .getElementById("btnHomeFloat")
        .addEventListener("click",onHomeFloatClick);

    // ⭐ 우리집 주변 학교 : 위치 선택 화면 버튼들
    document
        .getElementById("btnChooseAddress")
        .addEventListener("click",openHomeAddressModal);

    document
        .getElementById("btnChooseOnMap")
        .addEventListener("click",startPickHomeOnMap);

    document
        .getElementById("btnCancelPickHome")
        .addEventListener("click",stopPickHomeOnMap);

    document
        .getElementById("btnRefreshNearby")
        .addEventListener("click",function(){

            if(savedHomeLat!==null){

                showNearestSchools(savedHomeLat,savedHomeLng,"🏠 " + savedHomeAddress);

            }else if(currentLat!==null){

                showNearestSchools(currentLat,currentLng,"📍 현재 위치");

            }

        });

    document
        .getElementById("btnChangeLocation")
        .addEventListener("click",function(){

            clearTop5();

        });

    document
        .getElementById("btnResetNearby")
        .addEventListener("click",function(){

            clearTop5();

        });

    // ⭐ 햄버거 메뉴
    document
        .getElementById("btnHamburger")
        .addEventListener("click",function(){ openSideMenu(); });

    document
        .getElementById("btnCloseMenu")
        .addEventListener("click",function(){ closeSideMenu(); });

    document
        .getElementById("menuOverlay")
        .addEventListener("click",function(){ closeSideMenu(); });

    // ⭐ 우리집 주소 등록 모달
    document
        .getElementById("btnCloseHomeModal")
        .addEventListener("click",function(){ closeHomeAddressModal(); });

    // ⭐ 바텀시트 드래그
    bindBottomSheetDrag();

}

// ======================================================
// ⭐ 3대 메인 버튼 클릭 처리
// ======================================================
function onMainActionClick(mode){

    setMainMode(mode);

    // ⭐ 특수학급 검색 / 우리집 주변 학교는 새 페이지처럼 크게(전체 높이) 열어줍니다.
    if(mode==="school"){

        setSheetState("full");

        makeSchoolList();

    }

    if(mode==="nearby"){

        setSheetState("full");

    }

    // 우리집 주변 학교로 들어왔는데 아직 기준 위치가 없으면
    // 바로 우리집 주소 등록을 유도합니다.
    if(mode==="nearby" && !searchOrigin){

        if(savedHomeLat!==null){

            map.setCenter(new kakao.maps.LatLng(savedHomeLat,savedHomeLng));

            showNearestSchools(savedHomeLat,savedHomeLng,"🏠 " + savedHomeAddress);

        }

    }

}

// ======================================================
// ⭐ 모드 전환 (특수학급 검색 / 우리집 주변 학교 / 꿈이든)
// 세 모드는 지도 위에서 서로 절대 같이 표시되지 않습니다.
// ======================================================
function setMainMode(mode,pushHistory){

    currentMode = mode;

    document
        .querySelectorAll(".sheetPanel")
        .forEach(panel=>{

            panel.hidden = panel.dataset.panel !== mode;

        });

    // 모드 전환 시 열려있던 학교/지원기관 정보창 닫기
    closeSchoolCard();

    applyModeVisibility();

    // 시트를 중간 높이로 살짝 열어줍니다.
    setSheetState("mid");

    // ⭐ 뒤로가기(popstate)로 인한 복원이 아니면 히스토리에 기록
    if(pushHistory!==false){

        history.pushState(

            { mode:mode, dreamTab:currentDreamTab },

            "",

            "#" + mode

        );

    }

}

function applyModeVisibility(){

    // 학교 전체 마커 : 홈 화면(전체 개요) / '특수학급 검색' 모드에서 표시
    toggleSchoolMarkers(currentMode==="school" || currentMode==="home");

    // '우리집 주변 학교' 모드가 아니면 TOP5 마커 정리
    if(currentMode!=="nearby"){

        clearTop5();

    }

    // 치료기관 / 예체능학원 마커
    Object.values(SUPPORT_CATEGORIES).forEach(cat=>{

        const tabKey = (cat===SUPPORT_CATEGORIES.therapy) ? "therapy" : "art";

        cat.visible = (currentMode==="dream" && currentDreamTab===tabKey);

        applySupportFilter(cat);

    });

}

// ======================================================
// ⭐ 꿈이든 탭(치료기관/예체능학원) 전환
// ======================================================
function selectDreamTab(catKey,pushHistory){

    currentDreamTab = catKey;

    document
        .querySelectorAll(".dreamTab")
        .forEach(tab=>{

            tab.classList.toggle("active",tab.dataset.cat===catKey);

        });

    document
        .querySelectorAll(".dreamCatBody")
        .forEach(body=>{

            body.hidden = body.dataset.catBody !== catKey;

        });

    closeSchoolCard();

    applyModeVisibility();

    if(pushHistory!==false){

        history.pushState(

            { mode:"dream", dreamTab:catKey },

            "",

            "#dream-" + catKey

        );

    }

}

// ======================================================
// ⭐ 지도 위 🏠 버튼 : 우리집 등록/이동
// ======================================================
function onHomeFloatClick(){

    if(savedHomeLat===null){

        openHomeAddressModal();

    }else{

        setMainMode("nearby");

        map.setCenter(new kakao.maps.LatLng(savedHomeLat,savedHomeLng));

        showNearestSchools(savedHomeLat,savedHomeLng,"🏠 " + savedHomeAddress);

    }

}

function openHomeAddressModal(){

    document.getElementById("homeAddressModal").hidden = false;

    document.getElementById("address").focus();

    history.pushState({ overlay:"homeModal" },"","#homeModal");

}

function closeHomeAddressModal(fromPopstate){

    document.getElementById("homeAddressModal").hidden = true;

    if(!fromPopstate && history.state && history.state.overlay==="homeModal"){

        history.back();

    }

}

function loadSavedHome(){

    try{

        const raw = localStorage.getItem("siheungMapHome");

        if(!raw){

            return;

        }

        const home = JSON.parse(raw);

        savedHomeLat = home.lat;
        savedHomeLng = home.lng;
        savedHomeAddress = home.address;

        document.getElementById("btnHomeFloat").classList.add("homeSet");

    }catch(e){}

}

function saveHome(lat,lng,address){

    savedHomeLat = lat;
    savedHomeLng = lng;
    savedHomeAddress = address;

    document.getElementById("btnHomeFloat").classList.add("homeSet");

    try{

        localStorage.setItem(

            "siheungMapHome",

            JSON.stringify({ lat:lat, lng:lng, address:address })

        );

    }catch(e){}

}

// ======================================================
// ⭐ 햄버거 메뉴 (사이드 드로어) 열기/닫기
// ======================================================
function openSideMenu(){

    document.getElementById("sideMenu").classList.add("open");

    document.getElementById("sideMenu").setAttribute("aria-hidden","false");

    document.getElementById("menuOverlay").hidden = false;

    history.pushState({ overlay:"sideMenu" },"","#menu");

}

function closeSideMenu(fromPopstate){

    document.getElementById("sideMenu").classList.remove("open");

    document.getElementById("sideMenu").setAttribute("aria-hidden","true");

    document.getElementById("menuOverlay").hidden = true;

    if(!fromPopstate && history.state && history.state.overlay==="sideMenu"){

        history.back();

    }

}

// ======================================================
// ⭐ 최근 검색 (localStorage)
// ======================================================
function addRecentSearch(item){

    let list = [];

    try{

        list = JSON.parse(localStorage.getItem("siheungMapRecent") || "[]");

    }catch(e){}

    list = list.filter(r=> r.name !== item.name);

    list.unshift({

        name:item.name,
        lat:item.lat,
        lng:item.lng,
        type:item.type || ""

    });

    list = list.slice(0,MAX_RECENT);

    try{

        localStorage.setItem("siheungMapRecent",JSON.stringify(list));

    }catch(e){}

    renderRecentSearchList();

}

function renderRecentSearchList(){

    const ul = document.getElementById("recentSearchList");

    let list = [];

    try{

        list = JSON.parse(localStorage.getItem("siheungMapRecent") || "[]");

    }catch(e){}

    if(list.length===0){

        ul.innerHTML =
            `<li class="menuEmptyHint" data-i18n="recentSearchEmpty">${I18N[currentLang].recentSearchEmpty}</li>`;

        return;

    }

    ul.innerHTML = "";

    list.forEach(r=>{

        const li = document.createElement("li");

        li.innerHTML =
            `${getSchoolBadge(r.type)} ${r.name}`;

        li.onclick = function(){

            closeSideMenu();

            setMainMode("school");

            const found = allSchools.find(s=>s.name===r.name);

            if(found){

                moveSchool(found);

            }else{

                map.setCenter(new kakao.maps.LatLng(r.lat,r.lng));

            }

        };

        ul.appendChild(li);

    });

}

// ======================================================
// ⭐ 즐겨찾기 (localStorage)
// ======================================================
function isFavorite(name){

    try{

        const list = JSON.parse(localStorage.getItem("siheungMapFavorites") || "[]");

        return list.some(f=>f.name===name);

    }catch(e){

        return false;

    }

}

function toggleFavorite(item){

    let list = [];

    try{

        list = JSON.parse(localStorage.getItem("siheungMapFavorites") || "[]");

    }catch(e){}

    const exists = list.some(f=>f.name===item.name);

    if(exists){

        list = list.filter(f=>f.name!==item.name);

    }else{

        list.unshift({

            name:item.name,
            lat:item.lat,
            lng:item.lng,
            type:item.type || ""

        });

    }

    try{

        localStorage.setItem("siheungMapFavorites",JSON.stringify(list));

    }catch(e){}

    renderFavoritesList();

    return !exists;

}

function renderFavoritesList(){

    const ul = document.getElementById("favoritesList");

    let list = [];

    try{

        list = JSON.parse(localStorage.getItem("siheungMapFavorites") || "[]");

    }catch(e){}

    if(list.length===0){

        ul.innerHTML =
            `<li class="menuEmptyHint" data-i18n="favoritesEmpty">${I18N[currentLang].favoritesEmpty}</li>`;

        return;

    }

    ul.innerHTML = "";

    list.forEach(f=>{

        const li = document.createElement("li");

        li.innerHTML =
            `${getSchoolBadge(f.type)} ${f.name}`;

        li.onclick = function(){

            closeSideMenu();

            setMainMode("school");

            const found = allSchools.find(s=>s.name===f.name);

            if(found){

                moveSchool(found);

            }else{

                map.setCenter(new kakao.maps.LatLng(f.lat,f.lng));

            }

        };

        ul.appendChild(li);

    });

}

// ======================================================
// ⭐ 바텀시트 : 드래그로 높이 조절 (3단계 스냅)
// ======================================================
function setSheetState(state){

    const sheet = document.getElementById("bottomSheet");

    sheet.classList.remove("sheet-collapsed","sheet-mid","sheet-full");

    sheet.classList.add("sheet-" + state);

    const rightBtns = document.querySelector(".mapFloatButtonsRight");

    const heightMap = { collapsed:"112px", mid:"calc(38dvh + 16px)", full:"calc(80dvh + 16px)" };

    rightBtns.style.bottom =
        state==="full" ? "16px" : heightMap[state];

}

function bindBottomSheetDrag(){

    const sheet = document.getElementById("bottomSheet");

    const handle = document.getElementById("sheetHandle");

    let startY = 0;

    let startHeight = 0;

    let dragging = false;

    function getHeightPx(){

        return sheet.getBoundingClientRect().height;

    }

    function onDown(clientY){

        dragging = true;

        startY = clientY;

        startHeight = getHeightPx();

        sheet.classList.add("dragging");

    }

    function onMove(clientY){

        if(!dragging){

            return;

        }

        const delta = startY - clientY;

        let newHeight = startHeight + delta;

        const maxHeight = window.innerHeight * 0.8;

        const minHeight = 96;

        newHeight = Math.min(Math.max(newHeight,minHeight),maxHeight);

        sheet.style.height = newHeight + "px";

    }

    function onUp(){

        if(!dragging){

            return;

        }

        dragging = false;

        sheet.classList.remove("dragging");

        const h = getHeightPx();

        const vh = window.innerHeight;

        sheet.style.height = "";

        if(h < vh * 0.22){

            setSheetState("collapsed");

        }else if(h < vh * 0.65){

            setSheetState("mid");

        }else{

            setSheetState("full");

        }

    }

    handle.addEventListener("mousedown",function(e){ onDown(e.clientY); });

    window.addEventListener("mousemove",function(e){ onMove(e.clientY); });

    window.addEventListener("mouseup",onUp);

    handle.addEventListener("touchstart",function(e){ onDown(e.touches[0].clientY); },{passive:true});

    handle.addEventListener("touchmove",function(e){ onMove(e.touches[0].clientY); },{passive:true});

    handle.addEventListener("touchend",onUp);

    handle.addEventListener("touchcancel",onUp);

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

    addRecentSearch(item);

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

        <button class="favBtn" type="button" aria-label="${item.name} 즐겨찾기">${isFavorite(item.name) ? "★" : "☆"}</button>

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

    wrap.querySelector(".favBtn")
        .onclick = function(){

            const nowFav = toggleFavorite(item);

            this.textContent = nowFav ? "★" : "☆";

        };

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
async function makeSchoolList(){

    const list =
        document.getElementById("schoolItems");

    // ⭐ 학교급 필터 적용 (전체가 아니면 해당 급만)
    let schools =
        selectedType==="전체"
            ? [...allSchools]
            : allSchools.filter(item=>item.type===selectedType);

    // ⭐ 기준 위치(현재 위치 또는 우리집)가 있으면 가까운 순 + 도보거리 표시
    const origin =
        (currentLat!==null && currentLng!==null)
            ? { lat:currentLat, lng:currentLng }
            : (savedHomeLat!==null
                ? { lat:savedHomeLat, lng:savedHomeLng }
                : null);

    if(origin){

        schools = schools.map(item=>{

            return{

                ...item,

                straightDistance:getDistance(

                    origin.lat,
                    origin.lng,
                    item.lat,
                    item.lng

                )

            };

        });

        schools.sort((a,b)=>a.straightDistance-b.straightDistance);

        // API 호출량을 아끼기 위해 가까운 30개까지만 실제 도보거리 계산
        const candidates = schools.slice(0,30);

        const rest = schools.slice(30);

        const walkingDistances =
            await getWalkingDistances(origin.lat,origin.lng,candidates);

        if(walkingDistances){

            candidates.forEach((item,i)=>{

                const walked = walkingDistances[i];

                item.distance =
                    (walked===null || walked===undefined)
                        ? item.straightDistance
                        : walked;

            });

            candidates.sort((a,b)=>a.distance-b.distance);

        }else{

            candidates.forEach(item=>{ item.distance = item.straightDistance; });

        }

        schools = candidates.concat(rest);

    }

    list.innerHTML = "";

    schools.forEach(item=>{

        const li =
            document.createElement("li");

        const distanceHtml =
            (item.distance!==undefined)
                ? `<span class="distance">🚶 ${item.distance.toFixed(1)}km</span>`
                : "";

        li.innerHTML =
            `
            <span class="schoolListMain">

                <span class="schoolListTop">

                    ${getSchoolBadge(item.type)}

                    ${item.name}

                </span>

                ${item.classInfo ? `<span class="schoolListSub">${item.classInfo}</span>` : ""}

            </span>

            ${distanceHtml}
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

        // 아직 해당 json이 없으면 그냥 이 카테고리 탭을 숨깁니다.
        console.log(cat.file + " 데이터 없음");

        document
            .querySelector(cat.tabSelector)
            ?.setAttribute("hidden","");

        document
            .querySelector(cat.bodySelector)
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

    // ⭐ 꿈이든 모드 + 해당 탭이 확실히 보이도록 전환
    const tabKey = (cat===SUPPORT_CATEGORIES.therapy) ? "therapy" : "art";

    if(currentMode!=="dream" || currentDreamTab!==tabKey){

        setMainMode("dream");

        selectDreamTab(tabKey);

    }

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

    setHomeFromAddress(keyword,closeHomeAddressModal);

}

// ⭐ 우리집 주변 학교 결과 화면에서 바로 쓰는 인라인 주소 검색
function searchAddressInline(){

    const input =
        document.getElementById("nearbyAddressQuick");

    const keyword = input.value.trim();

    if(keyword===""){

        alert("주소를 입력하세요.");

        return;

    }

    setHomeFromAddress(keyword,function(){

        input.value = "";

    });

}

// ⭐ 주소 문자열로 우리집을 설정하는 공통 로직
// (모달 검색 / 결과화면 인라인 검색이 함께 사용)
function setHomeFromAddress(keyword,onDone){

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

            // ⭐ 우리집 주소 저장 + 모달 닫기(있으면) + 우리집 주변 학교 모드로 전환
            saveHome(lat,lng,keyword);

            if(onDone){ onDone(); }

            setMainMode("nearby");

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

    searchOrigin={

        lat:lat,
        lng:lng

    };

    searchOriginName=title;

    // ⭐ 길찾기 출발지를 이 검색의 기준 위치로 항상 정확히 맞춰줌
    // (우리집 기준이면 "우리집", 현재 위치 기준이면 "현재 위치")
    if(title.includes("우리집")){

        routeStartName = "우리집";

    }else{

        routeStartName = "현재 위치";

    }

    routeStartLat = lat;

    routeStartLng = lng;

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


    // ⭐ 제목("가까운 학교 TOP5")은 항상 고정, 기준위치 문구는 표시하지 않음

    showNearbyResultsView();

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
// ⭐ 우리집 주변 학교 : 위치선택 화면 ↔ 결과 화면 전환
// ======================================================
function showNearbyChooseView(){

    const choose = document.getElementById("nearbyChooseLocation");

    const results = document.getElementById("nearbyResults");

    if(choose){ choose.hidden = false; }

    if(results){ results.hidden = true; }

}

function showNearbyResultsView(){

    const choose = document.getElementById("nearbyChooseLocation");

    const results = document.getElementById("nearbyResults");

    if(choose){ choose.hidden = true; }

    if(results){ results.hidden = false; }

}

// ======================================================
// ⭐ 지도에서 집 위치 직접 선택
// ======================================================
let pickingHomeOnMap = false;

let pickHomeListener = null;

function startPickHomeOnMap(){

    pickingHomeOnMap = true;

    map.setCursor && map.setCursor("crosshair");

    setSheetState("collapsed");

    document.getElementById("pickHomeBanner").hidden = false;

    pickHomeListener =
        kakao.maps.event.addListener(map,"click",function(mouseEvent){

            stopPickHomeOnMap();

            const lat = mouseEvent.latLng.getLat();

            const lng = mouseEvent.latLng.getLng();

            // 좌표 → 주소 문자열로 변환 (표시/길찾기용)
            const geocoder = new kakao.maps.services.Geocoder();

            geocoder.coord2Address(lng,lat,function(result,status){

                const addressName =
                    (status===kakao.maps.services.Status.OK && result[0])
                        ? (result[0].road_address
                            ? result[0].road_address.address_name
                            : result[0].address.address_name)
                        : "지도에서 선택한 위치";

                confirmHomeFromMap(lat,lng,addressName);

            });

        });

}

function stopPickHomeOnMap(){

    pickingHomeOnMap = false;

    map.setCursor && map.setCursor("");

    document.getElementById("pickHomeBanner").hidden = true;

    if(pickHomeListener){

        kakao.maps.event.removeListener(map,"click",pickHomeListener);

        pickHomeListener = null;

    }

}

function confirmHomeFromMap(lat,lng,addressName){

    routeStartName = "우리집";

    routeStartLat = lat;

    routeStartLng = lng;

    if(homeMarker){ homeMarker.setMap(null); }

    if(homeCircle){ homeCircle.setMap(null); }

    const homePosition = new kakao.maps.LatLng(lat,lng);

    homeMarker = new kakao.maps.Marker({

        position:homePosition,

        map:map,

        image:new kakao.maps.MarkerImage(

            "images/mascot_sarangi.png",

            new kakao.maps.Size(56,64),

            { offset:new kakao.maps.Point(28,64) }

        )

    });

    openHomeCard(lat,lng);

    homeCircle = new kakao.maps.Circle({

        center:homePosition,

        radius:200,

        strokeWeight:2,

        strokeColor:"#43A047",

        strokeOpacity:0.8,

        fillColor:"#66BB6A",

        fillOpacity:0.15

    });

    homeCircle.setMap(map);

    saveHome(lat,lng,addressName);

    setMainMode("nearby");

    setSheetState("mid");

    map.setCenter(homePosition);

    map.setLevel(5);

    showNearestSchools(lat,lng,"🏠 " + addressName);

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

    showNearbyChooseView();

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
const ORS_API_KEY = "여기에_발급받은_OpenRouteService_API_키를_넣어주세요";

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