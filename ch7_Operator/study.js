function a(){
    // 산술 연산자
    5 * 4 // 20

    // 문자열 연결 연산자
    'My name is ' + 'Lee' // "My name is Lee"

    // 할당 연산자
    var color = 'red'; // "red"

    // 비교 연산자
    3 > 5 // false

    // 논리 연산자
    (5 > 3) && (2 < 4)  // true

    // 타입 연산자
    typeof 'Hi' // "string"
}

function b(){
    var x = 5, result;

    // 선대입 후증가 (Postfix increment operator)
    result = x++;
    console.log(result, x); // 5 6

    // 선증가 후대입 (Prefix increment operator)
    result = ++x;
    console.log(result, x); // 7 7

    // 선대입 후감소 (Postfix decrement operator)
    result = x--;
    console.log(result, x); // 7 6

    // 선감소 후대입 (Prefix decrement operator)
    result = --x;
    console.log(result, x); // 5 5
}

function c(){
    // + 단항 연산자는 피연산자에 어떠한 효과도 없다. 
    // 음수를 양수로 반전하지도 않는다. 
    // 그런데 숫자 타입이 아닌 피연산자에 사용하면 피연산자를 숫자 타입으로 변환하여 반환한다. 이때 피연산자를 변경하는 것은 아니고 숫자 타입으로 변환한 값을 생성해서 반환한다. 따라서 부수 효과는 없다.
    +10 // 10
    +'10' // 10
    +true // 1
    +false // 0
    -10 // -10
    -'10' // -10
    -true // -1
    -false // -0
}

function d(){
    // + 연산자는 피연산자 중 하나 이상이 문자열인 경우 문자열 연결 연산자로 동작한다. 
    // 그 외의 경우는 덧셈 연산자로 동작한다. 아래 예제를 살펴보자.
    // 문자열 연결 연산자
    '1' + '2'      // '12'
    '1' + 2       // '12'

    // 산술 연산자
    1 + 2          // 3
    1 + true       // 2 (true → 1)
    1 + false      // 1 (false → 0)
    true + false    // 1 (true → 1 / false → 0)
    1 + null       // 1 (null → 0)
    1 + undefined // NaN (undefined → NaN)
}

function e(){
    // 표현식은 “하나의 값으로 평가된다”고 하였다. 
    // 할당 연산도 표현식이며, 하나의 값으로 평가된다.
    var x;
    console.log(x = 10); // 10

    var x, y;
    y = x = 10; // 연쇄 할당(Chained assignment)
    console.log(x, y); // 10 10
}

function f(){
    // NaN은 자신과 일치하지 않는 유일한 값이다. 
    // 따라서 숫자가 NaN인지 조사하려면 빌트인 함수 isNaN을 사용한다
    NaN === NaN // false
    isNaN(NaN) // true
    0 === -0     // true
}

function g(){
    // 부동등 비교
    5 != 8    // true
    5 != 5    // false
    5 != '5'  // false

    // 불일치 비교
    5 !== 8   // true
    5 !== 5   // false
    5 !== '5' // true
}

function i(){
    // 대소 관계 비교
    5 > 0    // true
    5 > 5    // false
    5 > 8    // false

    5 < 0    // false
    5 < 5    // false
    5 < 8    // true

    5 >= 0   // true
    5 >= 5   // true
    5 >= 8   // false

    5 <= 0   // false
    5 <= 5   // true
    5 <= 8   // true
}

function j(){
    // 3항 연산자
    var x = 2;

    // x가 짝수이면 '짝수'를 홀수이면 '홀수'를 반환한다.
    // 2 % 2는 0이고 0은 false로 암묵적 타입 변환된다.
    var result = x % 2 ? '홀수' : '짝수';

    console.log(result); // 짝수

    var x = 2, result;

    // x가 짝수이면 '짝수'를 홀수이면 '홀수'를 반환한다.
    // 2 % 2는 0이고 0은 false로 암묵적 타입 변환된다.
    if (x % 2) result = '홀수';
    else       result = '짝수';

    console.log(result); // 짝수
}

function k(){
    // 논리합(||) 연산자
    true || true   // true
    true || false  // true
    false || true  // true
    false || false // false

    // 논리곱(&&) 연산자
    true && true   // true
    true && false  // false
    false && true  // false
    false && false // false

    // 논리 부정(!) 연산자
    !true  // false
    !false // true

    // 암묵적 타입 변환
    !0 // true

    // 단축 평가
    // 하지만 논리합(||) 연산자와 논리곱(&&) 연산자의 연산 결과는 불리언 값이 아닐 수도 있다. 
    // 이 두 연산자는 언제나 피연산자 중 어는 한쪽 값을 반환한다. 
    // 이에 대해서는 단축 평가에서 자세히 살펴보기로 하자.
    'Cat' && 'Dog' // “Dog”
}

function l(){
    typeof ''              // "string"
    typeof 1               // "number"
    typeof NaN             // "number"
    typeof true            // "boolean"
    typeof undefined       // "undefined"
    typeof Symbol()        // "symbol"
    typeof null            // "object"
    typeof []              // "object"
    typeof {}              // "object"
    typeof new Date()      // "object"
    typeof /test/gi        // "object"
    typeof function () {}  // "function"
}