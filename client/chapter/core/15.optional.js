/* -------------------------- */
/* Optional Chaining          */
/* -------------------------- */


const portableFan = {
  maker: 'fromB',
  brand: 'FD221',
  type: 'neckband',
  photo: {
    static: 'https://bit.ly/3OS50UD',
    animate: 'https://bit.ly/3P8646q'
  },
  /*getFullName() {
    return `${this.brand}, ${this.maker}`;
  },*/
};

// 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
// console.log(portableFan.photos.animate);

// 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
/*if ('photos' in portableFan) {
  if ('animate' in portableFan.photos) {
    console.log(portableFan.photos.animate);
  }
}
*/

// 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.
// portableFan && portableFan.photos && portableFan.photos.animate

// 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.
portableFan.photo?.animate

// 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.
const fullName = portableFan.getFullName?.();

console.log( fullName );

// 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.







// sync(동기) async(비동기)
// 자바스크립트 처리방식은 기본이 동기적 처리 - 연산이 오래걸리는 작업이 딱 들어오면 밑에 코드가 실행이 안됨
// 동기적으로 처리하는 이유는 자바스크립트는 단일 스레드 이기 때문.
// 이거를 임의적으로 비동기적으로 만들어 줄 수 있다. 그걸 웹이 도와줌.
// 자바스크립트는 싱글 스레드라 동기적 처리밖에 안되는데 그걸 꺼내서 비동적 처리로 바꿔주는게 웹

// 웹에서 사용하는 비동기적 처리 (web API)
// setTimeout() : 비동기 처리로 만들어주는 윈도우 객체이자 API

/*console.log(1);
console.log(2);

function print(){
  console.log(3);
}

setTimeout(print,1000) // 함수기 때문에 콜백 함수 받을 수 있다. 

console.log(4);
console.log(5);*/



const button = document.querySelector('.my-button');

const id = setTimeout(()=>{
  
  const template = /* html */`
    <button type="button" class="my-button">my-button</button>
  `
  
  document.body.insertAdjacentHTML('beforeend',template)

},1000)

// clearTimeout(id) // 함수를 제거해주는 코드


button?.addEventListener('click',()=>{
  console.log('clicked~!');
})




// 주기적으로 반복실행해주는 
// setInterval
// 성능적인 부분에서 이걸 사용하는 경우는 거의 드물다. 

let count = 0;

const id2 = setInterval(()=>{
  console.log(++count);

  document.querySelector('.first').style.transform = `translateY(${count}px) rotate(${count}deg)`

  if(count >= 500){
    clearInterval(id2)
  }
},10)

 // clearTimeout(id2)



 // setInterval 대신 이걸.. requestAnimationFrame
 // 최신 문법이라 기본이 60프레임이긴 한데, 각자 모니터 주사율에 따라 달라짐
 let counter = 0;

 function animation(){
   
   console.log( ++counter );
 
   const id = requestAnimationFrame(animation)
   
   if(counter >= 100){
     cancelAnimationFrame(id)
   }
 }
 
 
 animation()

