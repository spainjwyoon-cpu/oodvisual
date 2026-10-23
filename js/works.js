/*
  ood.visual 작품 목록
  새 작품을 추가하려면 아래 배열 맨 위에 { ... } 하나를 복사해 붙여넣고 내용을 바꾸세요.
  이미지·파일은 works/<id>/ 폴더에 넣고 경로를 적으면 됩니다.
*/
window.WORKS = [
  {
    id: "millionbeat",
    title: "밀리언 비트",
    titleEn: "MILLION BEAT",
    year: "2026",
    type: "AI 아이돌 뮤직비디오 · 제작 가이드",
    cover: "works/millionbeat/guide/assets/cover.jpg",
    summary: "4인조 AI 아이돌의 데뷔곡 뮤직비디오. 멤버마다 자기만의 초현실 세계에서 등장하고, 네 세계가 꺼진 뒤에야 처음으로 한 무대에 서요.",
    body: [
      "〈Million Beat〉는 멤버 얼굴·의상·장소를 먼저 에셋으로 등록하고, 컷마다 원하는 앵글의 시작 프레임을 만든 뒤 Seedance로 움직임을 더해, 100BPM 박자 위에 엮은 AI 뮤직비디오예요.",
      "제작 가이드에는 솔로 월드 기획, 에셋 등록, 시작 프레임으로 앵글 고정하기, 칸을 나눈 프롬프트 구조, 군무를 자연스럽게 보이게 하는 촬영법, 자주 나는 오류와 박자 편집까지 담았어요. 실제 컷 5개의 화면과 입력 프롬프트도 함께 실었어요."
    ],
    tools: ["Suno", "Higgsfield · GPT Image 2.5", "Nano Banana Pro", "Seedance 2.0"],
    links: [
      { label: "제작 가이드 보기", url: "works/millionbeat/guide/", primary: true }
    ],
    gallery: [
      { src: "works/millionbeat/guide/assets/case_W06c.jpg", caption: "유리 조각을 튕기는 B", link: "works/millionbeat/guide/#case-w06c" },
      { src: "works/millionbeat/guide/assets/case_W07a.jpg", caption: "세탁기 안에서 본 C", link: "works/millionbeat/guide/#case-w07a" },
      { src: "works/millionbeat/guide/assets/case_S26.jpg", caption: "유리에 비친 D", link: "works/millionbeat/guide/#case-s26" },
      { src: "works/millionbeat/guide/assets/case_S41.jpg", caption: "갈라지는 무대", link: "works/millionbeat/guide/#case-s41" },
      { src: "works/millionbeat/guide/assets/case_DANCE2.jpg", caption: "네 세계를 잇는 군무", link: "works/millionbeat/guide/#case-dance2" },
      { src: "works/millionbeat/guide/assets/case_S30.jpg", caption: "옥상 위 후렴", link: "works/millionbeat/guide/#camera" }
    ]
  },
  {
    id: "bari",                      // 주소에 쓰이는 영문 이름 (work.html?id=bari)
    title: "바리",
    titleEn: "BARI",
    year: "2026",
    type: "AI 뮤지컬 애니메이션 · 제작 가이드",
    cover: "works/bari/guide/assets/cover.jpg",
    summary: "버림받은 아이가 자신을 버린 부모를 구하러 떠나는 이야기. 바리데기 설화를 펠트와 자수 천으로 만든 무대 위의 뮤지컬 애니메이션으로 옮겼어요.",
    body: [
      "〈바리〉는 Suno로 만든 노래 위에, 같은 인물과 같은 재질로 이어지는 장면 이미지를 쌓고, Kling으로 움직임을 더해 CapCut에서 한 편으로 엮은 AI 애니메이션이에요.",
      "제작 가이드에는 이야기 정리부터 노래, 장면 이미지, 영상 생성, 편집까지의 흐름과, 대표 6컷의 장면 이미지와 실제 입력 프롬프트를 함께 실었어요. 처음이라면 한 장면을 끝까지 완성해보는 것부터 시작해보세요."
    ],
    tools: ["Suno", "Higgsfield · GPT Image", "Kling 3.0", "CapCut"],
    video: "https://www.youtube.com/embed/Ya3MJo28cNY",
    links: [
      { label: "제작 가이드 보기", url: "works/bari/guide/", primary: true },
      { label: "유튜브에서 보기", url: "https://youtu.be/Ya3MJo28cNY" },
      { label: "PDF 보기", url: "works/bari/guide/output/pdf/BARI_AI애니메이션_제작가이드_실제컷사례_v2.pdf" }
    ],
    gallery: [
      { src: "works/bari/guide/assets/case_L01.jpg", caption: "숨을 고르는 바리", link: "works/bari/guide/#case-l01" },
      { src: "works/bari/guide/assets/case_L03.jpg", caption: "가시숲 사이를 걷는 바리", link: "works/bari/guide/#case-l03" },
      { src: "works/bari/guide/assets/case_L08.jpg", caption: "문지기의 작은 반응", link: "works/bari/guide/#case-l08" },
      { src: "works/bari/guide/assets/case_L12.jpg", caption: "물을 주는 바리", link: "works/bari/guide/#case-l12" },
      { src: "works/bari/guide/assets/case_L23.jpg", caption: "딸을 알아보는 아버지", link: "works/bari/guide/#case-l23" },
      { src: "works/bari/guide/assets/case_L27.jpg", caption: "금빛 길에 남기는 여운", link: "works/bari/guide/#case-l27" }
    ]
  }
];

window.SITE = {
  name: "ood.visual",
  heroWork: "bari",                   // 홈 큰 배경으로 쓸 작품 id

  tagline: "Stories imagined, created with AI.",
  about: "AI를 활용해 다양한 이야기를 영상으로 만듭니다.\n드라마, 단편영화, 시네마틱 영상, 숏폼부터\n현실에는 없던 장면과 새로운 세계까지.",
  fields: "AI filmmaking · Short Films · Drama · Visual Stories",
  motto: "조금 낯설고, 조금 아름다운 이야기들.\nOut Of the Ordinary.",
  handle: "@oodvisual",
  youtube: "https://www.youtube.com/@oodvisual",
  email: "oodvisual@gmail.com"
};
