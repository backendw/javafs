// CGV 인트로 페이지 JS - intro.js

window.addEventListener("DOMContentLoaded", ()=>{
    // 동영상이 끝나면 메인 페이지로 이동하기
    const myvid = document.getElementById('myvid');
    // console.log(myvid);
    // timeupdate ~ 동영상이 재생중일 때 발생하는 이벤트
    myvid.ontimeupdate = ()=>{
        // paused 속성 ~ 비디오 멈춤 상태이면 true, 아니면 false
        //console.log(myvid.paused);
        if (myvid.paused) {
            // location.href = "url" -> 페이지 이동!
            location.href = "main.html";
        }
    };

    // 들어가기 버튼 클릭시 첫 페이지 이동하기
    const enter = document.querySelector('#enter a');

    enter.onclick = ()=> location.href = 'main.html';

});