const uniqueIdentifier = "JWK-WEDDING-TEMPLATE-V1";

// 갤러리 레이아웃 타입 정의
type GalleryLayout = "scroll" | "grid";
type GalleryPosition = "middle" | "bottom";

interface GalleryConfig {
  layout: GalleryLayout;
  position: GalleryPosition;
  images: string[];
}

export const weddingConfig = {
  // 메타 정보
  meta: {
    title: "심기성 ❤️ 김민주의 결혼식에 초대합니다",
    description: "결혼식 초대장",
    ogImage: "/images/gallery/01.JPG",
    noIndex: true,
    _jwk_watermark_id: uniqueIdentifier,
  },

  // 메인 화면
  main: {
    title: "Wedding Invitation",
    image: "/images/gallery/01.JPG",
    date: "2026년 7월 17일 금요일 12시 00분",
    venue: "소피텔 앰배서더"
  },

  // 소개글
  intro: {
    title: "",
    text: "서로를 바라보며 걸어온\n소중한 발걸음이\n이제 하나의 길로 이어집니다.\n\n사랑과 믿음으로\n새 가정을 이루는 저희 두 사람의\n작은 시작을 알려드립니다."
  },

  // 결혼식 일정
  date: {
    year: 2026,
    month: 7,
    day: 17,
    hour: 12,
    minute: 0,
    displayDate: "2026.07.17 FRI PM 12:00",
  },

  // 장소 정보
  venue: {
    name: "소피텔 앰배서더",
    address: "서울 송파구 잠실로 209",
    tel: "02-2092-6000",
    naverMapId: "소피텔 앰배서더", // 네이버 지도 검색용 장소명
    coordinates: {
      latitude: 37.5137247,
      longitude: 127.1061375,
    },
    placeId: "1374313303", // 네이버 지도 장소 ID
    mapZoom: "16", // 지도 줌 레벨
    //mapNaverCoordinates: "14141300,4507203,15,0,0,0,dh", // 네이버 지도 길찾기 URL용 좌표 파라미터 (구 형식)
    transportation: {
      subway: "잠실역(2호선, 8호선) 하차 후 도보 200m\n송파나루역(9호선) 하차 후 도보 500m",
    },
    parking: "건물 지하 주차장 이용 가능 (3시간 무료)",
    // 신랑측 배차 안내
    /*
    groomShuttle: {
      location: "신랑측 배차 출발지",
      departureTime: "오전 10시 30분 출발",
      contact: {
        name: "담당자명",
        tel: "010-1234-5678"
      }
    },
    // 신부측 배차 안내
    brideShuttle: {
      location: "신부측 배차 출발지",
      departureTime: "오전 11시 출발",
      contact: {
        name: "담당자명",
        tel: "010-9876-5432"
      }
    }
     */
  } as import('../types/wedding').Venue,

  // 갤러리
  gallery: {
    layout: "grid" as GalleryLayout, // "scroll" 또는 "grid" 선택
    position: "bottom" as GalleryPosition, // "middle" (현재 위치) 또는 "bottom" (맨 하단) 선택
    images: [
      "/images/gallery/image1.jpg",
      "/images/gallery/image2.jpg",
      "/images/gallery/image3.jpg",
      "/images/gallery/image4.jpg",
      "/images/gallery/image5.jpg",
      "/images/gallery/image6.jpg",
      "/images/gallery/image7.jpg",
      "/images/gallery/image8.jpg",
      "/images/gallery/image9.jpg",
    ],
  } as GalleryConfig,

  // 초대의 말씀
  invitation: {
    message: "한 줄기 별빛이 되어 만난 인연\n평생을 함께 걸어가려 합니다.\n\n소중한 분들의 축복 속에\n저희 두 사람이 첫 걸음을 내딛습니다.\n\n귀한 시간 내어 함께해 주신다면\n그 어떤 축복보다 값진 선물이 될 것입니다.",
    groom: {
      name: "심기성",
      label: "아들",
      father: "심우승",
      mother: "정광숙",
    },
    bride: {
      name: "김민주",
      label: "딸",
      father: "",
      mother: "김현미",
    },
  },

  // 계좌번호
  account: {
    groom: {
      bank: "카카오뱅크",
      number: "3333-02-5382831",
      holder: "심기성",
    },
    bride: {
      bank: "신한은행",
      number: "110-383-643527",
      holder: "김민주",
    },
  },

  // RSVP 설정
  rsvp: {
    enabled: false, // RSVP 섹션 표시 여부
    showMealOption: false, // 식사 여부 입력 옵션 표시 여부
  },

  // 슬랙 알림 설정
  slack: {
    webhookUrl: process.env.NEXT_PUBLIC_SLACK_WEBHOOK_URL || "",
    channel: "#wedding-response",
    compactMessage: true, // 슬랙 메시지를 간결하게 표시
  },
}; 
