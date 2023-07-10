const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('close', function () {
    console.log(`!@#$%^&*(\\'"<>?:;`);
});

// 따옴표와 백틱은 사용되지 않은 것으로 문자열로 묶는 처리해 출력 가능

//  코드	표시(출력)
//  \'	 작은 따옴표
//  \"	 큰 따옴표
//  \\	 백슬래시
//  \n	 줄 바꿈
//  \r	 캐리지 리턴(CR)
//  \t	 탭(TAB)
//  \b	 백스페이스
// \f	폼피드(FF)