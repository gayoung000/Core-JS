/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2024;
console.log(typeof String(YEAR));
console.log(typeof (YEAR + ''));

// undefined, null
let days = null;
console.log(days + '');

let friends;
console.log(friends + ''); 
// boolean


/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined

// null

// boolean

// string
let num = '100';

console.log(Number(num));
console.log(num * 1);
console.log(num / 1);
console.log(+num);

// numeric string
const width = '120.5px';

console.log(parseInt(width));
console.log(parseInt(width, 10)); // 10진수 radix
console.log(parseFloat(width));

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 