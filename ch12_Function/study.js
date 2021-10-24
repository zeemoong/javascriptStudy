// Javascript 에서는 함수를 매개변수로 전달하여 상황에 따라 다른 동작을 하는 함수를 구현하기 쉽다.

// 필요한 함수를 생성
var increase = function (num) {
    return ++num;
}

var decrease = function (num) {
    return --num;
}

// 함수를 객체에 저장
var predicates = {increase, decrease};

// predicate 함수를 매개변수로 전달하여 predicate 함수를 반환하는 함수를 생성
function makeCounter(predicate) {
    // var : 함수 스코프
    // 동일 함수 내에서 전역변수
    var num = 0;
    
    return function(){
        num = predicate(num);
        return num;
    }   
}

var increaser = makeCounter(predicates.increase);
console.log(increaser()); // 1
console.log(increaser()); // 2

var decreaser = makeCounter(predicates.decrease);
console.log(decreaser()); // -1
console.log(decreaser()); // -2