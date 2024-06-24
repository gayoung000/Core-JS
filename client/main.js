
// named export (이름 내보내기)
// default export (기본 내보내기) 무조건 1개
// -  중괄호 없이 받을 수 있다. 
// - rename: 내 마음에대로 이름 받을 수 있다. , alias
//  ex) import a from "./lib/dom/clearContent.js"

// - 코드의 가독성 높이기
// - next.js 에서 꼭 이렇게 써야함.


// named export
import { 
  attr, 
  getNode, 
  insertLast,
  clearContents, 
} from "./lib/index.js";



console.log( attr );

function phase1(){
  // 1. input value 값 가져오기 (first,second)
  //    - input 선택하기 
  //    - input에게 input 이벤트를 걸어준다.
  //    - input.value 값을 가져온다.

  // 2. 숫자 더하기
  //    - 숫자 형변환 

  // 3. result 내용 비우기
  //    - clearContents

  const first = getNode('#firstNumber');
  const second = getNode('#secondNumber');
  const result = getNode('.result');
  const clear = getNode('#clear');


  function handleInput(){
    const firstValue = Number(first.value);
    const secondValue = +second.value;
    const total = firstValue + secondValue;

    clearContents(result)
    
    insertLast(result,total);
  }

  function handleClear(e){
    e.preventDefault();
    
    clearContents(first);
    clearContents(second);
    result.textContent = '-';
  }

  first.addEventListener('input',handleInput);
  second.addEventListener('input',handleInput);
  clear.addEventListener('click',handleClear);

}


phase1()





function phase2(){
  const calculator = getNode('.calculator');
  const result = getNode('.result');
  const clear = getNode('#clear');
  const numberInputs = [...document.querySelectorAll('input:not(#clear)')]
  
  
  
  function handleInput(){
  
    const total = numberInputs.reduce((acc,cur)=> acc + Number(cur.value),0)
    
    clearContents(result);
    insertLast(result,total);
  }
  
  
  
  
  
  function handleClear(e){
    e.preventDefault();
    numberInputs.forEach(clearContents);
    result.textContent = '-';
  }
  
  
  
  calculator.addEventListener('input',handleInput);
  clear.addEventListener('click',handleClear);
  
}










function handleInput(){
  const firstValue = Number(first.value);
  const secondValue = +second.value;
  const total = firstValue + secondValue;

  clearContents(result)
  insertLast(result,total);
}

function handleClear(e){
  e.preventDefault();
  
  clearContents(first);
  clearContents(second);
  result.textContent = '-';
}

first.addEventListener('input',handleInput);
second.addEventListener('input',handleInput);
clear.addEventListener('click',handleClear);

}


phase1()





function phase2(){
const calculator = getNode('.calculator');
const result = getNode('.result');
const clear = getNode('#clear');
const numberInputs = [...document.querySelectorAll('input:not(#clear)')]



function handleInput(){

  const total = numberInputs.reduce((acc,cur)=> acc + Number(cur.value),0)
  
  clearContents(result);
  insertLast(result,total);
}





function handleClear(e){
  e.preventDefault();
  numberInputs.forEach(clearContents);
  result.textContent = '-';
}



calculator.addEventListener('input',handleInput);
clear.addEventListener('click',handleClear);

}









