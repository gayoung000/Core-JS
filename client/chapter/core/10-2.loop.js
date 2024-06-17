/* -------------------- */
/* Do While Loop        */
/* -------------------- */

/*let i = 0;

do{
  //console.log(i);
  if(i === 3){
    console.log('3번 입니다.');
  }else{
    console.log(i);
  };
  i++

}while(i < 5)
*/






// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우, 
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

/*let loopValue = +prompt('몇 번??');

do{
  console.log(loopValue);
  if(loopValue < 0){ // 이 구문을 왜 쓰신걸까..?
    break;
  }
  loopValue--; // 얘를 if문 위에 해도 똑같은데..?
}while(loopValue >= 0)

*/



// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정

/*let loopValue = +prompt('몇 번??');

let count = 0;

do{
  console.log(++count); // 선할당 후증가
}while(--loopValue) // 선할당 후감소*/


// 윗 코드 동작 방식
// loopValue에 3 입력 
// let count = 0;

// count 1
// if (loopValue = 2) count 2
// if (loopValue = 1) count 3
// if (loopValue = 0) 
// 1 2 3







/* -------------------- */
/* HTML 클래스로 접근해보기 */
/* -------------------- */


/*const first = document.querySelector('.first');


function next(node){
  if(typeof node === 'string') node = document.querySelector(node) // 문자열 '.first'
  // validation -> 확인

  do{
    node = node.nextSibling; // 다음 형제 노드 선택
  }while(node.nodeType !== 1) // 요소 노드가 아니면 본문 실행. 요소 노드면 멈춤. -> 즉, 요소 노드 만날 때까지  반복적으로 nextSibling을 호출

  return node
}


const second = next('.first') // .second
*/





// 내가 따로 first라고 변수 지정 안하고 바로 문자열 넣으면 다음 형제 호출해주면 좋겠다!
// .네이밍 함수
/*function next1(element){
  let element2 = document.querySelector(element);

  do{
    element2 = element2.nextSibling; // 다음 형제 노드 선택
  }while(element2.nodeType !== 1) // 요소 노드가 아니면 본문 실행. 요소 노드면 멈춤. -> 즉, 요소 노드 만날 때까지  반복적으로 nextSibling을 호출

  return element2
}*/


// . 안붙이고 그냥 바로 네이밍 쓰는 함수
/*function next2(element){
  let element2 = document.querySelector(`.${element}`);

  do{
    element2 = element2.nextSibling; // 다음 형제 노드 선택
  }while(element2.nodeType !== 1) // 요소 노드가 아니면 본문 실행. 요소 노드면 멈춤. -> 즉, 요소 노드 만날 때까지  반복적으로 nextSibling을 호출

  return element2
}*/
// console.log(next1("second"));






/* 주원님 코드 */
/*function next(string) {
  let node = document.querySelector(`.${string}`);
  do {
      node = node.nextSibling;
    } while(node.nodeType !== 1);

    return node;
}

console.log(next("second"));*/



/* 범쌤 코드 */
/*let second = document.querySelector('.second');

function prev(node) {

  // 위에서 second를 미리 선언 및 할당해서
  // html 문서의 second 클래스를 가진 요소를 이미 가지고있는 경우
  // 그 second 변수를 매개변수(node)로 받음
  // 그래서 node의 type이 string인지('.second') 아닌지(위에서 할당해 둔 second) 확인하고
  // string 형으로 들어왔을 때에만 if문 안의 DOM요소 선택(querySelector)을 진행해줌.
  // 위에서 할당해 둔 second 변수를 매개변수로 전달받으면 이미 DOM요소가 선택되어있어서 다시 안하는 것
  if (typeof node === 'string') { // validation -> 확인
    node = document.querySelector(node);
  }

  do {
    node = node.previousSibling;
  } while (node.nodeType !== 1);

  return node;
}*/


// break/continue와 레이블 사용하기
let input;

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    input = prompt(`(${i},${j})의 값`, '');
    if (!input) break outer; // (*)
  } 
}

alert('완료!');
console.log(input);