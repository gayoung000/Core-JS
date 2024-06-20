/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

// Document object model : 도큐멘트 객체를 모델링하는 ...

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes : 자식 노드에 접근 / 유사 배열 NodeList 
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */ // 이걸 많이 씀
// - parentElement
// - children : 자식 요소에 접근 / 유사 배열 HTMLCollection 반환
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById // 단일 Element 반환
// - getElementsByTagName  // HTMLCollection 반환
// - getElementsByClassName // HTMLCollection 반환
// - querySelector     // CSS 선택자와 일치하는 첫 번째 요소(단일 Element)만을 반환
// - querySelectorAll  // 일치하는 모든 요소(Nodelist)를 반환
// - closest

/* 문서 대상 확인 */
// - matches
// - contains



// childNodes, children --> 유사 배열 반환
// 이걸 DOM 컬렉션(Collection)
// [...$0.children]
// const arr = Array.from($0.children);
// const arr =  Array.prototype.slice.call($0.children);

/* -------------------------------------------------------------------- */




// getNode 함수를 만들어 document.querySelector로 요소 찾기
/*function getNode(node){
  return document.querySelector(node);
}

getNode('.list') // ul*/


// default parameter
// 먼저 context에 기본 값 넣기

/*function getNode(node, context = document){ // context 안넣을 시 기본값 넣기

  // context = "#visual-section"

  if(typeof context === 'string'){ //  (isString(context)라고 쓸 수 있다. )
    context = document.querySelector(context);
  } // 이게 없다면 그냥 문자열이 context가 담기지 않아, 아래 코드에 객체가 담기지 않는다. 

  return context.querySelector(node);
}

getNode('.list', '#visual-section')*/



/*function getNodes(node,context = document){

  // if(isString(context)) context = document.querySelector(context);

  // context가 document가 아니라면 querySelector를 돌아줘.
  // if()
  if(context.nodeType !== 9) context = document.querySelector(context);

  return context.querySelector(node);
}
*/





// =================================================================== //

// 1. id가 visual-section 인 section 태그 요소
const section = document.getElementById('visual-section');
console.log(section);

// 2. class가 list인 ul 태그 요소
const list = document.querySelector('.list');
console.log(list);


// 3. list 요소 안에 about li 태그 요소
const about = document.querySelector('.list > li:nth-child(2)')
console.log(about);

const about2 = list.querySelector('li:nth-child(2)');
console.log(about2);


// 3-2. list 요소 안에 about 라는 텍스트를 가진 li 태그 요소
[...list.children].forEach((li)=>{
  console.log(li.textContent); // .textContent : 글자만 가져오기
})

// const aboutLi = [...list.children].find((li)=>{
//   return li.textContent === 'about';
// })

const aboutLi = [...list.children].find(li => li.textContent === 'about')



// 4. name 속성이 search-box인 form 태그 요소
const form = document.querySelector('form[name= "search-box"]');
console.log(form);


// 5. form 요소 안에 있는 모든 자식 요소
const children = form.children;
// const children = form.querySelectorAll('*');
console.log(children);


// 6. form 요소 안에 있는 input 태그 요소
// const input = form.lastElementChild;
// const input = children[1];
const input = children[children.length - 1];
console.log(input);


// 7. 부모 요소를 찾기 위해 쓰는 법
/*
while(true){
  elem = elem.parentElement

  if(elem.tagName === 'BODY'){
      break;
  }
}
  */