/* ---------------------------------------------------------------------- */
/* Iterable Object                                                        */
/* ---------------------------------------------------------------------- */

// 배열을 일반화 한 객체
// for-of 문을 사용할 수 있는 객체
// Symbol.Iterator 메서드가 필히 구현되어야 함
// Symbol.Iterator 메서드는 이터레이터 객체를 반환하며
// 이터레이터 객체는 next() 메서드를 가짐 ({ done: Boolean, value: any } 타입 반환)

// 객체, 배열, 이터레이터 객체..처럼 새로운 자료형이라고 생각하자!
// 일반 객체는 .next() 를 호출할 수 없다.

const arr = '1 2 3 4 5 6'.split(' '); // 얘는 이터러블 요소 (이터러블 요소는 .next()를 쓸 수 없다.)

// ================================== //
//      배열을 iterator 객체로 만들기
// ================================== //

// ************************** //
//  [Symbol.iterator]() 넣기
// ************************** //
const iter = arr[Symbol.iterator]();  // 얘는 이터러블 객체 ([Symbol.iterator]()해야 비로소 이터러블 객체가 되고 .next()를 쓸 수 있다.)

/*for(const a of iter){
  console.log(a);
}*/


console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value); // 반복이 끝났어, 다음 아이템이 없다!



const range = {
  form: 1,
  to: 5,
  length: 5,
  [Symbol.iterator](){
    let current = this.form;
    let last = this.to;
    
    return {
      next(){
        if(current <= last){
          return {value: current++, done: false}
        }else{
          return {done: true}
        }
      }
    }
  }
}

// ************************** //
// generator function
// ************************** //
// 화살표 함수로 만들 수 없다. 일반 함수에 붙여서 만들어야
// 1. 일관된 반복 동작 제공 (for..of)
// 2. 커스컴 반복 제어 가능 (객체를 반복 가능한 상태로)
// 3. 지연 계산 (필요할 때 마다 반복을 돌림) -> 이게 큰 메리트. 성능 관점에서도..!
// 4. 무한 시퀀스 생성 (무한대의 값 생성)
// 5. 비동기 반복 작업이 가능
// 6. 다양한 데이터 소스와의 통합 (map, set)

// 일반적인 개발보다 함수형 프로그래밍에서 많이 쓰임.

function* gen(){
  yield 1;  // yield 산출하다, 값을 뽑아내는 것
  yield 2;
  yield 3;
}

const gene = gen();
// gene.next()

const customIter = {
  *[Symbol.iterator](){
    yield 1;  // yield 산출하다, 값을 뽑아내는 것
    yield 2;
    yield 3;
  }
};
  
for(const a of customIter){
    console.log(a);
}

// 유사배열 vs. 이터러블
// - 유사배열 : 인덱스 키와 length 속성을 가진 객체
// - 이터러블 : Symbol.Iterator 메서드를 가지는 객체



function* idGenerator(){
  let id = 1;
  while(true){
    yield ++id
  }
}


const id = idGenerator();

