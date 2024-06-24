/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */


/* 버블링 ----------------------------------------------------------------- */

const section = getNode('section');
const article = getNode('article');
const p = getNode('p');

/*section.addEventListener('click', (e) => {
  // console.log('target :', e.target);
  // console.log('currentTarget :', e.currentTarget);
  // console.log('this :', this); // 애로우 펑션이라

  console.log('%c section', 'color:orange') // 콘솔창에 css 추가하는 것.
})*/


/*article.addEventListener('click', (e) => {
  console.log('%c section', 'color:pink') 
})*/

/*p.addEventListener('click', (e) => {
  console.log('%c section', 'color:dodgerblue') 
})*/



/* 캡처링 ----------------------------------------------------------------- */


  // html부터 시작한다