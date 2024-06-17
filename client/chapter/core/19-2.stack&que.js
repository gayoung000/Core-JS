// 큐(queue) vs. 스택(stack)
// 큐 FIFO (먼저 들어온 것이 먼저 나간다) ← queue ←
// 스택 LIFO (나중에 들어온 것이 먼저 나간다) ↓ stack ↑


// 큐
function someFunc(){
  console.log('hi~');
}

setTimeout(() => {  // 1초 뒤 첫 번째로 실행됨
  console.log("hello");
}, 1000);

setTimeout(() => { // 1초 뒤 두 번째로 실행됨
  console.log("hello");
}, 1000);

someFunc(); // 먼저 실행됨.

