/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

// e.target -> 마우스 먼저 만나는 대상
// e.currentTarget -> 실제 이벤트를 건 대상
// this

const nav = getNode('nav');


function handleClick(e){
  // console.log(e.target);
  const target = e.target;
  const name = target.dataset.name;

  // ===== closet 안쓸 때 쓰는 법 ====== //
  if(target.tagName !== 'LI') return;
  
  
  /* 클래스를 사용한 위임 ---------------- */
  
  if(target.matches('.about')) console.log('about!!');
  // matches : 요소에 해당 선택자 있는지 확인 후 true / false 
  // matches는 css 선택자만 조회 ('form[name="email"]').. 즉 css 명령만 들어감
  
  if(target.classList.contains('home')) console.log('home!!'); // contains는 무조건 클래스만 조회
  
  if(target.classList.contains('contact')) console.log('contact!!');
  

  /* 속성을 사용한 위임 ------------------ */

   // console.log(target.getAttribute('data-name')); // 범썜은 이걸 씀..
   // console.log(target.dataset.name); // 객체에서 바로 대상을 찾는거라 이제 젤 빠르지 않을까..?
   // console.log( attr(target, 'data-name') );

   /*if(name === 'about') console.log('about!!!');
   if(name === 'home') console.log('home!!!');
   if(name === 'contact') console.log('contact!!!');*/
 

  /* 노드를 사용한 위임 ------------------ */
  // textContent : 해당 콘텍스트가 있는지..!
  // console.log(target.textContent.includes('ABOUT')); // target은 DOM 객체라 includes 쓰기 전 문자로 먼저 받아야

  // 그런데 위에 코드로 하면 ul 눌러도 true만 뜸.
  // 정확히 li만 조회해야


  // ===== closet 안쓸 때 쓰는 법 ====== //
  /*if(target.textContent.includes('ABOUT')) console.log('about!!');
  if(target.textContent.includes('HOME')) console.log('home!!');
  if(target.textContent.includes('CONTACT')) console.log('contact!!');*/

  
}


nav.addEventListener('click', handleClick)

/* ================================================*/


// const navList = document.querySelectorAll('nav li');


/*navList.forEach((li,i)=>{
  li.addEventListener('click',()=>{
    console.log(i);

    switch (i) {
      case 0: console.log('about'); break;
      case 1: console.log('home'); break;
      case 2: console.log('contact'); break;
    }
  })
})
*/