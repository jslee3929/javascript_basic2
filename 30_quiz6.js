// 1. Array에서 일치하는 자료 찾기
var nameList = ['흥민', '영희', '철수', '재석', '흥민']

function findName(name) {
    // for문 활용
    // for (let i = 0; i < nameList.length; i++){
    //     if (nameList[i] == name) {
    //         console.log('있어요');
    //         return // 일치하는 이름을 찾으면 함수 종료
    //     }
    // }

    // forEach문 활용
    nameList.forEach(function (data) {
        if (data == name) {
            console.log('있어요');
            return
        }
    })
}

// findName('흥민') // 있어요
// findName('명수') // (출력 X)

// 2. 2단부터 9단까지 구구단 출력하기
for (let i = 2; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        console.log(i * j);
    }
}

// 3. 평균점수 계산기 만들기
// 어떤 함수에 기존 모의고사 성적들을 array 자료에 전부 담아 첫 파라미터로 입력하고
// 이번 11월 모의고사 성적을 둘째 파라미터로 입력하면
// 11월 성적이 기존 성적들의 평균에 비해 얼마나 우수한지 결과를 알려주는 함수
// (입력예시) improvedScore([10, 20, 30, 40, 50], 40) = '평균보다 10점이 올랐네요'
// (입력예시) improvedScore([40, 40, 40], 20) = '평균보다 20점이 떨어졌네요 재수추천'