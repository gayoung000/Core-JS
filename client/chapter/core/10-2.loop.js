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
// 여기 질문하기!
let loopValue = +prompt('몇 번??');

let count = 0;

do{
  console.log(count++);
}while(loopValue--)









/* -------------------- */
/* HTML 클래스로 접근해보기 */

// 1차(오류남)
/*let first = document.querySelector(`.${first}`);

do {
  first = first.nextSibling;
  
} while(first.nodeType !== 1 )
*/


/* 주원님 코드 */
/*function next(string) {
  let node = document.querySelector(`.${string}`);
  do {
      node = node.nextSibling;
    } while(node.nodeType !== 1);

    return node;
}

console.log(next("second"));
*/


// 범쌤
/*let second = document.querySelector('.second');

function prev(node) {

  // 위에서 second를 미리 선언 및 할당해서
  // html 문서의 second 클래스를 가진 요소를 이미 가지고있는 경우
  // 그 second 변수를 매개변수(node)로 받음
  // 그래서 node의 type이 string인지('.second') 아닌지(위에서 할당해 둔 second) 확인하고
  // string 형으로 들어왔을 때에만 if문 안의 DOM요소 선택(querySelector)을 진행해줌.
  // 위에서 할당해 둔 second 변수를 매개변수로 전달받으면 이미 DOM요소가 선택되어있어서 다시 안하는 것
  if (typeof node === 'string') { // validation -> 확인

    // 아래에서 prev('.second') 이렇게 함수를 호출하면
    // let node = document.querySelector('.second');
    // 처럼 됨
    node = document.querySelector(node);
  }

  do {
    node = node.previousSibling;
  } while (node.nodeType !== 1);

  return node;
}

let first = prev(second);*/


/*function prev(node){

  if(typeof node === 'string'){
    node = document.querySelector;
  }
  
  do{
    node = node.previousSibling;
  }while(node.nodeType ==! 1)
  return node
}

const previous = prev('.second')*/