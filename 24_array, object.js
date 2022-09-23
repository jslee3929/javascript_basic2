var tabButton = $('.tab-button');
var tabContent = $('.tab-content');
var tabLength = $('.tab-button').length;

function openTab(i) {
    tabButton.removeClass('orange');
    tabButton.eq(i).addClass('orange');
    tabContent.removeClass('show');
    tabContent.eq(i).addClass('show');
}

$('.list').click(function(e){
    openTab(Number(e.target.dataset.id)) // id는 문자이므로 숫자로 변환
})