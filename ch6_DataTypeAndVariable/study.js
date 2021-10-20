function a(){
    var integer = 10;        // 정수
    var double = 10.12;      // 실수
    var negative = -20;      // 음의 정수
    var binary = 0b01000001; // 2진수
    var octal = 0o101;       // 8진수
    var hex = 0x41;          // 16진수
    
    console.log(binary); // 65
    console.log(octal);  // 65
    console.log(hex);    // 65
    // 표기법만 다를뿐 같은 값이다.
    console.log(binary === octal); // true
    console.log(octal === hex);    // true
}

function b(){
    console.log(1 === 1.0); // true

    var result = 4 / 2;
    console.log(result); // 2
    result = 3 /2;
    console.log(result); // 1.5
    
    var pInf = 10 / 0;  // 양의 무한대
    console.log(pInf);  // Infinity
    
    var nInf = 10 / -0; // 음의 무한대
    console.log(nInf);  // -Infinity
    
    var nan = 1 * 'string'; // 산술 연산 불가
    console.log(nan);       // NaN
}

function c(){
    var str = "string"; // 큰 따옴표
    str = 'string';     // 작은 따옴표
    str = `string`;     // 백틱(ES6 템플릿 리터럴)

    str = "큰 따옴표로 감싼 문자열 내의 '작은 따옴표'는 문자열이다.";
    str = '작은 따옴표로 감싼 문자열 내의 "큰 따옴표"는 문자열이다.'; // JS 에서는 문자열에 주로 작은 따옴표 표기법을 사용 
    console.log(str);
}

function d(){
    var str = 'string';
    // 문자열은 유사배열이다.
    for (var i = 0; i < str.length; i++) {
    console.log(str[i]);
    }

    // 문자열을 변경할 수 없다.
    str[0] = 'S';
    console.log(str); // string

    // 문자열은 배열처럼 인덱스를 통해 접근할 수 있다. 이와 같은 특성을 갖는 데이터를 유사 배열이라 한다.
    // str[0] = 'S'처럼 이미 생성된 문자열의 일부 문자를 변경해도 반영되지 않는다(이때 에러가 발생하지 않는다). 한번 생성된 문자열은 read only로서 변경할 수 없다. 이것을 변경 불가능(immutable)이라 한다.
    // 그러나 새로운 문자열을 재할당하는 것은 물론 가능하다. 이는 기존 문자열을 변경하는 것이 아니라 새로운 문자열을 새롭게 할당하는 것이기 때문이다.
    var str = 'string';
    console.log(str); // string

    str = 'String';
    console.log(str); // String

    str += ' test';
    console.log(str); // String test

    str = str.substring(0, 3);
    console.log(str); // Str

    str = str.toUpperCase();
    console.log(str); // STR
}

function e(){
    var foo = true;
    var bar = false;

    // typeof 연산자는 타입을 나타내는 문자열을 반환한다.
    console.log(typeof foo); // boolean
    console.log(typeof bar); // boolean

    // 비어있는 문자열과 null, undefined, 숫자 0은 false로 간주된다.
    if(""){

    } else{
        console.log('empty is false');
    }
    if(null){

    } else{
        console.log('null is false');
    }
    if(undefined){

    } else{
        console.log('undefined is false');
    }
    if(0) {

    } else{
        console.log('0 is false');
    }
}

function f(){
    // 변수의 값이 없다는 것을 명시하고 싶은 경우는 undefined를 할당하는 것이 아니라 null을 할당한다.
    var foo;
    console.log(foo); // undefined
}

function g(){
    // null 의 type 은 object 이다.
    var foo = null;
    console.log(typeof foo === null); // false
    console.log(foo === null);        // true
}

function h(){
    // 심볼(symbol)은 ES6에서 새롭게 추가된 7번째 타입으로 변경 불가능한 원시 타입의 값이다. 심볼은 주로 이름의 충돌 위험이 없는 유일한 객체의 프로퍼티 키(property key)를 만들기 위해 사용한다.
    // 심볼 key는 이름의 충돌 위험이 없는 유일한 객체의 프로퍼티 키
    var key = Symbol('key');
    console.log(typeof key); // symbol

    var obj = {};
    obj[key] = 'value';
    console.log(obj[key]); // value
}

function i(){
    // 값을 할당하지 않은 변수 즉 선언만 되어 있는 변수는 undefined로 초기값을 갖는다. 선언하지 않은 변수에 접근하면 ReferenceError가 발생한다.
    var x;
    console.log(x); // undefined
    console.log(y); // ReferenceError
}

function j(){
    // var 키워드로 선언한 변수는 중복 선언이 가능하다. 다시 말해 변수명이 같은 변수를 중복해 선언해도 에러가 발생하지 않는다.
    var x = 1;
    console.log(x); // 1

    // 변수의 중복 선언
    var x = 100;
    console.log(x); // 100
}

function k(){
    // 자바스크립트는 동적 타입(dynamic/weak type) 언어이다. 
    // 이것은 변수의 타입 지정(Type annotation)없이 값이 할당되는 과정에서 값의 타입에 의해 자동으로 타입이 결정(Type Inference)될 것이라는 뜻이다. 
    // 따라서 같은 변수에 여러 타입의 값을 할당할 수 있다. 
    // 이를 동적 타이핑(Dynamic Typing)이라 한다
    var foo;

    console.log(typeof foo);  // undefined

    foo = null;
    console.log(typeof foo);  // object

    foo = {};
    console.log(typeof foo);  // object

    foo = 3;
    console.log(typeof foo);  // number

    foo = 3.14;
    console.log(typeof foo);  // number

    foo = 'Hi';
    console.log(typeof foo);  // string

    foo = true;
    console.log(typeof foo);  // boolean
}

function l(){
    //호이스팅이란 var 선언문이나 function 선언문 등 모든 선언문이 해당 Scope의 선두로 옮겨진 것처럼 동작하는 특성을 말한다.
    //var 는 functional scope 이다.
    //let 은 block scope 이다.
    console.log(foo); // ① undefined
    var foo = 123;
    console.log(foo); // ② 123
    {
    var foo = 456;
    }
    console.log(foo); // ③ 456
}

function scope(){
    
    for(i=0; i<3; ++i){
        var x = i;
        setTimeout(() => console.log(x)); 
    }
    // 2, 2, 2

    for(i=0; i<3; ++i){
        let y = i;
        setTimeout(() => console.log(y));
    }
    // 0, 1, 2
}