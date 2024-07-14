
import { getNode } from '../dom/getNode.js';
import { isNumber, isObject } from './type.js';
import { xhrPromise } from './xhr.js';
import { insertLast } from '../dom/insert.js';


// 콜백 함수
// 나중에 실행된다는 개념은 다 동일
// 함수는 값이다.

function delay(callback, timeout = 1000){
  // setTimeout(()=>{}, timeout)
  setTimeout(callback, timeout);
}


const first = getNode('.first');
const second = getNode('.second');


// 아래 코드는 제대로 작동하지 않음
// 기다려주지 않기 때문
/*first.style.top = '-100px;';
first.style.transform = 'rotate(360deg)';
first.style.top = '0px;';*/

/*
delay(()=>{ 
  first.style.top = '-100px';
  second.style.top = '100px';
  delay(()=>{
    first.style.transform = 'rotate(360deg)';
    second.style.transform = 'rotate(-360deg)';
    delay(()=>{
      first.style.top = '0px';
      second.style.top = '0px';
    })
  })
})*/



/* -------------------------------------------- */
/*                  Promise 방식               */
/* -------------------------------------------- */

const shouldRejected = true; // 이게 나중에 비동기통신이 됨
// 비동기 통신이 실패할수도 성공할수도..

/*const p = new Promise((resolve,reject)=>{
  if(!shouldRejected){
    resolve('성공!');
  }else{
    reject('실패!');
  }
}); */



// PromiseResult 값 나옴.



// 1차
// 객체를 return하는 형식으로 많이 씀.
// 프로미스 객체가 떨어짐.
/*function delayPr(timeout = 1000){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(!shouldRejected){
        resolve('성공!');
      }else{
        reject({message: '알 수 없는 오류가 발생했습니다'});
      }
    }, timeout)
  })
}*/

// console.log(delayPr()) // <Promise> 객체 - [[PromiseResult]] : Object


// ======== 객체 합성 (믹스인 패턴)========== // 
// 2차
// spread syntax, type check, if, mixin, hoisting, Promise..
const defaultOptions = {
  shouldRejected:false,
  data:'성공',
  errorMessage:'알 수 없는 오류',
  timeout:1000
}

export function delayP(options) {
  // const config = Object.assign({}, defaultOptions);
  let config = {...defaultOptions} // timeout 쓸라고 기본값을 먼저 복사!
  // 깊은 복사 얕은 복사 

  if(isNumber(options)){
    config.timeout = options;
  }

  if(isObject(options)){
    // Object.assign(config,options) -> const config여도 가능..?
    config = {...defaultOptions,...options}; 
  }

  // 이 지점에서 option과 defaultOption이 믹스인이 됨.

  let {shouldRejected,data,errorMessage,timeout} = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldRejected) {
        resolve(data);
      } else {
        reject({message:errorMessage});
      }
    }, timeout);
  });
}

// delayP(3000); // {timeout: 5000} 처럼 객체로 넣어주는게 아닌 숫자로!

// delayP({
//   shouldRejected: false,
//   data: '성공',
//   errorMessage: 'error'
// })
  
// 둘다 1초 뒤 해당 코드 실행하는 건 똑같음.
/*delay(()=>{
  console.log('나도 성공!');
})*/


//console.log(delayP()); // <Promise> 객체 - [[PromiseResult]] : "성공"

/*delayP()
.then((res)=>{
  console.log( res );
  // 얘는 빈 껍데기의 프로미스 객체가 나옴 따라서 여기서 리턴을 해줘야
})
.then((res)=>{
  console.log( res );
})
.then((res)=>{
  console.log( res ); 
})
*/


// 순간 순간마다 에러를 처리할꺼냐
// 두번째 에러처리 매개변수 넣으면 순간순간 에러처리
// catch를 넣으면 한번에 받아서 에러처리
/*delayP()
.then((res)=>{
  console.log( res );
  return delayP();
})
.then((res)=>{
  console.log( res );
  return delayP();
})
.then((res)=>{
  console.log( res ); 
  return delayP();
})
.catch()
.finally()*/


/*delayP()
.then((res)=>{
  console.log( '성공했습니다' );
})*/





/* -------------------------------------------- */
/*             async / await 방식               */
/* -------------------------------------------- */

function d(data){
  return new Promise((resolve, reject)=>{
    resolve('데이터')
  })
}

// async 함수는 무조건! Promise obect를 반환한다. 
// await 은 2가지 기능 수행
//   1. result 꺼내오기 (await 뒤에 있는게 프로미스 객체여야지만 꺼내올 수 있다.)
//   2.  코드 실행 흐름 제어

// await 뒤에 오는 프로미스 객체의 내부 함수 실행이 완료될 때까지 기다렸다가
// 완료되는 순간 PromiseResult를 가져옴

async function delayA(data){
  
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('성공!');
    }, 2000);
  })

  // p.then((res)=>{
  //   console.log(res);
  // })

  const result = await p ;

  console.log(result);
  return 
}


// 1. then 썼을 때
/*delayA('지연')
.then((res)=>{
  console.log( res );
});
*/
// 2. await 썼을 때 (top level awaitd의 경우)
// top level await : async 함수 밖에서 사용 가능
/*const data = await delayA('지연');
console.log( data );*/



async function 라면끓이기(){

  const a = await delayP({data:'물'})
  console.log( a );

  const b = await delayP({data:'스프'});
  console.log( b );
  

  const c = await delayP({data:'면'});
  console.log( c );
  

  const d = await delayP({data:'그릇'});
  console.log( d );
  

}

// 라면끓이기()



/* -------------------------------------------- */
/*                  fetch 이용                   */
/* -------------------------------------------- */

async function getData(){
  
  const data = await xhrPromise.get('https://pokeapi.co/api/v2/pokemon/11');

  console.log();

  insertLast(document.body,`<img src="${data.sprites.other.showdown['front_default']}" alt="" />`)

}




// getData()
