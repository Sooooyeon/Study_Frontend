const change = document.querySelector('.chk-login-state');

const checkState = 'url(../images/check-box-color.png)';
const unCheckState = 'url(../images/check-box.png)';

change.addEventListener('click', () => {
    if (document.documentElement.style.getPropertyValue('--check-box-img') == checkState) {
        document.documentElement.style.setProperty('--check-box-img', unCheckState);
    } else {
        document.documentElement.style.setProperty('--check-box-img', checkState);
    }
})

const notice = document.querySelector('.btn-login');




notice.addEventListener('click', (e) => {
    e.preventDefault();
    const idForm = document.getElementById('user-id').value;
    const pwForm = document.getElementById('user-pw').value;

    if (idForm === '') {
        let notiId = document.getElementById('noticeInput');
        notiId.className += ' notiAdd';

        let notiIdBox = document.getElementById('user-id');
        notiIdBox.className += ' inp-id-change';
    }

    // 아이디 또는 비밀번호가 일치하지 않는걸 알아내는 식은...? 흠...
    // if (idForm === '' && pwForm === '') {
    //     let notiWrong = document.getElementById('noticeWrong');
    //     notiWrong.className += ' notiWrong';

    // }
})




// 쿼리셀렉터로 가상요소를 가져오지 못하는 이유는 html문서내에 그려지지 않아서이고, 
// 가상요소 선택자가 돔 내부적으로 계산되어서 나와서 스타일을 적용할수가 없다?