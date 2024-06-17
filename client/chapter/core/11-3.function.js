/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */



const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

function sum(...args){

}


// 함수 선언 → 화살표 함수 (표현)식
/*let calcAllMoney = () => {
  console.log(arguments);
};*/

/* ============================= */
// rest parameter (나머지 매개변수)
/* ============================= */

// arguments를 화살표 함수 내부에서 사용하게 해줌.
// 유사배열이 아니라 정말 배열을 반환함.
// (arguments => 배열) 보다 나머지 매개변수를 많이 사용함.
// 매개변수는 모든 함수에서 사용 가능하다!
// 전개 구문이랑 헷갈릴 수 있음. 함수 안 혹은 밖에서 ...면 전개구문 / 파라미터에서 ...는 나머지 매개변수
// 리액트에서 정말 많이 씀. 
/*let calcAllMoney = (...args) => {
  console.log(args);
};*/

// 나머지 매개변수 : 내가 필요한 것만 뽑아내고 뒤의 나머지 모아준다.
/*let calcAllMoney = (...args) => {
  console.log(args);
};*/


let calcAllMoney = (...args) => {
  let total = 0;
  //for 문
  /*for (let i = 0; i < args.length; i++){
    total += args[i];
    // console.log(total);
  }*/

  //for..of 문
  /*for (let arg of args){
    total += arg;
  }*/

  // forEach => arrow functions
  /*args.forEach(function(item){
    total += item;
  })*/

  // args.forEach(item => total += item);


  // reduce => arrow functions
  // 값을 반환하기 때문에 변수에 담는다. 
  /*const result = args.reduce(function(acc, cur){
    return acc + cur
  }, 0);*/

  // 물론 안에서 return 하니까 그냥 변수 안해도 됨.
  /*args.reduce(function(acc, cur){
    return acc + cur
  }, 0);*/


  return args.reduce((acc, cur) => acc + cur,0);


  //return total;
};

const result = calcAllMoney(1000, 5000, 4500, 13000);
// console.log(result);






// 화살표 함수와 this


/*function create(nickName,number){
  return nickName; 
}

create('tiger', 40);*/





// 자바스크립트 함수는 양면의 얼굴이다...
// 일반 함수(normal function) / 생성자 함수(constructor function) 

function Button (text){
  // return을 따로 넣지 않아도 됨. 생성자방식으로 함수 실행하면 알아서 객체 만들어주니까!
  this.content = text;
}

// 생성자로만 사용하세요. (일반 함수 만들 때 화살표 함수가 권장!)
/*const Button = (text) => {
  // return을 따로 넣지 않아도 됨. 생성자방식으로 함수 실행하면 알아서 객체 만들어주니까!
  this.content = text;
}*/


// 생성자 함수 만들 때는 클래스 함수 권장
/*class Button3{
}
new Button3()*/



// 자바스크립트 함수는 2가지 일처리를 할 수 있겠끔 설계됨.
// 바로 함수 실행 방식 2가지에 따라 안에 결과값을 반환 / 안의 내용을 반환하지 않고(객체 리턴 뺴고) 무조건 객체로 반환.

// 함수 실행 방식 1 (일반함수 실행)
// button('a')  
// 함수 실행 방식 2(생성자 방식으로 함수 실행)
// new button('a')

/* ============================== */ 
// 일반 함수(normal function) 호출
/* ============================== */ 
// const a = button('more') 

/* ============================== */ 
//  생성자 함수 호출
/* ============================== */ 
// 무조건 객체를 리턴, 객체를 대량 생산하는 용도
// 생성자 함수는 앞에 대문자로 처리하자! 아 함수 이름보고 생성자로 실행해야 하는구나, 아니구나 알 수 있다. 
// const b = new Button('more');




// 객체의 메서드(객체 안 함수)를 정의하는 방법
// 1. 일반함수
// 2. 화살표 함수
// 3. concise method (메서드 축약법)



// 일반 함수
// - constructor 내장 (concise method는 예외)
// - this : 나를 호출한 대상을 this
// - 객체의 메서드로 사용이 많이 됨 => this를 찾기 위해

// concise method
// - constructor 비내장
// - this : 나를 호출한 대상을 this

// 화살표 함수
// - constructor 비내장
// - this : 바인딩 하지 않음 -> 상위 컨텍스트에서 찾음.
// - 메서드 안의 함수를 작성해야 할 때 // 내 상위 this를 가져오기 때문에



/*const user = {
  name: '박새롬',
  sayHi: function(){
    console.log(this); // 일반 함수 -> user.sayHi()로 호출해서 this는 user 객체다. (호출 객체에 this 바인딩)
  },
  sayHi2: () => {
    console.log(this); // 화살표 함수 -> 상위 스코프인 전역에서 찾아서 this는 window다. (바인딩없이 정의된 환경의 this 사용)
  },
  sayHi3(){
    console.log(this); // 메서드 단축 구문 -> user.sayHi()로 호출해서 this는 user 객체다. (호출 객체에 this 바인딩)
  }
}
*/




// ********** this 예시 1 (기본) ********** //
/*const user = {
  name: '박새롬',
  sayHi(){
    console.log(`안녕 나는 ${user.name} 나는 아주 멋쟁이지!`);
  }
}

const another = {
  name: 'tiger',
  sayHi: user.sayHi             
}*/


// **********  this 예시 2 (일반 함수) ********** //
// 일반 함수 내 this는 전역 객체 window, 엄격 모드에서는 undefined
// 따라서 아래 코드는 원하는 값이 안나온다는 문제점이 있다. 

/*const grade = {
  name: '박새롬',
  total: 0,
  grades: [30, 60, 80],
  totalGrade(){
    // forEach 메서드 내부의 콜백 함수는 일반 함수 
    // 첫번재 this는 grade 이나, 
    this.grades.forEach(function(item){ 
      this.total += item // 일반 함수 내 this는 전역 객체 window, 엄격 모드에서는 undefined -> 즉, undefined
    })
    return this.total // 여기서 this는 grade
  }
}
*/
// grade.totalGrade() -> 0






// ********** this 예시 2 (화실표 함수) ********** // 
// 화살표 함수를 이용하면 외부 상위 스코프에서 this를 찾아온다.
// 따라서 코드가 제대로 동작한다. 
// const grade = {
//   name: '박새롬',
//   total: 0,
//   grades: [30, 60, 80],
//   totalGrade(){
//     this.grades.forEach((item)=>{
//       this.total += item
//     })
//     return this.total // grade.totalGrade()하면 170이 뜸.
//   }
// }






// ********** this 예시 3 (화실표 함수) ********** //
/*const user = {
  name: '박새롬',
  total: 0,
  grades: [30, 60, 80],
  totalGrade(){ // 여기서 this는 user (단축문법이니까 호출에서 찾음)
    const sayHi = () => {
      console.log(this);  // 여기서 this는 user (화살표 함수니까 상위에서 찾음)
    }
    sayHi()
  }
}*/

// user.totalGrade() // user 객체가 나옴




// ****** this 예시 3 (일반 함수 -> window꺼 ) ****** //
/*const user = {
  name: '박새롬',
  total: 0,
  grades: [30, 60, 80],
  totalGrade(){ // 여기서 this는 user (단축문법이니까 호출에서 찾음)
    const sayHi = function() {
      console.log(this);  // 여기서 this는 window
    }
    sayHi()
  }
}*/

// user.totalGrade() // window가 나옴.



// ****** this 예시 4 (forEach 일반 함수) ****** //
// forEach 에서 일반 함수, 화살표 함수 둘다 써보기! 그럼 하나는 객체가 제대로 나오고, 하나는 window가 나옴
// forEach는 콜백 함수를 받음
// 물론 forEach는 grades가 불러옴.
// 근데 forEach에서 this를 찾는게 아니라 콜백 안에서 this를 찾는 것.
// 그럼 안의 function을 누가 돌리는거나? 콜백 함수 안에 들어가면 그냥 자체적으로 돌린 것(저절로 호출된 것!)

/*const user = {
  name: '박새롬',
  total: 0,
  grades: [30, 60, 80],
  totalGrade(){
    // 여기서 this는 user (호출 객체 기준)
    this.grades.forEach(function(item){ // 일반 함수
      console.log(this); // 여기서 this는 window
    })
  }
}
*/
//user.totalGrade() // window 객체가 3번 나옴.


// ****** this 예시 4 (forEach 화살표 함수) ****** //
const user = {
  name: '박새롬',
  total: 0,
  grades: [30, 60, 80],
  totalGrade(){
    // 여기서 this는 user (호출 객체 기준)
    this.grades.forEach((item) => { // 화살표 함수
      console.log(this); // 여기서 this는 user
    })
  }
}

//user.totalGrade() // user 객체가 3번 나옴.




// ================================================ //
// totalGrade() 내부 동작 원리
/*function forEach(func){
  //window.forEach() // 함수를 받아서 그냥 실행시키니까.
  func()
}*/

console.clear()


/* 점심시간 후 -------------------------------------------------- */




/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
/* ---------------------- 방법 1 ------------------------*/
/* ---------------------- 방법 1 ------------------------*/
/*let pow = (numeric,powerCount)=>{

  let result = 1;

  for(let i = 0; i < powerCount; i++){
    result *= numeric
  }
  return result;
}; 
*/


/* ---------------------- 방법 2 ------------------------*/
/* ---------------------- 방법 2 ------------------------*/
// 표현식 형태

const pow = (numeric,powerCount) => {
  // fill을 사용해 요소를 채워줘야 하는게 그냥 array(20)을 하면 배열을 생성하긴 하는데 비어있는거고 즉 요소가 정의되지 않아서 reduce 메소드를 바로 사용할 수 없어서
  return Array(powerCount).fill(null).reduce((acc)=>{
    return acc *= numeric
  },1)
}

// 화살표 형태
//const pow = (numeric,powerCount) => Array(powerCount).fill(null).reduce(acc=> acc *= numeric,1)








// repeat(text: string, repeatCount: number): string;
/*let repeat = (text, num) => {
  let result = '';
  
  for(let i = 0; i < num; i++){
    result += text;
  }
  
  return result;
}; 

console.log(repeat('안녕', 3));

*/

let repeat = (text, num) => {
  let result = '';
  
  return Array(num).fill(null).reduce((acc)=>{
    return acc + text
  }, '')
}

// console.log(repeat('잘가', 3));

// 화살표 형태
//const repeat = (text, num) => Array(num).fill(null).reduce(acc=> acc + text,'')

