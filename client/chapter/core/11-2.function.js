/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */


/*function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}*/

// const resultX = calcTotal(10000, 8900, 1360, 2100);
// const resultY = calcTotal(21500, 3200, 9800, 4700);
// const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// [1000,5000,2500].forEach(function(){})




/*var x = 1;

function foo(){
    var x = 10;
    bar();
}

function bar(){
    console.log(x);
}

foo();
bar();*/








// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function(){

  // arguments : 자바스크립트 함수 안에서만 사용 가능한 입수들의 집합 객체
  // - 배열과 유사하지만 배열이 아님(배열 메서드 사용 불가)
  // - 함수에 전달한 모든 임수가 포함되며, 매개변수로 명시적으로 선언되지 않은 인수들도 포함
  // - 함수 내 지역 변수처럼 사용

  let total = 0;
  
  /*---------- for 문 ------------*/
  /*for(let i = 0; i < arguments.length; i++){
    // total = total + arguments[i];
    total += arguments[i];
  }*/
  
 

  /*--------- for..of 문 -----------*/
  /*for(let argument of arguments){
    total = total + argument;
  }*/
  

  /*---------- forEach ------------*/
  // arguments -> array
  // 유사배열을 배열로 만들어 배열의 메소드인 forEach 사용하기
  // const arr =  [...arguments];
  // const arr = Array.from(arguments)  // 유사배열 -> 배열
  // const arr = Array.prototype.slice.call(arguments);
  
  //console.log(arr);

  // forEach -> 배열의 갯수만큼 반복해줌
  /*arr.forEach(function(item){
    total += item;
  })*/


  // arr.forEach(price => total += price)



  /*---------- reduce ------------*/
  /*const total = arr.reduce(function(acc, cur){
    return acc + cur;
  }, 0)*/

  // const result = arr.reduce((acc,cur) => acc + cur,0)

  // 화살표 함수
  // return arr.reduce((acc,cur) => acc + cur,0)


  /*------- 배열 메서드를 빌려쓰는 방식 -------*/ 
  // 일회성이다. 
  /*Array.prototype.forEach.call(arguments, function(item){
    total += item
  })*/


  /*----- 태생을 배열로 바꾸기 (부모 바꿔치기) -----*/
  // arguments.__proto__ = Array.prototype;
  // console.log(arguments); // arguments는 지역변수 느낌!

  return total
};


const result = calculateTotal(1000, 5000, 2500, 4000, 2300);
// console.log(result);




// forEach => 배열 순환해서 값 반환 X (안에 return을 써도 못받음)
// reduce => 배열 순환해서 값 반환 O, 값 반환하는 형태가 숫자/문자/배열/객체 다 반환 가능!
// map => 배열 순환해서 값 반환 O, 값 반환하는 형태가 only 배열 (원본배열 안바뀜)
// filter => 배열 순환해서 값 반환 O, 값 반환하는 형태가 only 배열


/* ===============================================================*/
/* ===============================================================*/
// map 메소드 사용
// arr 훼손 안함 -> 새로운 배열 만듦
// 리액트 자체가 화면을 구성할 때 배열을 이용하기 때문에 map 많이 쓰임
const arr = [10, 100, 1000];

const mapValue = arr.map(function(item, index){
  return item * 2
})

// console.log(mapValue);

//[1000, 5000, 2500].forEach(function(a){})




/* ===============================================================*/
/* ===============================================================*/

// 유명(이름을 가진) 함수 (표현)식
/*let bar = function func(name) {
  if (name) {
    console.log(`Hi, ${name}`);
  } else {
    func("human"); // func를 사용해서 자신을 호출합니다.
  }
};

bar(); // Hi, human

// 하지만 아래와 같이 func를 호출하는 건 불가능합니다.
func(); // 'func' is not defined. (기명 함수 표현식 밖에서는 그 이름에 접근할 수 없습니다.)*/


// 익명(이름이 없는) 함수 (표현)식
/*let bar = function(name) {
  if (name) {
    console.log(`Hi, ${name}`);
  } else {
    bar("human"); // TypeError: bar is not a function
  }
};

let sayHi = bar;
bar = null;

sayHi(); // 중첩 sayHi 호출은 더 이상 불가능합니다!
*/


/* ===============================================================*/
/* ===============================================================*/
// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function(){};
// namedFunctionExpression.name =>  

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello(){};
// namedFunctionExpression.name => hello

// 콜백 함수 (표현)식
let callbackFunctionExpression = function(isActive, success, fail){
  if(isActive){
    success()
  }else{
    fail()
  }
};

/*callbackFunctionExpression(
  false, 
  function(){
    console.log('성공입니다');
  }, 
  function(){
    console.log('실패입니다');
  })
*/



function movePage(url, success, fail){
  if(url === 'https://www.naver.com'){
    success(url)
  }else{
    fail()
  }
}

/*movePage(
  'https://www.naver.com',
  function (inputUrl){
    //console.log(url);
    console.log(`현재 입력하신 url은 ${inputUrl}입니다. 3초 뒤 해당 사이트로 이동합니다.`);
  },
  function (){
    console.log('잘못된 url을 입력하셨습니다.');
  }
)*/

/* ===============================================================*/
/* ===============================================================*/
// higher-order function 고차함수
/*function map(arr,func){
  let result = [];
  for(let i = 0; i < arr.length; i++){
    result.push(func(arr[i]))
  }

  return result
}
*/
// 함수를 인수로 받아 처리함. (콜백과 동일)
// 함수를 리턴함 (고차함수)
// 콜백함수를 이렇게 처리하고 끝나고 고차함수는 그걸 다음 함수에 사용하는게 고차함수

function greater(n){
  return function (m){
    return n > m // 안쪽 함수가 바깥쪽에 있는 변수 사용하기 -> 클로저
  }
}

const g = (n) => (m)=> n > m

// console.log(greater(5)(3))
// console.log(g(5)(3))


// 함수 선언문 vs. 함수 (표현)식






// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;


// 즉시실행함수는 함수가 선언됨과 동시에 실행되는 것을 말합니다.

// var는 블록 스코프 : X
// var는 함수 스코프 : O

// 즉시 실행 함수 쓰는 이유 -> encapsulation (캡슐화)
// 모듈 프로그래밍 => (import, export) 이떄, 알아서 캡슐화가 가능.

// 즉시실행함수는 매개변수를 받을 수 있나요?
// function 이름 없으니 실행할 수 없어 한번 더 ()로 감싸고 뒤에 실행()을 붙인다. 
// function은 함수가 실행과 동시에 결과값 받음 -> return 객체
// uuid라는 변수를 꽁꽁 싸매서 보호 (바깥에서는 절대 접근 할 수 없음)
// 접근하기 위해서는 getKey()와 setKey()를 통해서만 접근 가능 ...이런 것도 클로저
// 요새는 잘안씀. 왜? 이제는 모듈프로그래밍이 가능하기 때문. (import, export)구문이 이를 가능케 함.
/*const MASTER = (function (word){

  let uuid = 'azxcqwASFqjKJ112314!23'
  
  return {
    getKey(){
      return uuid
    },
    setKey(value){
      uuid = value
    }
  }

})('a');
*/
// MASTER.getKey() // 이렇게 해야지 uuid 값 얻음  -> 원본 값 훼손하지 않음
// MASTER.setKey() // 이렇게 해야지 uuid 값 얻음  -> 원본 값 훼손하지 않음


/* ------------------- 복습 하기! ---------------------*/
const css = (function(){

  function setStyle(node,prop,value){
    if(typeof node === 'string') node = document.querySelector(node)
    if(typeof prop !== 'string') throw new Error('setStyle 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
    if(!value) throw new Error('setStyle 함수의 세 번째 인수는 필수값 입니다.');
    node.style[prop] = value
  }
  
  function getStyle(node,prop){
    if(typeof node === 'string') node = document.querySelector(node);
    if(typeof prop !== 'string') throw new Error('getStyle 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
    return getComputedStyle(node)[prop]
  }
  
  function css(node,prop,value){
    return !value ? getStyle(node,prop) : setStyle(node,prop,value);
  }

  return css // return css() 라고 안쳤으니, css 함수 본문 내용을 반환함.
  
})()


// closure
