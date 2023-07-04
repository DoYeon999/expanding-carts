//alert('하이')

//여러개를 선택시 ~All사용
const panels = document.querySelectorAll('.panel');

//2. for in 문
for (const panel of panels) {
    panel.addEventListener('click', function () {
        //다른데 있는 클래스 active를 삭제한다.(5개 전부 다 삭제하기)
        removeAllActive();
        panel.classList.add('active')   //클래스 active 추가
    })
}
function removeAllActive() {
    for (let panel in panels) {
        panel.classList.remove('active')   //클래스 active 제거

    }
}


//1. 전통 박복문
for (let i = 0; i < panels.length; i++) {
    panels[i].addEventListener('click', function () {
        //다른데 있는 클래스 active를 삭제한다.(5개 전부 다 삭제하기)
        removeAllActive();
        panels[i].classList.add('active')   //클래스 active 추가
    })   //function(){} >> 함수이되 이름이 없는 일회용 함수

}


function removeAllActive() {
    for (let i = 0; i < panels.length; i++) {

        panels[i].classList.remove('active')   //클래스 active 제거

    }
}
