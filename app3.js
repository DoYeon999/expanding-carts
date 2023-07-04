//alert('하이')

//여러개를 선택시 ~All사용
const panels = document.querySelectorAll('.panel');

//3. foreach
panels.forEach(function (item) {
    item.addEventListener('click', function () {
        removeAllActive();
        item.classList.add('active')
    })
})

function removeAllActive() {
    panels.forEach(function (item) {
        item.classList.remove('active')   //클래스 active 제거
    })
}

