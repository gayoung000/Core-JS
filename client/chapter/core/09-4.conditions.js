/* ---------------------------- */
/* Nullish Coalescing Operator  */
/* ---------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.
receivedEmailAddress = (emailAddress === undefined || emailAddress === null) ? 'user@company.io' : emailAddress

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.
receivedEmailAddress = emailAddress ?? 'user@company.io';
receivedEmailAddress = emailAddress || 'user@company.io';


/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환

const WIDTH = '10px';
const isActive = false;

console.log( null || WIDTH );
console.log( null ?? WIDTH );

console.log( undefined || WIDTH );
console.log( undefined ?? WIDTH );

console.log( isActive || WIDTH );
console.log( isActive ?? WIDTH );

// a ||= b    a가 false일 때 b의 값을 a에 할당
// a &&= b    a가 true일 때 b의 값을 a에 할당
// a ??= b    a가 undefined, null 일때 b의 값을 a에 할당