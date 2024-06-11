/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

/*const animal = {
  lehs: 4,
  tail: true,
  stomach: [],
  setEat(food){ // setEat는 매개변수 필요
    this.stomach.push(food);
  },
  getEat(){ // getEat은 return이 필요
    return this.stomach
  }
}*/

// animal.setEat('고기')



/* ----------------------------- */
// 객체의 프로토타입 - 객체 리터럴 방식으로 만들기  
/* ----------------------------- */

// ====== 상위(부모) 객체 ====== //
// 위의 예제에서....
// 객체의 메서드를 설정해줄 때 자바스크립트는 지시자 따로 제공해줌
const animal = {
  legs: 4,
  tail: true,
  stomach: [],
  set eat(food){ // setEat는 매개변수 필요
    this.stomach.push(food);
  },
  get eat(){ // getEat은 return이 필요
    return this.stomach
  }
}

// animal.eat = '고기' (setter)
// animal.eat  (getter)


// ====== 중간 객체 ====== //
const tiger = {
  pattern: '호랑이무늬',
  hunt(target){
    this.prey = target;
    return `${target}에게 조용히 접근한다.`
  },

  __proto__: animal // 이렇게 하면 tiger 치면 [[Prototype]]이 생기면서 animal이 들어옴.
}

// ====== 대량 생산될 객체 ====== //
const 백두산호랑이 = {
  color: 'white',
  name: '백돌이',
  __proto__: tiger
}


/* ----------------------------- */
// 객체의 프로토타입 - 객체 생성자 방식으로 만들기  
/* ----------------------------- */

// 생성자 함수 

function Animal(){
  this.legs = 4;
  this.tail = true;
  this.stomach = [];
  this.getEat = function (){
    return this.stomach
  }
  this.setEat = function (food){
    this.stomach.push(food)
  }
}

// const a1 = new Animal();


/* =============== 첫번째 방식 ===================*/
/*function Tiger(){
  this.name = name;
  this.pattern = '호랑이무늬'
  this.hunt = function(target){
    return `${target}에게 조용히 접근한다.`
  }
}
*/
// Tiger.prototype = Animal // 함수를 넣게 되면 undefined 가 나옴.
//Tiger.prototype = a1 // 프로토타입에 객체를 넣어야! 그래야 객체의 능력을 쓸 수 있음.

//Tiger.prototype = Object.create(Animal.prototype);
//Tiger.prototype.constructor = Tiger




/* =============== 두번째 방식 ===================*/

function Tiger(name, prey){
  Animal.call(this) // 1) 이 this는 new Tiger()로 만든 금강산호랑이..
  // Animal.call(금강산호랑이) // 2) 이렇게 되면 Ainimal 함수의 this가 금강산호랑이로 바뀜..
  this.name = name;
  this.pattern = '호랑이무늬'
  this.hunt = function(prey){
    return `${prey}에게 조용히 접근한다.`
  }
}

function a(value, num){
  return 2 * 2
}



/*Tiger.bark = function (sound){
  return sound
}*/

// 생성자 함수를 이용해 금강산호랑이란 인스턴스 생성
const 금강산호랑이 = new Tiger('금순이', '사슴'); // this는 new Tiger()로 만든 금강산호랑이..

/* 함수의 메서드 (함수) */
// call
// apply
// bind
// throttle, debounce..? 나중에 배움

function sum(a,b,c){
  console.log(this);
  return a + b + c
}

/*function sum(a,b,c){
  console.log(this);
  return a + b + c
}.bind(10, 20, 30);*/

// call -> sum 함수를 실행시키는 역할. 이때 첫번재 인수는 this에 넣어서 함수를 실행
// sum.call('hello')
// sum.call('hello', 1, 1, 1); // 3 리턴하고 이 함수 안에서 this는 hello를 찍어준다. 

// apply -> call과 똑같은데 배열로 전달하냐, 다 풀어서 전달하냐의 차이
// sum.apply('hello', [1, 1, 1, 3]) // 배열의 길이 달라도 에러나진 않는다. 

// bind -> 묶어만 둔다. 즉시 실행이 안된다.
// const b = sum.bind('hello', 1, 2, 3);


