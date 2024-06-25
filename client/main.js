import data from "./data/data.js";
// import clearContents from "./lib/dom/clearContents.js";
import { 
  copy,
  shake,
  getNode, 
  addClass,
  showAlert,
  getRandom, 
  insertLast, 
  removeClass,
  clearContents,
  isNumericString,
 } from './lib/index.js';



// [phase-1]
// 1. 주접 떨기 버튼을 클릭 하는 함수
//    - 주접 떨기 버튼 가져오기
//    - 이벤트 연결하기 addEventListener('click')

// 2. input 값 가져오기
//    - input.value

// 3. data함수에서 주접 1개 꺼내기
//    - data(name)
//    - getRandom()

// 4. pick 항목 랜더링하기

// [phase-2]
// 1. 아무 값도 입력 받지 못했을 때 예외처리 (콘솔 출력)



const submit = getNode('#submit');
const nameField = getNode('#nameField');
const result = getNode('.result');



const tween = gsap.to('#nameField',{
  duration:0.1,
  x:-10,
  repeat:5,
  yoyo:true,
})




function handleSubmit(e){
  e.preventDefault();

  const name = nameField.value;
  const list = data(name);
  const pick = list[getRandom(list.length)];
  // let output = result.textContent = pick;


  if (!name || name.replace(/\s*/g,'') === ''){
    showAlert('.alert-error', '공백은 허용하지 않습니다.')
    shake('#nameField').restart();
    
    /*addClass('#nameField', 'shake');

    setTimeout(()=>{
      removeClass('#nameField', 'shake');
    }, 1000);*/

    tween.play()

    return;
  }



  if(!isNumericString(name)){
    showAlert('.alert-error','제대로된 이름을 입력해 주세요.');
    return;
  }

  clearContents(result);
  insertLast(result, pick);
}


function handleCopy(){
  const text = result.textContent;

  if(nameField.value){

    copy(text)
    .then(()=>{
      showAlert('.alert-success','클립보드 복사 완료!');
    });
  } 
}

submit.addEventListener('click', handleSubmit);
result.addEventListener('click', handleCopy);



