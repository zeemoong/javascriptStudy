function a(){
    var x = 10;

    // 명시적 타입 변환
    var str = x.toString(); // 숫자를 문자열로 타입 캐스팅한다.
    console.log(typeof str); // string
}

function b(){
    var x = 10;

    // 암묵적 타입 변환
    // 숫자 타입 x의 값을 바탕으로 새로운 문자열 타입의 값을 생성해 표현식을 평가한다.
    var str = x + '';

    console.log(typeof str, str); // string 10

    // 변수 x의 값이 변경된 것은 아니다.
    console.log(x); // 10
}

function c(){
    // 표현식이 모두 문자열 타입이여야 하는 컨텍스트
    '10' + 2               // '102'
    `1 * 10 = ${ 1 * 10 }` // "1 * 10 = 10"

    // 표현식이 모두 숫자 타입이여야 하는 컨텍스트
    5 * '10' // 50

    // 표현식이 불리언 타입이여야 하는 컨텍스트
    !0 // true
    if (1) { }
}

function d(){
    // 숫자 타입
    0 + ''              // "0"
    -0 + ''             // "0"
    1 + ''              // "1"
    -1 + ''             // "-1"
    NaN + ''            // "NaN"
    Infinity + ''       // "Infinity"
    -Infinity + ''      // "-Infinity"
    // 불리언 타입
    true + ''           // "true"
    false + ''          // "false"
    // null 타입
    null + ''           // "null"
    // undefined 타입
    undefined + ''      // "undefined"
    // 심볼 타입
    (Symbol()) + ''     // TypeError: Cannot convert a Symbol value to a string
    // 객체 타입
    ({}) + ''           // "[object Object]"
    Math + ''           // "[object Math]"
    //[] + ''             // ""
    [10, 20] + ''       // "10,20"
    (function(){}) + '' // "function(){}"
    Array + ''          // "function Array() { [native code] }"
}

function e(){
    // 문자열 타입
    +''             // 0
    +'0'            // 0
    +'1'            // 1
    +'string'       // NaN
    // 불리언 타입
    +true           // 1
    +false          // 0
    // null 타입
    +null           // 0
    // undefined 타입
    +undefined      // NaN
    // 심볼 타입
    +Symbol()       // TypeError: Cannot convert a Symbol value to a number
    // 객체 타입
    +{}             // NaN
    +[]             // 0
    +[10, 20]       // NaN
    +(function(){}) // NaN
}

function f(){
    if ('')    console.log('1');
    if (true)  console.log('2');
    if (0)     console.log('3');
    if ('str') console.log('4');
    if (null)  console.log('5');

    // 2 4
}

// 주어진 인자가 Falsy 값이면 true, Truthy 값이면 false를 반환한다.
function isFalsy(v) {
    return !v;
}

// 주어진 인자가 Truthy 값이면 true, Falsy 값이면 false를 반환한다.
function isTruthy(v) {
    return !!v;
}

function g(){
    // 모두 true를 반환한다.
    console.log(isFalsy(false));
    console.log(isFalsy(undefined));
    console.log(isFalsy(null));
    console.log(isFalsy(0));
    console.log(isFalsy(NaN));
    console.log(isFalsy(''));
    
    console.log(isTruthy(true));
    // 빈 문자열이 아닌 문자열은 Truthy 값이다.
    console.log(isTruthy('0'));
    console.log(isTruthy({}));
    console.log(isTruthy([]));
}

function h(){
    // 문자열 타입으로 변환 
    // 1. String 생성자 함수를 new 연산자 없이 호출하는 방법
    // 숫자 타입 => 문자열 타입
    console.log(String(1));        // "1"
    console.log(String(NaN));      // "NaN"
    console.log(String(Infinity)); // "Infinity"
    // 불리언 타입 => 문자열 타입
    console.log(String(true));     // "true"
    console.log(String(false));    // "false"

    // 2. Object.prototype.toString 메소드를 사용하는 방법
    // 숫자 타입 => 문자열 타입
    console.log((1).toString());        // "1"
    console.log((NaN).toString());      // "NaN"
    console.log((Infinity).toString()); // "Infinity"
    // 불리언 타입 => 문자열 타입
    console.log((true).toString());     // "true"
    console.log((false).toString());    // "false"

    // 3. 문자열 연결 연산자를 이용하는 방법
    // 숫자 타입 => 문자열 타입
    console.log(1 + '');        // "1"
    console.log(NaN + '');      // "NaN"
    console.log(Infinity + ''); // "Infinity"
    // 불리언 타입 => 문자열 타입
    console.log(true + '');     // "true"
    console.log(false + '');    // "false"
}

function i(){
    // 숫자 타입으로 변환
    // 1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
    // 문자열 타입 => 숫자 타입
    console.log(Number('0'));     // 0
    console.log(Number('-1'));    // -1
    console.log(Number('10.53')); // 10.53
    // 불리언 타입 => 숫자 타입
    console.log(Number(true));    // 1
    console.log(Number(false));   // 0

    // 2. parseInt, parseFloat 함수를 사용하는 방법(문자열만 변환 가능)
    // 문자열 타입 => 숫자 타입
    console.log(parseInt('0'));       // 0
    console.log(parseInt('-1'));      // -1
    console.log(parseFloat('10.53')); // 10.53

    // 3. + 단항 연결 연산자를 이용하는 방법
    // 문자열 타입 => 숫자 타입
    console.log(+'0');     // 0
    console.log(+'-1');    // -1
    console.log(+'10.53'); // 10.53
    // 불리언 타입 => 숫자 타입
    console.log(+true);    // 1
    console.log(+false);   // 0

    // 4. * 산술 연산자를 이용하는 방법
    // 문자열 타입 => 숫자 타입
    console.log('0' * 1);     // 0
    console.log('-1' * 1);    // -1
    console.log('10.53' * 1); // 10.53
    // 불리언 타입 => 숫자 타입
    console.log(true * 1);    // 1
    console.log(false * 1);   // 0
}

function j(){
    // 불리언 타입으로 변환
    // 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
    // 문자열 타입 => 불리언 타입
    console.log(Boolean('x'));       // true
    console.log(Boolean(''));        // false
    console.log(Boolean('false'));   // true
    // 숫자 타입 => 불리언 타입
    console.log(Boolean(0));         // false
    console.log(Boolean(1));         // true
    console.log(Boolean(NaN));       // false
    console.log(Boolean(Infinity));  // true
    // null 타입 => 불리언 타입
    console.log(Boolean(null));      // false
    // undefined 타입 => 불리언 타 입
    console.log(Boolean(undefined)); // false
    // 객체 타입 => 불리언 타입
    console.log(Boolean({}));        // true
    console.log(Boolean([]));        // true

    // 2. ! 부정 논리 연산자를 두번 사용하는 방법
    // 문자열 타입 => 불리언 타입
    console.log(!!'x');       // true
    console.log(!!'');        // false
    console.log(!!'false');   // true
    // 숫자 타입 => 불리언 타입
    console.log(!!0);         // false
    console.log(!!1);         // true
    console.log(!!NaN);       // false
    console.log(!!Infinity);  // true
    // null 타입 => 불리언 타입
    console.log(!!null);      // false
    // undefined 타입 => 불리언 타입
    console.log(!!undefined); // false
    // 객체 타입 => 불리언 타입
    console.log(!!{});        // true
    console.log(!![]);        // true
}

function k(){
    // 단축평가
    // 논리합(||) 연산자
    'Cat' || 'Dog'  // 'Cat'
    false || 'Dog'  // 'Dog'
    'Cat' || false  // 'Cat'

    // 논리곱(&&) 연산자
    'Cat' && 'Dog'  // Dog
    false && 'Dog'  // false
    'Cat' && false  // false
}

function l(){
    // 단축 평가를 사용한 매개변수의 기본값 설정
    function getStringLength(str) {
        str = str || '';
        console.log(str.length);
        return str.length;
    }
    
    getStringLength();     // 0
    getStringLength('hi'); // 2
    
    // ES6의 매개변수의 기본값 설정
    function getStringLength(str = '') {
        console.log(str.length);
        return str.length;
    }
    
    getStringLength();     // 0
    getStringLength('hi'); // 2
}