/* ---------------------------- */
/* Functions → Declaration      */
/* ---------------------------- */

/*console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);*/



// 함수 선언과 함수 호출

/*function calcPrice(priceA, priceB, priceC, priceD=0){
  console.log(priceA + priceB + priceC + priceD);
}*/

//calcPrice(1000, 3000, 5000);




function getRandomValue(){ // 디폴트 파라미터 실행할 때 쓰는 함수
  return Math.random() > 0.5 ? 1 : 0;
}

// default parameter 
// 함수 선언          
function calcPrice(
  priceA,
  priceB,
  priceC = getRandomValue(), // 디폴트 파라미터 설정, 중요한 것은 ()로 함수를 실행시켜야 한다.
  priceD = getRandomValue() // 디폴트 파라미터 설정, 중요한 것은 ()로 함수를 실행시켜야 한다.
){

  // if(priceC === undefined) priceC = 0;
  // if(!priceC) priceC = 0;
  // priceC = priceC || 0;
  // priceC ||= 0;
  
  // priceC = priceC ?? 0;
  // priceC ??= 0;

  return priceA + priceB + priceC + priceD;

}

// 함수 호출    인수 / argument
// console.log(calcPrice(1000,3000));




// 함수 값 반환

// 매개 변수

// 매개 변수 (parameter) vs. 전달 인수 (argument)

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;   -> 타입스크립트 형태로 적어놓음
// 최종 형태는 string으로 반환해야 한다. 
function rem(pxValue = 0,base = 16){
  
  if(!pxValue){
    throw new Error('rem 함수의 첫 번째 인수는 필수 입력 값입니다.') // 에러 객체를 만들고 브라우저에 던지기
  }

  if(typeof pxValue === 'string'){
    pxValue = parseInt(pxValue, 10);
  }

  if(typeof base === 'string'){
    base = parseInt(base, 10);
  }
  return pxValue / base + 'rem';
}

//parseFloat : 문자열을 파싱하여 부동소수점 실수를 반환
//parseInt : 문자열을 파싱하여 특정 진수의 정수를 반환

// Test Driven Development (테스트하는 과정)
/*console.assert(rem(20) === '1.25rem');
console.assert(rem('25px') === '1.5625rem');
console.assert(rem('30px',10) === '3rem');*/




// css(node: string, prop: string, value: number|strung) : string;


// 점 표기법  =>  변수로 사용 X
// 대괄호 표기법  =>  변수로 사용 O
// throw new Error가 왜 안될까?

const first = document.querySelector('.first');

/* ------------ setter -------------*/
function setStyle(node, prop, value){
  if(typeof node === 'string') node = document.querySelector(node)
  if(typeof prop !== 'string') throw new Error('setStyle 함수의 두 번째 인수는 문자 타입이어야 합니다.');
  if(!value) throw new Error('setStyle 함수의 세 번째 인수는 필수값 입니다.');
  if(typeof value !== 'string') throw new Error('setStyle 함수의 세 번째 인수는 문자 타입이어야 입니다.');

  node.style[prop] = value; // 해당 prop 변수를 받아서 처리하려면 대괄호 표기법
  console.log(value);


  // setting의 의미를 가지는 함수는 값을 보통 반환(return)이 필요가 없다.
}

// setStyle('.second', 'color' , 'pink');


/* ------------ getter -------------*/
function getStyle(node, prop){
  if (typeof node === 'string') node = document.querySelector(node);
  if(typeof prop !== 'string') throw new Error('getStyle 함수의 두 번째 인수는 문자 타입 이어야 합니다.');

  console.log(getComputedStyle(node)[prop]);
  return getComputedStyle(node)[prop];
   
}

getStyle('.first', 'fontSize'); // 32px // 함수 실행부


/*
1. function name
2. argument 설정 (함수의 실행부 미리 작성)
3. parameter 설정
4. return value (어떤 값을 리턴할지)
5. validation
6. Test Driven Development (TDD)
*/

/* ------------ css (setter & getter) -------------*/
function css(node, prop, value){
 /* 
 if(!value){ // value가 없다는건 그냥 조회해서 가져오겠다는 getter
    return getStyle(node, prop); // getter
  }
  */

  /*
  if(value){ // value가 있다는건 직접 설정하겠다는 setter
    return setStyle(node, prop, value); // setter
  }
  */

  return !value ? getStyle(node,prop) : setStyle(node,prop,value);
}


// const css2 = (node,prop,value) => !value ? getStyle(node,prop) : setStyle(node,prop,value);

// css('.third','color','red') // setter

// css('.first','color') // getter








// node의 값을 'h1'으로 받았을 경우 

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 sytle 속성이 아닐 경우 

// value의 값이 number가 아닌 경우 



// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.