// 도깨비 PJ v3 - 메인 페이지 JS - main.js

window.addEventListener("DOMContentLoaded", ()=>{
    // 햄버거 버튼 클릭 시 .top에 .on 추가/제거
    const ham = document.querySelector('.ham');
    const top = document.querySelector('.top');
    ham.onclick = () => top.classList.toggle('on');    
}); //addEventListener()