/* --------------------- */
/* Event Handling        */
/* --------------------- */


/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"

function handler(){
  console.log('클릭 이벤트 발생!!!');
}



// 2. DOM 프로퍼티 : element.onclick = handler
const first = getNode('.first');
// first.onclick = handler;



// 3. 메서드 : element.addEventListener(event, handler[, phase])

function handleClick(event){
  console.log(event); // 이렇게하면 PointerEvent라는 객체가 나옴
  console.log(event.type);
  console.log(event.target);
  console.log(event.clientX);
}

/*first.addEventListener('click', handleClick); //addEventListener('click')이 handleClick 을 실행하는 것.*/



// addClass('.ground',['a','b','c'])
// addClass('.ground','a','b','c')
// addClass('.ground','a,b,c')
// addClass('.ground',{a:'one',b:'two'})




/* 함수로 만들기 --------------------------------------------------- */


/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener



// bindEvent() 만들기 : addEventListener을 일일히 치는게 아닌 함수 안에다 만들기.

/*function bindEvent(node,type, handler){

  if(isString(node)) node = getNode(node);
  
  node.addEventListener(type, handler); 

}

bindEvent('.first', 'click', handleClick)*/




// 위의 bindEvent 함수에다 remove 까지 return 받기 
// second를 클릭했을 때 제거해보자!

// 과정 #1
// second.addEventListener 안에 클릭하면 first에 removeEventListener에 작동되게 하자. 
/*first.removeEventListener('click', handleClick)

const second = getNode('.second');
second.addEventListener('click', ()=>{
  first.removeEventListener('click', handleClick)
})
*/



// 과정 #2
// node.removeEventListener(type, handler) 함수로 만들기..! 이걸 bindEvent 함수 업그레이드해보자.

/*second.removeEventListener('click', () => {
  first.removeEventListener('click', handleClick)
})*/

/*const second = getNode('.second');


function bindEvent(node,type,handler){
  
  if(isString(node)) node = getNode(node);

  node.addEventListener(type,handler);

  return () => node.removeEventListener(type,handler);

}

const firstEventRemove = bindEvent('.first','click',handleClick)


second.addEventListener('click',firstEventRemove)*/




const ground = getNode('.ground');
const ball = getNode('#ball');


// handleClickBall 함수 만들기
function handleClickBall(e){

  /*let xPos = e.offsetX;
  let yPos = e.offsetY;*/

  const {offsetX:xPos, offsetY:yPos } = e; 


  ball.style.transform = `translate(${xPos - (ball.offsetWidth / 2)}px,${yPos - (ball.offsetHeight / 2)}px)`

}

// ground.addEventListener('click',handleClickBall)



// handleMove 함수 만들기
function handleMove({offsetX:x, offsetY:y}){
  console.log(x, y);

  let template = /* html */ `
    <div class="emotion" style="top: ${y}px; left:${x}px;">💖</div>
  `;

  insertLast(ground, template);

}



ground.addEventListener('mousemove',handleMove)
// (ground as HTMLElement).addEventListener

window.addEventListener('resize', ()=>{
  console.log('resize!')
})




/* 특정상황에서 debounce와 throttle 하는 법 --------------------------------------------------- */
/* 이벤트 낭비를 막는 방법 --------------------------------------------------- */
// debounce 함수 만들기
function debounce(callback,limit = 500){
  let timeout;
  return function (e){
    clearTimeout(timeout)
    timeout = setTimeout(()=>{
      callback.call(this,e)
    },limit)
  }
}

ground.addEventListener('mousemove',debounce(handleMove))




// throttle 함수 만들기

// let waiting = false;
// 얘는 함수 안에 만들어줘야 한다.  왜냐 클로저 안에 넣어서 보호

function throttle(callback, limit = 500){
  let waiting = false; // 안에다 넣으면 기억이 안됨. 따라서 함수를 내보는 코드 필요. 그게 아래 코드.

  return function(){
    if(!waiting){
      callback.call(this) // this하면 윈도우가 나와서 다른 객체 빌려오기 위해 call을 씀.
      waiting = true;
  
      setTimeout(()=>{ // 이걸 안만들어주면 계속 waiting = true라 다음번부터 실행이 안됨 .따라서 1초뒤에 false로 바꾸는 타이머를 만드는 것.
        waiting = false;
      }, limit)
    }
  }
}

// 이걸 콜백함수로 인수로 넣겠다!
/*throttle(() => {
  console.log('hit');
})()
*/

ground.addEventListener('mousemove',throttle((e) => {
  console.log( e );
}))

