var tabButton = $('.tab-button');
var tabContent = $('.tab-content');
var tabLength = $('.tab-button').length;

// // 축약할 코드에 변수가 있으면 변수를 파라미터로 바꿔야 잘 작동함
function openTab(i) {
    tabButton.removeClass('orange');
    tabButton.eq(i).addClass('orange');
    tabContent.removeClass('show');
    tabContent.eq(i).addClass('show');
}

// for (let i = 0; i < tabLength; i++) {
//     tabButton.eq(i).on('click', function () {
//         openTab(i)
//     })
// };

// 탭 기능 다르게 만들기
// 이벤트리스너 1개만 쓰기 (성능 이점)
// 이벤트리스너를 많이 쓰면 램 용량 차지함
// 이벤트 버블링을 알고 있으면 이벤트리스너 많이 쓸 필요 없음

// $().click(function(){}) = $().on('click', function(){})
$('.list').click(function(e){
    // 버튼[n]을 누르면
    // 버튼[n]에 orange 클래스 부착, 박스[0]에 show 클래스 부착
    // = openTab()

    // 긴 코드
    // if (e.target == document.querySelectorAll('.tab-button')[0]){
    //     openTab(0)
    // }
    // if (e.target == document.querySelectorAll('.tab-button')[1]){
    //     openTab(1)
    // }
    // if (e.target == document.querySelectorAll('.tab-button')[2]){
    //     openTab(2)
    // }
    
    // 짧은 코드
    // openTab(지금 누른 버튼의 data-id) 식으로 짜면 if문 필요없음
    openTab(Number(e.target.dataset.id)) // id는 문자이므로 숫자로 변환
})

// dataset 문법이 ie 11+ 에서 동작하는데 마음에 안들면
// 옛 브라우저까지 호환되는 jQuery 함수 이용하는 방법도 있음.
// $(셀렉터).data('데이터이름', '값') 이렇게 저장하고
// $(셀렉터).data('데이터이름') 이렇게 출력함.