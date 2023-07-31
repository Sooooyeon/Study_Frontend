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


// 쿼리셀렉터로 가상요소를 가져오지 못하는 이유는 html문서내에 그려지지 않아서이고, 
// 가상요소 선택자가 돔 내부적으로 계산되어서 나와서 스타일을 적용할수가 없다?