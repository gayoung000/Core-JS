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

// console.log('valueOf' in javaScript );
Object.prototype.nickName = '호랑이';

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?


// 객체 자신의 속성인지 확인하는 방법
// - "자신의(own) 속성(property)을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?
//console.log(javaScript.hasOwnProperty('nickname'));

// 메서드 빌려쓰기
//console.log(Object.prototype.hasOwnProperty.call(javaScript, 'nickname'));
// console.log({()}.hasOwnProperty.call(javaScript, 'nickname'));



// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?
for(let k in javaScript){
  // k 는 값을 담을 변수!
  //let key = 'creator'
  //let key = 'createAt'
  // ...
  // 내 조싱껏까지가 이니라 내가 자신 속성만 순환하려면!
  if(Object.prototype.hasOwnProperty.call(javaScript, k)){
    //console.log(`key: ${k}`); 
    // console.log(javaScript[k]);
  }
}


// 점 표기법  => 변수 설정 X
// 대괄호 표기법  =>  변수 설정 O


// for in은 객체에게 양보하자~~
// 왜냐하면 배열은 순서 보장이 안됨, 성능도 안좋아짐.
const tens = [10, 100, 1000, 10_000];

for(let key in tens){
  console.log(key);
  //console.log(tens[key]);
}

/* ------------------------------------- */
/*const obj = {}

obj.nickName = 'tiger'

Object.defineProperty(obj, 'age', {
  value: 30,
  enumerable: true, // 조회 가능함
  writeable: false // 객체 보호하는 방법
})*/

