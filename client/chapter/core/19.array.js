/* -------------------- */
/* Array Type           */
/* -------------------- */

// 객체(Object) : 키(key)를 사용해 식별할 수 있는 값을 담은 집합 - `키:값의 집합`
// 배열(Array) : 순서(index)가 있는 집합 - `값의 집합`

// ※ 배열은 특별한 종류의 객체로 대괄호를 사용해 요소에 접근하는 방식은 객체 문법을 사용. 
//   배열은 키(key)가 숫자(index)라는 점이 다름. 즉, 본질은 객체.
//   순서에 따른 제어가 가능하도록 다양한 메서드와 length 프로퍼티를 언어에서 제공.


// 배열 선언
let friends = '한울, 재명, 정민, 유진, 윤선, 민혁, 재림, 신혜'.split(',');

// 배열 요소의 총 갯수
// console.log(friends.length = 0);

// 배열 요소 변경
friends[0] = '은선'

// shift랑 unshift 는 성능 상 시간이 더 걸림 -> 인덱스 하나씩 미뤄줘야해서
// 배열 요소 추가
let unshift = friends.unshift('희재');
console.log( unshift );


let push = friends.push('진용');
console.log( push );

// 배열 요소 제거
//let shift;
//let pop;


// 큐(queue) vs. 스택(stack)
// 큐 FIFO (먼저 들어온 것이 먼저 나간다) ← queue ←
// 스택 LIFO (나중에 들어온 것이 먼저 나간다) ↓ stack ↑


// 배열 요소 순환(loop)
// for 문, for ~ of문
for(let i = 0; i < friends.length; i++){
  console.log(friends[i]);
}

// 실제 이터러블 객체로 만들기 
// console.log 해보면 Array Iterator {} 라고 뜸.
// 한번 순환을 돌리면 iter 안에 있는 아이템들이 없어지기 때문에 또 반복 돌 수 없다. 
// 정리하면 이터러블 요소 : 계속 돌릴 수 있음 이터레이터 객체 : 필요한 만큼만 돌릴 수 있음
const iter = friends[Symbol.iterator]() // iter : 이터러블 객체 , friends -> 이터러블한 요소

console.log(iter);

for(const name of iter){
  console.log(name);
}


// 배열의 내부 동작 원리
// 배열은 원시 자료형이 아닌 객체형에 속해서 객체처럼 작동

// 배열 복사
// let copiedArray = [...friends];
// let copiedArray = friends.slice();
let copiedArray = Array.from(friends  );


// 다차원 배열 (2차원 배열) 
// 이거 쓰는 방법을 꼭 알고 있어야! 코테볼 때 중요!
// 행렬을 저장하는 용도

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// 행렬의 정중앙에 위치한 요소를 찾으려면?
matrix[1][1]

for(let i =0; i<matrix.length; i++){
  for(let j =0; j<matrix[i].length; i++){
    console.log(matrix[i][j]);
  }
}