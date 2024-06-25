
import { 
  insertLast,
  attr,
  getNode,
  getNodes,
  diceAnimation,
  endScroll,
  clearContents,
 } from "./lib/index.js";


// 1. 주사위 애니메이션
// 2. 주사위 굴리기 버튼을 클릭하면 diceAnimation() 실행될 수 있도록




const [rollingButton,recordButton,resetButton] = getNodes('.buttonGroup > button');
const recordListWrapper  = getNode('.recordListWrapper');


let count = 0;
let total = 0;

function createItem(value){  // 값 생성하기
  const template = `
    <tr>
      <td>${++count}</td>
      <td>${value}</td>
      <td>${total += value}</td>
    </tr>
  `
  return template // 문자 리턴
}

function renderRecordItem(){  // 값을 렌더링하기
  // const diceValue = getNode('#cube').getAtrribute('dice');
  const diceValue = +attr(getNode('#cube'), 'dice'); // 문자열을 숫자로 만들기

  

  // 1. insertLast 함수 사용
  // 2. template 전달
  insertLast('.recordList tbody', createItem(diceValue))

  // 3. diceValue interpolation(보간법) 하기 ex) <td>${diceValue}</td>
  endScroll(recordListWrapper);
}



// closure와 이피패턴
const handleRollingDice = (() => {

  let isClicked = false;
  let stopAnimation;

  return ()=>{
    if(!isClicked){
      stopAnimation  = setInterval(diceAnimation, 100);
      recordButton.disabled = true;
      resetButton.disabled = true;
    }
    else{
      clearInterval(stopAnimation);
      recordButton.disabled = false;
      resetButton.disabled = false;
    }
    isClicked = !isClicked; // toggle
  }
})()


function handleRecord(){
  recordListWrapper.hidden = false;

  renderRecordItem()
}


function handleReset(){
  recordListWrapper.hidden = true;
  clearContents('tbody'); // textContent = '' 한 것.

  count = 0;
  total = 0;
}

rollingButton.addEventListener('click',handleRollingDice)
recordButton.addEventListener('click',handleRecord)
resetButton.addEventListener('click',handleReset)