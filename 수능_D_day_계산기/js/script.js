const now = new Date();
const test = new Date('2023-11-16') // 2023 수학능력시험 날짜

// 수능까지 남은 일 수 계산
const timeDiff = test.getTime() - now.getTime();

const daysUntilTest = Math.floor((timeDiff + (1000 * 60 * 60 * 9)) / (1000 * 60 * 60 * 24));
document.getElementById('dDay').innerHTML = 'D - ' + daysUntilTest;


// D - 100 표시
const day100 = new Date(test.getTime() - 100 * (1000 * 60 * 60 * 24));
const day100Date = day100.getFullYear() + '.' + (day100.getMonth() + 1) + '.' + day100.getDate();
document.getElementById('day100').innerHTML = day100Date;



// D - 50 표시
const day50 = new Date(test.getTime() - 50 * (1000 * 60 * 60 * 24));
const day50Date = day50.getFullYear() + '.' + (day50.getMonth() + 1) + '.' + day50.getDate();
document.getElementById('day50').innerHTML = day50Date;


// D - 30 표시
const day30 = new Date(test.getTime() - 30 * (1000 * 60 * 60 * 24));
const day30Date = day30.getFullYear() + '.' + (day30.getMonth() + 1) + '.' + day50.getDate();
document.getElementById('day30').innerHTML = day30Date;


// 남은 시간 표시하기


const remainTime = document.querySelector("#time");

function time() {


    const diff = test - now;

    const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
    // console.log(diff)
    // console.log((diff / (1000 * 60 * 60 * 24) + 1))

    const diffHour = Math.floor(((diff / (1000 * 60 * 60)) - 9) % 24);
    const diffMin = Math.floor((diff / (1000 * 60)) % 60);
    const diffSec = Math.floor((diff / 1000) % 60);

    remainTime.innerHTML = `11월 16일까지 ${diffDay}일 ${diffHour}시간 ${diffMin}분 ${diffSec}초`;
    now.setSeconds(now.getSeconds() + 1);
}

time();
setInterval(time, 1000);