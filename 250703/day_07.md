# DOM 명령어

## ✨ 1. 클래스 제어

-   classList.add() -> h1.classList.add('hello') -> h1요소에 클래스를 추가.
-   classList.remove() -> a.classList.remove('active') -> a요소에 클레스'active'를 제거
-   classList.contain() -> a.classList.contains("active"); -> 클래스가 있는지 확인 후 true & false로 출력
-   classList.toggle() -> a.classList.toggle('active') -> 클래스가 있으면 제거, 없으면 추가 (클릭이벤트에 이걸 적용하면 편할지도?..)

## ✨ 2. 요소의 크기/위치

-   getBoundingClientRect() -> div.getBoundingClientRect() -> 요소와 뷰포트 화면에서 얼마만큼 떨어져 있는지 나타낼때(x,y,width,height값이 나옴)
-   offsetLeft -> a.offsetLeft() -> 가장 가까운 부모 요소의 좌측 상단으로부터 margin을 포함한 요소의 좌측 상단까지의 x축 거리
-   offsetTop -> a.offsetLeft() -> 가장 가까운 부모 요소의 좌측 상단으로부터 margin을 포함한 요소의 좌측 상단까지의 y축 거리

## ✨ 3. 속성 제어

-   getAttribute -> a.getAttribute('href') -> 요소의 선택한 속성 값을 가져옴
-   setAttribute -> a.setAttribute('href, 'https://weniv.co.kr/') -> 요소의 속성 값을 설정함

## ✨ 4. 속성 제어

-   dataset 으로 접근하기
    <div id="div" name="John" age="30">John</div> // 속성에 data-name="Ghost" 추가됌

    <script>
        const div = document.getElementById("div");
        const name = (div.dataset.name = "Ghost");
        console.log(name);
    </script>
