// 004 비교연산

var x, y;
x = 10;
y = 20;
z = '10';

document.write(x > y, '<br>'); // false
document.write(x < y, '<br>'); // true
document.write(x >= y, '<br>'); // false
document.write(x >= y, '<br>'); // true

document.write(`x == z : ${x == z} <br>`);  // true
document.write(`x === z : ${x === z} <br>`); // false
document.write(`x != z : ${x != z} <br>`);  // true



// 005 논리연산
// and - 곱 , or - 합 , not - 부정 , true = 1, false = 0

document.write(`true || true : ${true || true} <br>`); // true
document.write(`true || false : ${true || false} <br>`); // true
document.write(`false || true : ${false || true} <br>`); // true
document.write(`false || false : ${false || false} <br>`); // false

document.write(`true && true : ${true && true} <br>`); // true
document.write(`true && false : ${true && false} <br>`); // false
document.write(`false && true : ${false && true} <br>`); // false
document.write(`false && false : ${false && false} <br>`); // false

document.write(`!true : ${!true} <br>`);  // false
document.write(`!false : ${!false} <br>`); // true

let x = 12
document.write(` x % 3 == 0 || x % 5 == 0: ${x % 3 == 0 || x % 5 == 0} <br>`); // true
document.write(` x % 3 == 0 && x % 5 == 0: ${x % 3 == 0 && x % 5 == 0} <br>`); // false



// 006 변수의 타입 
document.write(`typeof(5): ${typeof (5)} <br>`); //number
document.write(`typeof(5.5): ${typeof (5.5)} <br>`); //number
document.write(`typeof('5'): ${typeof ('5')} <br>`); // string
document.write(`typeof('sooyeon'): ${typeof ('sooyeon')} <br>`); //string
document.write(`typeof(x): ${typeof (x)} <br>`); // undefined
document.write(`typeof(undefined): ${typeof (undefined)} <br>`); // undefined
document.write(`typeof([1,2,3,4]): ${typeof ([1, 2, 3, 4])} <br>`); // object
document.write(`typeof({'one':'하나','two':'둘'}): ${typeof ({ 'one': '하나', 'two': '둘' })} <br>`); // object
function js() {
    return 0;
}
document.write(`typeof(js): ${typeof (js)} <br>`); // function
document.write(`typeof(js/2): ${typeof (js / 2)} <br>`); // number
document.write(js / 2, '<br>'); // NaN

document.write(`typeof('1'+1): ${typeof ('1' + 1)} <br>`); // string
document.write('1' + 1, '<br>'); // 11

document.write(`typeof('sooyeon / 3'): ${typeof ('sooyeon / 3')} <br>`); // number
document.write('sooyeon' / 3, '<br>'); // NaN


document.write(`typeof(true): ${typeof (true)} <br>`); //boolean

let test = null;
document.write(typeof (test), '<br>'); //object




// 007 변수의 형 변환

let one = 1;
document.write(`<p> one + one : ${one + one} </p>`); // 2
document.write(`<p> String(one) + String(one) : ${String(one) + String(one)} </p>`); // 11


let two = '2';
document.write(`<p> two + two : ${two + two} </p>`); // 22
document.write(`<p> Number(two) + Number(two) : ${Number(two) + Number(two)} </p>`); // 4

let three = two + two;
document.write(`<p> typeof(three) : ${typeof (three)} </p>`); // string

document.write(`<p> Boolean(1) : ${Boolean(1)} </p>`); // true
document.write(`<p> Boolean(-1) : ${Boolean(-1)} </p>`); // true
document.write(`<p> Boolean(0) : ${Boolean(0)} </p>`); // false
document.write(`<p> Boolean('') : ${Boolean('')} </p>`); // false
document.write(`<p> Boolean(' ') : ${Boolean(' ')} </p>`); // true
document.write(`<p> Boolean([]) : ${Boolean([])} </p>`); // true
document.write(`<p> Boolean([0]) : ${Boolean([0])} </p>`); // true
document.write(`<p> Boolean('0') : ${Boolean('0')} </p>`); // true







