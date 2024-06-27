

/* -------------------------------------------- */
/*               fetch 사용                      */
/* -------------------------------------------- */

const ENDPOINT = 'https://jsonplaceholder.typicode.com/users'

// fetch => promise
/*const tiger = async() => {
  console.log(fetch(ENDPOINT)); // Promise 객체 나옴
  console.log(await fetch(ENDPOINT)); //response 객체 나옴(Response라는 내장 클래스의 인스턴스). 통신한 데이터를 가지고 있었지만 문자열이라 이를 다시 객체로 만들어야!

  const response = await fetch(ENDPOINT);
  // console.log(response.json()); // json.parse()가 내장된 것. , array 반환하는 Promise 객체 나옴.

  const data = await response.json();
  console.log( data );
}


tiger()*/



/*const tiger = async (url) => {

  const response = await fetch(url) ; 
  // Response의 객체가 나온다. 
  // 내장 클래스 Response (내부적으로 new Response()를 생성하는 class Response{})

  // response(Response 인스턴스)의 ok 프로퍼티가 true인지 확인
  // true이면 정상적으로 받은 것
  if(response.ok){
    // 직접 접근할 수 없는 본문(문자)을 .json() 메서드를 통해 접근 및 JS객체로 파싱(변환)
    // 이 메서드도 비동기적으로 처리되고, Promise 객체를 반환함. (본문을 끝까지 읽고 반환하는데 시간이 걸림)
    // await를 붙이면 기다렸다가 변환된 Promise 객체의 PromiseResult(본문, 즉 우리가 원하는 데이터)를 꺼냄.
    // -> 할당
    response.data = await response.json();
  }

  return response;
}

// 이때 다시 Promise 객체가 반환해서 다시 한번 까줘야
const result = await tiger(ENDPOINT);*/

// console.log( result.data );




const defaultOptions = {
  method:'GET',
  body:null,
  headers:{
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  }
}



// fetch  => promise

export const tiger = async (options) => {

  const {url,...restOptions} = {
    ...defaultOptions,
    ...options,
    headers:{
      ...defaultOptions.headers,
      ...options.headers
    }
  }
  const response = await fetch(url,restOptions);

  if(response.ok){
    response.data = await response.json();
  }

  return response;
}



// const result = await tiger.get(ENDPOINT);

// console.log( result );




tiger.get = (url,options) => {
  return tiger({
    url,
    ...options
  })
}


tiger.post = (url,body,options) => {
   return tiger({
    method:'POST',
    url,
    ...options,
    body:JSON.stringify(body)
   })
}


tiger.delete = (url,options) => {
  return tiger({
    method:'DELETE',
    url,
    ...options
  })
}


tiger.put = (url,body,options) => {
  return tiger({
    method:'PUT',
    url,
    ...options,
    body:JSON.stringify(body)
  })
}


tiger.patch = (url,body,options) => {
  return tiger({
    method:'PATCH',
    url,
    ...options,
    body:JSON.stringify(body)
  })
}





// IIAFE

// (async function(){



  
  

// })()