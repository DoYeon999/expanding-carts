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