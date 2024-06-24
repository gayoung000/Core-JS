
const aList = document.querySelectorAll('nav a');
const depthList = document.querySelectorAll('.depth');
const h = t => t.style.height = 0; // 함수를 만들고 전역변수로 만들기
const header = document.querySelector('#header');


// 오리지널 버전
/*aList.forEach((a)=>{
  a.addEventListener('mouseenter', ()=>{
    const target = a.lastElementChild;

    // 내가 선택한 depth를 제외한 항목 0으로 만들어줘도 되지만.
    // 모든 depth 높이를 0으로 만들어주고 내가 원하는것만 다시 높이를 만들어주면 됨.

    // depthList.forEach((t)=>{
    //   t.style.height = '0px';
    // })

    // depthList.forEach((item)=>{
    //   h(item);
    // })
    
    depthList.forEach(h);

    target.style.height = '100px';
  })
})*/

/*header.addEventListener('mouseleave', () => depthList.forEach(h))*/


/* global gsap */
// GSAP 버전
aList.forEach((a)=>{
  const target = a.lastElementChild;

  const tl = gsap.timeline({paused: true}).to(target, {height:100, ease: 'power3.in'})

   a.addEventListener('mouseenter', ()=> tl.play())
   a.addEventListener('mouseleave', ()=> tl.reverse())
})

