/* --------------- */
/* While Loop      */
/* --------------- */

// let i = 0;

/*while(i < 10){
  console.log(i++);
}*/


const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];


let i = 6;

while(i >= 0){ // while 루프의 조건은 루프가 시작되기 전에 평가되기 때문에, 조건문에 사용할 변수는 while 루프 밖에서 정의되어야 합니다. 
  // let i = 6;
  console.log(frontEndDev[i]);
  i--
}

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

/*console.log(frontEndDev[0]);
console.log(frontEndDev[1]);
console.log(frontEndDev[2]);
console.log(frontEndDev[3]);
console.log(frontEndDev[4]);
console.log(frontEndDev[5]);
console.log(frontEndDev[6]);*/


/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)
/*
let i = 0;

while(i < frontEndDev.length){
  let value = frontEndDev[i];
  console.log(value);
  i++;
}*/


// while 문 (역순환 : 역방향)
/*let i = frontEndDev.length-1;

while(i >= 0){
  let value = frontEndDev[i];
  console.log(value);
  i--;
}*/



// 성능 진단 : 순환 vs. 역순환