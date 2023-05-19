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

const badgeEl = document.querySelector('header .badges')

window.addEventListener('scroll', _.throttle(function () {
    console.log(window.scrollY)
    if (window.scrollY > 500) {
        // 배지 숨기기 gsap.to(요소, 지속시간, 옵션)
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        })
    } else {
        // 배지 보이기
        gsap.to(badgeEl, .6, {
            opacity: 1, 
            display: 'block'
        })
    }
}, 300)) // 300ms에 한번만 실행되도록
// _.throttle(함수, 시간)


const fadeEls = document.querySelectorAll('.visual .fade-in')
fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1)*.7, // 0.7, 1.4, 2.7 - 각 요소마다 시작하는 시점이 다름
        opacity: 1, 
    })
})

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
})