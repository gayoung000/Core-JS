

const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

// [readyState] - xhr이 가지는 통신 상태
// 0 : uninitialized
// 1 : loading
// 2 : loaded
// 3 : interactive
// 4 : complete - 통신이 완료됐단 의미지, 성공했단건 아님.


const user = {
  name: 'tiger',
  age: 40,
  gender: 'male'
}



/* -------------------------------------------- */
/*               xhr callback 방식               */
/* -------------------------------------------- */

// ================= 1차 ================= //
// 1) 서버에 있는 데이터 얻어오기
const xhr = new XMLHttpRequest() // XMLHttpRequest 인스턴스 객체 생성


// 2) 서버에 요청을 보내기 위핸 open()
// open(method, url)
// 대문자로 넣기
// 0.4초 걸림 -> 비동기 필요
xhr.open('GET', ENDPOINT) 

// console.log( xhr.response ); 

// 3) 따라서 xhr이 가지고 있는 메서드를 사용
// 상태값인 readystate 값이 바뀔 때마다(이벤트 발생) 뒤에 나오는 함수 호출
/*xhr.addEventListener('readystatechange', ()=> {
  const {readyState, status, response} = xhr;

  // readyState가 complete 단계(성공/실패)가 되었을 때
  if(readyState === 4){
    if(status >= 200 && status < 400){
      console.log(response);
    }
    else{
      console.log('실패!');
    }
  }
})

// PUT, POST일 때는 body 전송, GET, DELETE는 null 전송
// send()는 서버에 데이터 전송
xhr.send(JSON.stringify(user))
*/




// ================= 2차 ================= //
// data 내보내지지 않음

/*function xhr(method,url,body){

  const xhr = new XMLHttpRequest();

  xhr.open(method,url);

  xhr.setRequestHeader('Content-Type','application/json');

  xhr.addEventListener('readystatechange',()=>{

    const {readyState,status,response} = xhr;
    
    if(readyState === 4){ 
      if(status >= 200 && status < 400){
        console.log(JSON.parse(response)); // JSON 형태의 문자열로 받기 때문에 이를 객체로 다시 만들어줘야 함.
      }
      else{
        console.log('실패!');
      }
    }
  })

  xhr.send(JSON.stringify(body))
}


xhr('GET',ENDPOINT,user)
*/


// ================= 3차 ================= //
// 콜백함수
/*function xhr(method,url,body,성공,실패){

  const xhr = new XMLHttpRequest();
  
  xhr.open(method,url);

  xhr.setRequestHeader('Content-Type','application/json');

  xhr.addEventListener('readystatechange',()=>{

    const {readyState,status,response} = xhr;
    
    if(readyState === 4){ 
      if(status >= 200 && status < 400){
        
        const data = JSON.parse(response);

        성공(data)
        
      }
      else{
        실패('실패!')
      }
    }
  })

  xhr.send(JSON.stringify(body))
}


xhr(
  'GET',
  ENDPOINT,
  user,
  (data)=>{
    console.log( data );
   },
  (err)=>{ 
    console.log( err );
  }
)*/


// ================= 4차 ================= //
// 이제 객체로 만들어서 한번에 인수로 전달
/*function xhr({
  method = 'GET',
  url = '',
  body = null,
  성공 = null,
  실패 = null,
  headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  }
}) {

  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  // headers 설정
  // POST, PUT 서버에서 자료를 
  // Json인지 알려줘야 제대로 전달가능
  Object.entries(headers).forEach(([key,value])=>{
    xhr.setRequestHeader(key,value)
  })

  xhr.addEventListener('readystatechange', () => {
    const { readyState, status, response } = xhr;

    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        const data = JSON.parse(response);

        성공(data); // ???
      } else {
        실패('실패!');
      }
    }
  });

  // PUT, POST 일 때는 body 전송, GET, DELETE 는 null 전송
  xhr.send(JSON.stringify(body));
}*/

// 1. 무조건 매개변수 순서에 맞게 작성 ✅
// 2. 매개변수 안쓰면?

/*xhr({
  성공(data) {
    console.log(data);
  },
  body: user,
  실패() {},
  url: ENDPOINT,
});
*/


// 함수는 객체이기 때문에 메서드로 등록할 수 있다. 
/*xhr.get = (url,성공,실패) =>{
  xhr({ url, 성공, 실패 })
}



xhr.post = (url,body,성공,실패) =>{
  xhr({ 
    method:'POST',
    body,
    url, 
    성공, 
    실패
   })
}


xhr.put = (url,body,성공,실패) =>{
  xhr({ 
    method:'PUT',
    body,
    url, 
    성공, 
    실패
   })
}


xhr.delete = (url,성공,실패) =>{
  xhr({ 
    method:'DELETE',
    url, 
    성공, 
    실패
   })
}

console.dir(xhr);


xhr.post(
  ENDPOINT,
  (data) => {
    console.log(data);
  },
  (err) => {
    console.log(err);
  }
)
*/






/* -------------------------------------------- */
/*               xhr Promise 방식               */
/* -------------------------------------------- */



/*function xhrPromise(method, url, body){
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  xhr.send(JSON.stringify(body));

  // Promise 객체 반환
  return new Promise((resolve, reject) => {
    xhr.addEventListener('readystatechange', ()=>{
      if(xhr.readyState === 4){
        // status가 200~399이면 성공
        if(xhr.status >= 200 && xhr.status < 400){
          // 변환하는 프로미스 객체의 PromiseResult 프로퍼티에 resolve() 안의 내용이 들어감
          resolve(JSON.parse(xhr.response)) // 객체로 만들기
        }else{
          // 실패하면 PromiseResult에 reject()안의 내용이 들어감
          reject({message: '알 수 없는 오류'})
        }
      }
    })
  })

}


xhrPromise('GET', ENDPOINT, {name: 'tiger'})
.then((res)=>{
  console.log( res );
})*/


// ======== 객체 합성 (믹스인 패턴)========== // 
const defaultOptions = {
  method:'GET',
  url: '',
  body: user,
  errorMessage:'서버와의 통신이 원활하지 않습니다.',
  headers:{
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin': '*'
  }
}

// enumerable => 열거 가능한 => for..of/ for..in
// iterable   => 순환 가능한 => for..of 
// immutable  => 불변의

export function xhrPromise(options){

  const {method,url,body,headers, errorMessage} = { // 받는 것과 동시에 구조분해 후 합성
    ...defaultOptions, 
    ...options, 
    headers:{ // 얕은 복사 한번 더 시행
      ...defaultOptions.headers,
      ...options.headers
    }
  };

  // const {method,url,body,headers, errorMessage} = config;

  const xhr = new XMLHttpRequest();

  xhr.open(method,url);

  Object.entries(headers).forEach(([key,value])=>{
    xhr.setRequestHeader(key,value);
  })

  xhr.send(JSON.stringify(body));

  return new Promise((resolve, reject) => {
    
    xhr.addEventListener('readystatechange',()=>{
      if(xhr.readyState === 4){
        if(xhr.status >= 200 && xhr.status < 400){
          resolve(JSON.parse(xhr.response));
        }
        else{
          reject({message:errorMessage});
        }
      }
    })
  })
}



/*xhrPromise.get = (url) => {
  return xhrPromise({ url })
}


xhrPromise.post = (url,body) => {
  return xhrPromise({
    url,
    body,
    method:'POST'
  })
}


xhrPromise.put = (url,body) => {
  return xhrPromise({
    url,
    body,
    method:'PUT'
  })
}


xhrPromise.delete = (url) => {
  return xhrPromise({
    url,
    method:'DELETE'
  })
}
*/

xhrPromise.get = (url) => xhrPromise({ url })
xhrPromise.post = (url,body) => xhrPromise({ url, body, method:'POST' })
xhrPromise.put = (url,body) => xhrPromise({ url, body, method:'PUT' })
xhrPromise.delete = url => xhrPromise({ url, method:'DELETE' })