/* ----------------------- */
/* Try Catch               */
/* ----------------------- */


// try ... catch 동작 알고리즘
// 1. try { ... } 코드 실행
// 2-1. 오류가 발생하지 않은 경우, 내부 코드가 실행 됨 (catch 블록 무시)
// 2-2. 오류가 발생했다면, try 코드 중단 catch 블록으로 흐름이 넘어 감

// console.log(value); // 밖에다 쓰면 에러가 터지지만

try{
  console.log(value); // 안에다 쓰면 이 에러를
}catch(e){
  console.log(e); // 여기서 catch해주는 것.
  // ReferenceError: value is not defined




  // console.log('참조 오류입니다 :' + e.massage );
  // document.body.insertAdjacentHTML('beforeend', '에러입니다!')
}


// JavaScript 엔진은 코드를 읽고 난 후 코드를 실행
// 그러므로 try ... catch 문은 유효한 코드(문법적으로 유효)에서만 오류를 처리할 수 있음
// 이러한 오류 유형을 "런타임 오류" 또는 "예외(exception)"라고 부름


// try ... catch는 동기적으로 동작하므로 비동기 처리 과정 내부에서 사용해야 함

// 스케줄된 코드에서 발생한 예외는 try...catch에서 잡을 수 없다.
// setTimeout에 넘겨진 익명 함수는 엔진이 try..catch를 떠난 다음에서야 실행되기 때문

/*try {
  setTimeout(function() {
    noSuchVariable; // 스크립트는 여기서 죽습니다.
  }, 1000);
} catch (e) {
  alert( "작동 멈춤" );
}*/


// 비동기 처리 과정 내부에서 사용해야!
/*setTimeout(function() {
  try {
    noSuchVariable; // 이제 try..catch에서 에러를 핸들링 할 수 있습니다!
  } catch {
    alert( "에러를 잡았습니다!" );
  }
}, 1000);*/


// 오류 객체(Error Object)
// 에러가 발생하면 자바스크립트는 에러 상세내용이 담긴 객체를 생성 -> 오류 객체
// - name, message, stack 정보 제공


// 직접 오류 객체 생성
// throw 연산자는 오류 객체를 생성할 때 사용 됨
// 생성 가능한 오류 객체 생성자
// - Error
// - TypeError
// - SyntaxError
// - ReferenceError



try{
  // 문자열로 만들기
  const data = JSON.stringify({
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  })

  // 데이터 해석해서 변수에 담기
  const user = JSON.parse(data);

  // console.log(user);
  console.log(user.value); // 존재하지 않는 속성 참조, undefined 출력

  if(!user.value){
    throw new ReferenceError('해당 키 값은 존재하지 않습니다.');
  }
}
catch(e){
  // console.log(e);
  console.log( 'JSON Error :' + e.message);
}





// finally 절
// 오류가 있던, 없던 상관없이 항상 실행
// - 에러가 없는 경우: try 실행이 끝난 후
// - 에러가 있는 경우: catch 실행이 끝난 후
// try ... catch를 빠져나가는 어떠한 경우에도 항상 실행


// try..catch..finally 안의 변수는 지역 변수 
// try 안 return 이 있다면 -> finally 실행 후 return 반환

// try..catch가 없어도 대부분의 호스트 환경이 ‘전역’ 에러 핸들러를 지원하기 때문에 ‘떨어져 나온’ 에러를 잡을 수 있습니다. window.onerror는 브라우저 환경의 전역 에러 핸들러입니다.