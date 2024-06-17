/* ---------------- */
/* For In Loop      */
/* ---------------- */


const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
  hasOwnProperty(){
    return '난 누굴까~?'
  }
};

// console.log('creator' in javaScript );
// console.log('nickname' in javaScript );
// console.log('valueOf' in javaScript );

// Object.prototype.nickName = '호랑이';

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?


// 객체 자신의 속성인지 확인하는 방법
// 객체.hasOwnProperty() : 자신의(own) 속성(property)을 가지고 있는지 확인하는 방법
// 그런데 실제 객체에 hasOwnProperty 키가 있다면? 자바스크립트 hasOwnProperty 메서드가 덮어쓰여질 수 있는 위험이 있다. 
// console.log(javaScript.hasOwnProperty('creator'));


// 이런 위험에 대처하려면? -> 메서드 빌려쓰기
// console.log(Object.prototype.hasOwnProperty.call(javaScript, 'creator')); 
// console.log({}.hasOwnProperty.call(javaScript, 'creator')); // 객체 리터럴 {}을 사용하여 hasOwnProperty 메서드를 호출



// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?
for(let k in javaScript){
  // k 는 값을 담을 변수!
  //let key = 'creator'
  //let key = 'createAt'
  // ...
  // 내 조상껏까지가 이니라 내가 자신 속성만 순환하려면!
  if(Object.prototype.hasOwnProperty.call(javaScript, k)){
    // console.log(`key: ${k}`); 
    // console.log(javaScript[k]);
  }
}


// 점 표기법  => 변수 설정 X
// 대괄호 표기법  =>  변수 설정 O


// for in은 객체에게 양보하자~~
// 왜냐하면 배열은 순서 보장이 안됨, 성능도 안좋아짐.
/*const tens = [10, 100, 1000, 10_000];

for(let key in tens){
  console.log(key);
  console.log(tens[key]);
}
*/


/* ------------------------------------- */
/*const obj = {}

obj.nickName = 'tiger'

Object.defineProperty(obj, 'age', {
  value: 30,
  enumerable: true, // 조회 가능함
  writeable: false // 객체 보호하는 방법
  configurable: false // 객체 요소 삭제 방지
})*/

// Object.defineProperties(obj,{
//   age:{
//     value:30,
//     enumerable:true,
//     writable:true
//   }
// })