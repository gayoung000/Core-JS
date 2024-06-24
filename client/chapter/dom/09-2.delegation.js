const nav = getNode('nav');


function handleClick(e){
  // console.log( e.target );
  const target = e.target;
  const name = target.dataset.name;
  const li = target.closest('li');

  if(!li) return;

   /* 클래스를 사용한 위임 ---------------- */

  // if(target.matches('.about'))   console.log('about!!'); // matches는 css 선택자만 조회 ('form[name="email"]').. 즉 css 명령만 들어감
  // if(target.classList.contains('home'))    console.log('home!!'); // contains는 무조건 클래스만 조회
  // if(target.classList.contains('contact')) console.log('contact!!');

  
  
  
  

  /* 속성을 사용한 위임 ------------------ */

  // console.log( target.getAttribute('data-name') );
  // console.log( target.dataset.name );
  // console.log( attr(target,'data-name') );

  // if(name === 'about')  console.log('about!!');
  // if(name === 'home')  console.log('home!!');
  // if(name === 'contact')  console.log('contact!!');


  /* 노드를 사용한 위임 ------------------ */

   // 정확히 li 만 조회 

  if(li.textContent.includes('ABOUT')) console.log('about!!');
  if(li.textContent.includes('HOME')) console.log('home!!');
  if(li.textContent.includes('CONTACT')) console.log('contact!!');
 
 }


nav.addEventListener('click', handleClick)