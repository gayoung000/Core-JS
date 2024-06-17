

function earth(){

  let water = true;
  let gravity = 10;

  /*function tiger(value){
    gravity = value;
    return
  }
  return tiger*/

  return function (value){ // 그냥 함수만 내보내면 됨. 누가 지구 정보 알려주는진 상관없음.
    gravity = value;
    return
  }
}

const ufo = earth()
// 클로저는 ufo가 지구 호랭이 납치해서 고문해 지구의 정보를 가져올 수 있는 방법이다. 

ufo(-10)
// 호랭이한테 너 뭐줄테니 지구에 갖다놔! 해서 tiger 안에 -10을 가져다줘서 진짜 지구의 중력을 바꿈.

// 바깥쪽 함수가 안쪽 함수를 증가시키고 훼손하고 이런게 가능..




// 즉, 클로저 정리해보자!
// 변수를 함수 내부에 넣고 내부 함수를 return하자. 그리고 실행시킬 때 외부내부함수실행
const button = document.querySelector('button');

/*let isClicked = false; // 전역이 오염됨.. 혹은 맨 밑에 누가 isClicked를 건드릴 수 있음.

function handleClick(){

  return () => {
  if(!isClicked){
    document.body.style.background = 'orange'
  } else{
    document.body.style.background = 'white'
  }
  isClicked = !isClicked;
}
}

button.addEventListener('click', handleClick()) -> 실행 전 함수 즉, 함수 본문이 와야한다. 

 */


// IIFE
/* arrow function */
const handleClick = (() => {

  let isClicked = false;
  
  return () => {
    if(!isClicked){

      document.body.style.background = 'orange'
    }else{
  
      document.body.style.background = 'white'
    }
  
    isClicked = !isClicked;
  }

})()


button.addEventListener('click',handleClick)









function useState(init){
  let value = init; // 이 값은 삭제되지 않고 기억됨
  
  function read(){
    return value;
  }
  
  function write(newValue){
    value = newValue;
  }

  return [read, write]; // 여기서 내보낸 함수들이 이제 value에 접근가능하게 된다. 
} 


const [getNumber, setNumber] = useState(10); // 구조분해할당 사용
// getNumber, setNumber 로만 이용 가능하다!




// const result = state(10);

// const getter = result[0]
// const setter = result[1]
