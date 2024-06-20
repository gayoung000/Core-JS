/* ------------------------------------ */
/* HTML Attributes vs. DOM Properties   */
/* ------------------------------------ */


/* HTML 속성 ------------------------------------------------------------- */

// 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고, 
// 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다. 표준 속성이 아닌 경우, 
// 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
// HTML 속성 값은 항상 문자열입니다.


/* DOM 프로퍼티 ----------------------------------------------------------- */

// DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.


/* DOM 프로퍼티 검토 ------------------------------------------------------- */

// - elementNode.hasAttribute(name) – 속성 존재 여부 확인

const first = getNode('.first');

console.log(first);
console.log(first.hasAttribute('id'));


// - elementNode.getAttribute(name) – 속성값을 가져옴

console.log(first.getAttribute('class'));
console.log(typeof(first.getAttribute('class')));
// console.log(first.getAttribute('class').split(' '));

console.log(first.getAttribute('sayhi'));



// - elementNode.setAttribute(name, value) – 속성값을 변경함

first.setAttribute('id', 'tiger'); // 어차피 set이라 값 반환하지 않음



// - elementNode.removeAttribute(name) – 속성값을 지움
first.removeAttribute('id');
console.log(first.id)  // -> 표준 지우면 공란으로 뜬다


// - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함
console.log(first.attributes);




/* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */

// data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
// data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.

// - elementNode.dataset

first.dataset.name = 'gayoung'; // setter
console.log( first.dataset );

console.log( first.dataset.name ); // gayoung

// getAttribute로 데이터 접근 가능하다.
console.log( first.getAttribute('data-name') ); // gayoung



// first.removeAttribute('sayHi');
// console.log(first.sayHi); // undefiend가 뜸. 비표준 지우면 undefined 뜸.




// ========= getAtrribute() 함수로 만들어보기 ========= //
// const second = document.querySelector('.second');
// second.setAttribute('class', 'hi')

//getAttr('.first','sayHi')


// 내가 쓴 코드
/*function getAttr(node, prop){
  node = document.querySelector(node) ;
  return node.getAttribute(prop);
}

getAttr('.first','sayHi'); // 'hola'*/


// 범쌤이 쓴 코드
function getAttr(node,prop){

  if(isString(node)) node = getNode(node);
  // if(typeof node === 'string') node = document.querySelector(node);

  if(!isString(prop)) throw new TypeError('getAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.')

  return node.getAttribute(prop);
}

getAttr('.first','sayHi') // 'hola'


// ========= setAtrribute() 함수로 만들어보기 ========= //

function setAttr (node, prop, value){

  if(isString(node)) node = getNode(node);
  if(!isString(prop)){
    throw new TypeError('setAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.')
  }

  /*if(value === ''){
    return node.removeAttribute(prop); //return을 써야 이 부분만 하고 반환하고 끝나게 됨.
  } 
  node.setAttribute(prop, value);*/

  if(value === ''){
    node.removeAttribute(prop);
  } else {
    node.setAttribute(prop, value);
  }
  
  // 얘는 if(value === ''){..} 문 아래에 있어야 작동한다!
  // 왜? 빈문자열 '' 오게 되면 형변환하면 false라!
  if(!value) throw new ReferenceError('setAttr 함수의 세 번째 인수는 필수 입력값 입니다.');

  node.setAttribute(prop,value);

}

setAttr('.second', 'class', '')



// 미니 과제! 
// setAttr('.second', 'data-name', 'tiger') 이렇게 했을 때 prop에 data가 있어? 그럼 dataset으로 넣기
/*function setAttr (node,prop,value){
  
  if(isString(node)) node = getNode(node);

  if(!isString(prop)){
    typeError('setAttr 함수의 두 번째 인수는')
  }

  if(value === ''){
    node.removeAttribute(prop);
    return;
  }

  // prop에 data가 있어? 그럼 dataset으로 넣기 
  if(prop.startWith('data')){
    prop = prop.slice(5);
    node.dataset[prop] = value;
    return
  }

  if(!value) throw new ReferenceError('setAttr 함수의 세 번째 인수는 필수 입력값 입니다.');

  node.setAttribute(prop,value);
}


// 
setAttr('.second','data-name','tiger') 
*/




// 에러까지 만들기
/*function typeError(message){
  return new TypeError(message + '문자 타입 이어야 합니다.');
}*/






// getAttr setAttr 합치기
// getAttr setAttr 캡슐화 -> 모듈 사용하거나 이피패턴 사용하거나.. 클래스를 사용하거나..
// 이게 제이쿼리에서 사용하던 문법을 함수로 만들어본 것.

/*function attr(node, prop, value){

  if(!value){
    return getAttr(node, prop)
  } else {
    setAttr(node, prop, value)
  }
}
*/

const attr = (node, prop, value) => !value ? getAttr(node, prop) : setAttr(node, prop, value)

attr('.first', 'class') // getter
attr('.fist', 'class', 'hahaha') // setter