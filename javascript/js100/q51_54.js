// 51번 merge sort를 만들어보자
// [1, 3, 5, 4, 8, 6, 7, 2]
// [1, 3, 5, 4], [8, 6, 7, 2]
// [1, 3], [5, 4], [8, 6], [7, 2]
// [1], [3], [5], [4], [8], [6], [7], [2]
// [1, 3], [4, 5], [6, 8], [2, 7]
// [1, 3, 4, 5], [2, 6, 7, 8]
// [1, 2, 3, 4, 5, 6, 7, 8]

// 분할부분
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(leff), mergeSort(right))
}

// 정렬하고 합치는 부분
function merge(left, right) {
    let result = [];
    while (left.length && right.length) {
        if (letf[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while (left.length) {
        result.push(left.shift());
    }
    while (right.length) {
        result.push(right.shift());
    }
}








// 52번 quick sort
// [1, 3, 2, 7, 5, 6, 4, 8, 9, 10]
// [1, 3, 2, 5, 4] + [6] + [7, 8, 9, 10]
// [1] + [2] + [3, 5, 4] + 6 + [7, 8] + [9] + [10]
// 1 + 2 + [3] + [4] + 5 + 6 + [7] + [8] + [9] + [10]
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}








// 53번 괄호 문자열
function mathBrackets(arr) {
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '(') {
            count++;
        }
        if (arr[i] === ')') {
            count--;
        }
    }
    if (count !== 0) {
        return false;
    }
    let braket = [];
    for (let i in arr) {
        if (arr[i] === '(') {
            braket.push('(');
        }
        if (arr[i] === ')') {
            if (braket.length === 0) {
                return false;
            }
            braket.pop()
        }
    }
    return true;
}

const n = '((())'.split('')
console.log(n);
console.log(mathBrackets(n));








// 54번 연속되는 수
const n = "1 3 8 4 2 5".split('');

n.sort();

function solution(n) {
    for (let i = 0; i < n.length - 1; i++) {
        if (Number(n[i]) + 1 !== Number(n[i + 1])) {
            return "NO";
        }
    }
    return "YES";
}



