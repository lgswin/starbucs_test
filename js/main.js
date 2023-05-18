// searchIcon도 focus 되도록 (transition 효과 적용)
const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input') // searchEl 에서 input요소를 찾음

searchEl.addEventListener('click', function () { // click했을때 focus되도록
    searchInputEl.focus()
})

searchInputEl.addEventListener('focus', function () { // focus되었을때 placeholder(통합검색) 표시
    searchEl.classList.add('focused')
    searchInputEl.setAttribute('placeholder', '통합검색')
})

searchInputEl.addEventListener('blur', function () { // focus가 해제 되었을때 placeholder(통합검색) 제거
    searchEl.classList.remove('focused')
    searchInputEl.setAttribute('placeholder', '')
})