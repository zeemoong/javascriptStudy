function a(){
    for (var i = 1; i <= 6; i++) {
        for (var j = 1; j <= 6; j++) {
          if (i + j === 6) console.log(`[${i}, ${j}]`);
        }
    }
}

function b(){
    // foo라는 식별자가 붙은 레이블 블록문
    foo: {
        console.log(1);
        break foo; // foo 레이블 블록문을 탈출한다.
        console.log(2);
    }
    
    console.log('Done!');    
}

function c(){
    //중첩된 for 문을 외부로 탈출할 때 레이블 문은 유용하지만 
    //그 외의 경우 레이블 문은 일반적으로 권장하지 않는다.
    // outer라는 식별자가 붙은 레이블 for 문
    outer: for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
        // i + j === 3이면 외부 for 문을 탈출한다.
        if (i + j === 3) break outer;
        }
    }
    
    console.log('Done!');
}