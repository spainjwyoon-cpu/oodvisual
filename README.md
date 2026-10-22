# ood.visual 포트폴리오

공개 주소: https://spainjwyoon-cpu.github.io/oodvisual/

## 새 작품 추가하는 법 (3단계)

1. `works/<영문이름>/` 폴더를 만들고 대표 이미지(가로 16:9 권장, 예: `cover.jpg`)와 스틸컷을 넣어요.
2. `js/works.js` 맨 위 `window.WORKS = [` 바로 아래에 기존 `{ ... }` 블록 하나를 복사해 붙여넣고 내용을 바꿔요.
   - `id`: 폴더 이름과 같게 (주소가 `work.html?id=<id>`가 돼요)
   - `cover`, `gallery[].src`: `works/<id>/파일이름.jpg`
   - 영상이 있으면 `video: "https://www.youtube.com/embed/영상ID"` 한 줄 추가
   - 가이드 같은 별도 페이지는 `works/<id>/guide/index.html`로 넣고 `links`에 연결
3. GitHub에 올리면 1~2분 뒤 사이트에 반영돼요.
   ```
   git add -A && git commit -m "새 작품: <제목>" && git push
   ```

맨 위에 둔 작품이 홈 첫 칸과 큰 배경 이미지가 돼요.
소개 문구·이메일은 `js/works.js` 아래쪽 `window.SITE`에서 바꿔요.

## 주의
- `비공개` 자료(운영 메모, 원본 인물 자료, 전체 프롬프트 묶음)는 이 폴더에 넣지 마세요. 여기 있는 건 전부 공개돼요.
- 내 컴퓨터에서 미리 보기: 이 폴더에서 `python3 -m http.server 8787` 실행 후 http://localhost:8787
