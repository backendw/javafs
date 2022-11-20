// 도깨비 PJ v.3 링크시스템 JS - linksys.js

window.addEventListener("DOMContentLoaded",()=>{
    
    const link = document.querySelectorAll('.top a');
    // console.log(link);
    link.forEach(ele=>{ // ele는 각 a요소
        ele.onclick = ()=>{
            // a요소 글자데이터
            let atxt = ele.innerText;
            console.log(atxt);

            let url;
            switch(atxt) {
                case '프로그램 소개': url = 'etc'; break;
                case '인물소개': url = 'etc'; break;
                case '인물관계도': url = 'cat'; break;
                case '미리보기': url = 'etc'; break;
                case '동영상': url = 'etc'; break;
                case '클립영상': url = 'etc'; break;
                case '다시보기': url = 'etc'; break;
                case '예고편': url = 'etc'; break;
                case '스페셜': url = 'etc'; break;
                case '사진첩': url = 'etc'; break;
                case '현장 포토': url = 'etc'; break;
                case '대표 포스터': url = 'etc'; break;
                case 'OST': url = 'etc'; break;
                case '시청자 게시판': url = 'board'; break;
                case '로그인': url = 'login'; break;
                case '회원가입': url = 'member'; break;
                case '트위터 바로가기': url = 'twit'; break;
                case '인스타그램 바로가기': url = 'insta'; break;
                case '페북스북 바로가기': url = 'fab'; break;
                default: url = 'index';
            } //switch~case
            console.log('url:',url);

            if (url === 'etc') {
                alert('현재 페이지는 준비중입니다.');
            } else {
                // sns 거르기
                if (url === 'twit' || url === 'insta' || url === 'fab') {
                    // 새창열고 페이지 이동
                    window.open().location.href = 
                    // 삼항 연산자 두 번 사용
                    url === 'twit'?
                    'https://twitter.com/chtvn':
                    url === 'insta'?
                    'https://www.instagram.com/tvn_joy/':
                    'https://www.facebook.com/cjtvngo';
                } else { // 해당이름으로 페이지 이동!
                    // 현재창 페이지 이동
                    location.href = url + '.html';
                }
            } // if~else
        }; //click
    }); //forEach()

});