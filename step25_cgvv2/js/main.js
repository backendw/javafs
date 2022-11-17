// CGV PJ 메인 페이지 JS - main.js

window.addEventListener("DOMContentLoaded", ()=>{
    // 예고편 선택메뉴 a요소
    const movlink = document.querySelectorAll('.mlist a');
    // 여러 개의 요소일 경우 querySelectorAll()을 사용하여 HTML컬렉션에 저장
    // 컬렉션변수.item(순번) 또는 컬렉션변수[순번]
    
    // a요소의 개수
    const len = movlink.length;
    
    // for문을 이용하여 링크 설정하기
    for (let i=0; i<len; i++) {
        // 순서대로 a요소에 click 이벤트 설정하기
        movlink.item(i).onclick = function(){chgMV(this)};
        // chgMV() 함수를 직접 할당하면 함수가 바로 실행됨
        // 이벤트 발생 시 호출하려면 익명함수 즉, function(){} 안에 써야함!
        // 이것은 마치 <a href="" onclick="chgMV(this)">라고 설정한 것과 같다.
    }

    // 영화선택 메뉴 li 클릭시 클래스 적용하기
    const mli = document.querySelectorAll('.mlist ul>li');
    // console.log(mli);
    for (let x of mli) {
        console.log('x는?',x);
        x.onclick = ()=>{
            mli.forEach((ele)=>ele.classList.remove('on'));
            x.classList.add('on');
        };
    }

});

// 영화 예고편 변경 함수
function chgMV(ele) { /* ele는 전달되는 a요소 */
    // 전달변수는 선언없이 바로 쓴다.
    let minfo = ele.getAttribute("data-mv");
    // getAttribute(속성명) -> 요소의 속성 값을 읽어오는 내장함수
    // setAttribute(속성명, 값) -> 요소의 속성 값을 셋팅하는 내장함수

    const tg = document.querySelector('#screen iframe');
    tg.src = `https://www.youtube.com/embed/${minfo}?autoplay=1`;
    console.log('테스트 입니다.');
}