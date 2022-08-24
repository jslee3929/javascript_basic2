// 셀렉터를 찾는 데 성능 낭비되므로 셀렉터는 변수에 담기
// var tabButton = document.querySelectorAll('.tab-button')
// var tabContent = document.querySelectorAll('.tab-content')

// for 반복문
// i=0부터 시작, 반복될때마다 i+1, i < 3 = true까지 반복
// 괄호 안의 변수를 let으로 선언해야 정상 동작
// for (let i = 0; i < 3; i++) {
//     // tab-button[i] 누르면
//     // 아래 코드는 페이지 로딩 시 최초 실행됨
//     // 이후 사용자가 해당 버튼 누를때까지 대기
//     // 해당 버튼 누르면 i에 해당하는 이벤트리스너 실행
//     tabButton[i].addEventListener('click', function () {
//         for (let j = 0; j < 3; j++) {
//             // 1. 모든 tab-button의 orange 클래스 제거
//             tabButton[j].classList.remove('orange');
//             // 2. 모든 tab-content의 show 클래스 제거
//             tabContent[j].classList.remove('show');
//         }
//         // 3. tab-button[i]에 orange 클래스 부착
//         tabButton[i].classList.add('orange');
//         // 4. tab-content[i]에 show 클래스 부착
//         tabContent[i].classList.add('show');
//     })
// }

// 동일한 기능을 jQuery로 구현
var tabButton = $('.tab-button');
var tabContent = $('.tab-content');
// tabLength = tab-button 클래스 갯수
var tabLength = $('.tab-button').length;

// 확장성을 위해 반복 횟수 = tab-button 클래스 갯수
for (let i = 0; i < tabLength; i++) {
    tabButton.eq(i).on('click', function () {
        // jQuery는 removeClass가 간편함
        tabButton.removeClass('orange');
        tabButton.eq(i).addClass('orange');
        tabContent.removeClass('show');
        tabContent.eq(i).addClass('show');
    })
};