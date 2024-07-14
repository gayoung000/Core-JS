
// import { xhrPromise } from "./lib/index.js";
// import { getNode } from "./lib/index.js";



// xhrPromise.get('https://jsonplaceholder.typicode.com/users')
// .then(console.log)


// top-level await 은 아직까지 불안정하기 때문에 await은 이렇게 async 안에 넣는게 좋음.
// 일반 함수 방식
/*async function getData(){

  const data = await xhrPromise.get('https://jsonplaceholder.typicode.com/users')

  console.log(data);

}

getData()*/


// 화살표 함수 
/*const getData = async () => {
  const data = await xhrPromise.get('https://jsonplaceholder.typicode.com/users');

  console.log(data);
}


getData()*/



/*import { tiger } from "./lib/index.js";

const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';


const response = await tiger.get(ENDPOINT);

console.log( response );*/



/* global gsap */


import { 
  tiger,
  getNode,
  delayP,
  renderUserCard,
  renderSpinner,
  renderEmptyCard,
  changeColor,
  clearContents
 } from "./lib/index.js";


const ENDPOINT =  'http://localhost:3000/users';

// 1. user 데이터 fetch 해주세요.
//    - tiger.get

// 2. fetch 데이터의 유저 이름만 콘솔 출력
//    - 데이터 유형 파악 ex) 객체, 배열, 숫자, 문자
//    - 적당한 메서드 사용하기 

// 3. 유저 이름 화면에 렌더링

const userCardInner = getNode('.user-card-inner');


async function renderUserList(){

  // 로딩 스피너 렌더링
  renderSpinner(userCardInner)

  // await delayP(2000);

  try{

    // getNode('.loadingSpinner').remove()

    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete(){ //애니메이션 끝나는 시점 불러올 수 있는 메서드. 순수 자바스크립트에서는 transitionend가 있다.
        // console.log(this); // Tween 반환(애니메이션!)
        this._targets[0].remove()
      } 
    })

    const response = await tiger.get(ENDPOINT);

    const data = response.data;

    data.forEach(user => renderUserCard(userCardInner, user))

    changeColor('.user-card');

    // 애니메이션 넣기
    gsap.from('.user-card', {
      x: -100,
      opacity: 0,
      stagger: {
      amount: 1,
      from: 'end'
      }
    })
  }
  catch{
    console.error('에러가 발생했습니다');
    renderEmptyCard(userCardInner)
  }
    
}


renderUserList()



// 핸들러에는 비동기를 만들지 않는다. 범쌤 습관
function handleDeleteCard(e){
  const button = e.target.closest('button');

  if ( !button ) return;

  const article = button.closest('article');
  const index = article.dataset.index.slice(5);

  // delete 통신 다음에 안전하게 get 요청해야
  // 이 함수는 async도 아니고 일반 함수라 자바스크립트가 한번에 실행하기 때문
  tiger.delete(`${ENDPOINT}/${index}`)
  .then(()=>{

    // 요청 보내고 렌더링하기
    // 근데 기존 데이터 아래 계속 렌더링이 쌓이니
    clearContents(userCardInner)
    renderUserList()

  })

  // delete 통신 다음에 안전하게 get 요청해야
}
userCardInner.addEventListener('click', handleDeleteCard)



const createButton = getNode('.create');
const cancelButton = getNode('.cancel');
const doneButton = getNode('.done');


function handleCreate(){
  gsap.to('.pop', {autoAlpha:1}) // 자바스크립트로도 가능! 일단 gsap 사용
}

function handleCancel(e){
  e.stopPropagation(); // 버블링 막기 -> 보통은 팝업창에 쓰임
  gsap.to('.pop', {autoAlpha:0}) // 자바스크립트로도 가능! 일단 gsap 사용
}

function handleDone(e){
  e.preventDefault(); //html에서 생성버튼이 type="submit" 이라 일단 기본 이벤트 막기
  gsap.to('.pop', {autoAlpha:1}) // 자바스크립트로도 가능! 일단 gsap 사용

  const name = getNode('#nameField').value;
  const email = getNode('#emailField').value;
  const website = getNode('#siteField').value;

  // console.log( name, email, website );

  const obj = {
    name,
    email,
    website
  }

  tiger.post(ENDPOINT, { name, email, website })
  .then(()=>{
    // 1. 팝업 닫기
    gsap.to('.pop', {autoAlpha:0}) 

    // 2. 카드 콘텐츠 비우기
    clearContents(userCardInner)

    // 3. 유저카드 렌더링하기
    renderUserList()
  });
  // 따로 stringify 안줘도 됨. 우리가 만든 post() 함수에 들어있다. 

}


createButton.addEventListener('click', handleCreate)
cancelButton.addEventListener('click', handleCancel)
doneButton.addEventListener('click', handleDone)












