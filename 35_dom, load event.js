// 1. DOM의 개념
    // DOM = Document Object Model

    // 자바스크립트가 HTML 조작을 하기 위해서는 HTML을 자바스크립트가 해석할 수 있는 문법으로 변환해두어야 함
    // 브라우저는 HTML을 열 때 HTML을 자바스크립트로 쉽게 찾고 바꾸기 위해 object와 비슷한 자료형에 담아줌

    // (예시) <div style="color : red">안녕하세요</div>를 발견하면 아래와 같이 변형해서 담아둠
    // var document = {
    //     div1: {
    //         style: { color: 'red' }
    //         innerHTML: '안녕하세요'
    //     }
    // }

    // 이제 document.div1.innerHTML = '안녕'과 같이 자바스크립트를 짜면 HTML 조작 가능
    // 위 변수를 document object라고 부름. 이렇게 조작하는 방식을 document object model이라고 함
    // 자바스크립트가 HTML에 대한 정보들 (id, class, name, style, innerHTML 등)을 object 자료로 정리한걸 DOM이라고 부릅

// 2. 브라우저 작동 방식
    // 브라우저는 HTML문서를 위에서 부터 차례로 읽어내려감
    // 읽을 때 마다 HTML을 발견하면 DOM에 추가해줌
    // 자바스크립트는 DOM이 생성된 경우에만 HTML을 조작할 수 있음
    // 그래서 DOM에 추가되지 않은 요소를 조작하려고 하면 에러가 뜸

// 3. HTML 다 읽고 코드 실행시키기
    // 아래와 같이 코드 짜면 HTML 전부 다 읽고 코드를 실행하게 만들 수 있음
    // $(document).ready(function(){ 실행할 코드 })
    // document.addEventListener('DOMContentLoaded', function() { 실행할 코드 })
    // 물론 요즘은 자바스크립트를 body 태그 직전에 작성하기 때문에 별 상관 없음
    // 자바스크립트 위치를 내가 정할 수 없을 때만 유용한 방법

// 4. load 이벤트리스너
    // load 라는 이벤트리스너를 사용하면 DOM 생성뿐만 아니라 이미지, css, js파일이 로드가 됐는지도 체크가능
    // 이미지 따위가 로드되면 load라는 이벤트가 발생하기 때문임
    // 셀렉터로찾은이미지.addEventListener('load', function(){ 이미지 로드되면 실행할 코드 })
    // (주의) 외부 자바스크립트 파일에 이걸 적어놓으면 js 파일보다 이미지가 먼저 로드되어서 이벤트 발생 체크를 못할 수도 있음

    // window에 붙이면 외부 js까지 로드되어야 코드 실행해줌
    // $(window).on('load', function(){ document 안의 이미지, js 파일 포함 전부 로드가 되었을 경우 실행할 코드 });
    // window.addEventListener('load', function(){ document 안의 이미지, js 파일 포함 전부 로드가 되었을 경우 실행할 코드 });
    // ready = DOM 생성만 체크, load = 모든 파일과 이미지의 로드 상태 체크