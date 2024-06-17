/* ------------------------------ */
/* Browser Object Model           */
/* ------------------------------ */

/*
JavaScript가 작동하는 플랫폼은 호스트(host)라고 불립니다. 
호스트는 브라우저, 웹서버, 심지어는 커피 머신이 될 수도 있습니다. 

각 플랫폼은 해당 플랫폼에 특정되는 기능을 제공하는데, JavaScript 명세서에는 
이를 호스트 환경(host environment) 이라고 부릅니다.

호스트 환경은 JavaScript 코어에 더해 플랫폼에 특정되는 객체와 함수를 제공합니다. 
웹 브라우저는 웹 페이지를 제어하기 위한 수단을 제공하고, Node.js는 서버를 포함해 
애플리케이션 개발에 필요한 다양한 기능을 제공합니다.

브라우저 객체 모델(Browser Object Model, BOM)은 문서 이외의 모든 것을 
제어하기 위해 브라우저(호스트 환경)가 제공하는 추가 객체를 나타냅니다.
*/


/* Window 객체 ----------------------------------------------------------- */

// 윈도우에서 아래 것들을 구조분해할당 해서 내보내는 형식으로 이뤄진다~
// 실제로 우리가 구조분해할당해서 가져오는 건 아님.
const { alert, confirm, prompt, setTimeout, setInterval } = window;


/* Location 객체 --------------------------------------------------------- */
// http://localhost:5500/index.html?type=listing&page=2#title

// 페이지 전환을 해야할 때, 이런 애들을 꺼내서 써야할 때가 있다. 
const { href, protocol, host, port, search, hash, replace, reload } = location; // 원래는 window.location인데 window 생략 가능

// console.log( hash );

const urlParams = new URLSearchParams(location.search);

// 얘는 이터레이터 가지고 있어서 for..of를 돌릴 수 있다. 
for (const key of urlParams) {
  // console.log(key);
}

// 그리고 객체니 구조분해할당도 가능..?
/*for (const [key, value] of urlParams) {
  console.log(`${key}:${value}`);
}
*/

/* Navigator 객체 -------------------------------------------------------- */

const { platform, userAgent, language, onLine, geolocation } = navigator;

// 위치 찾기
/*navigator.geolocation.getCurrentPosition((data) => {
  console.log(data);
})*/


// 1차
/*navigator.geolocation.getCurrentPosition((data) => {
  const {latitude,longitude} = data.coords
  console.log(latitude); // data.coords.latitude
  console.log(longitude); // data.coords.longitude
})*/


// 2차 (안전하게 조건 걸어 처리하기)
/*navigator.geolocation.getCurrentPosition((data)=>{
  if(data){
    const {latitude:lat,longitude:long} = data.coords
    console.log( lat , long );
  }
  else{
    console.error('위치 서비스 동의 하세요');
  }
})*/


// ==== 함수로 만들어보기 ==== //

// 이러면 undefined 나옴 
// 왜냐하면 'navigator.geolocation.getCurrentPosition'은 비동기적으로 동작
function getGeolocation(){
  navigator.geolocation.getCurrentPosition((data)=>{
    if(data){
      const {latitude:lat,longitude:long} = data.coords
      
      // const geo = {
      //   lat: lat, 
      //   long: long
      // };

      const geo = { lat, long };
      return geo
    }
    else{
      console.error('위치 서비스 동의 하세요');
    }
  })
}

console.log(getGeolocation());  // {let:37.15, long:127.561234}




// 콜백함수를 이용해서 매개변수를 함수로 줌. (// movePage (11-2) 참고하기)
// success 는 함수 본문이 됨.
// success 함수를 몇 초가 걸리는 비동기 함수 안에서 실행하기!
// 값이 떨어지는 순간 함수 비동기 안에서 함수를 실행하고 geo를 success(geo)에 전달해주겠다~

// 1차

/*function getGeolocation(success){
  navigator.geolocation.getCurrentPosition((data)=>{
    
    if(data){
      const {latitude:lat,longitude:long} = data.coords;
      const geo = { lat, long };
      success(geo) //
    }
    else{
      console.error('위치 서비스 동의 하세요');
    }
  })

}


/~getGeolocation(
  (data)=>{
    console.log(data)
  }
)
~/
getGeolocation(
  ({lat,long})=>{
    console.log(lat, long)
  }
)
*/









// 2차
function getGeolocation(success, fail){

  navigator.geolocation.getCurrentPosition((data)=>{
    
    if(data){
      const {latitude:lat,longitude:long} = data.coords;
      const geo = { lat, long };
      success(geo) //
    }
  }, (e)=>{
    fail({message: '위치 서비스 동의 하세요'});
  });
}


getGeolocation(
  ({lat,long})=>{
    // console.log(lat, long)
  },
  (e) => {
    console.log(e);
  }
);



// 프로미스로 만들기
/*function getGeolocation(){
  
  return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((data)=>{
  
    if(data){
      const {latitude:lat,longitude:long} = data.coords;
      const geo = { lat, long };
      resolve(geo)
    }
    else{
      reject({message:'위치 서비스 동의 하세요'});
    }
    })
  })
}

getGeolocation()
.then(res => console.log(res))*/


// 결과값까지 받을 수 있는 방법이 있다. -> async await? 


// navigator.mediaDevices.getUserMedia({video:true})



/* Screen 객체 ----------------------------------------------------------- */

const { width, height, availWidth, availHeight, orientation } = screen;


/* History 객체 ---------------------------------------------------------- */

const { back, forward, go, length, pushState, replaceState } = history;