/* --------------- */
/* For Of Loop     */
/* --------------- */


// enumerable : 열거 가능한 
// iterable : 반복 가능한 (string, array)

// for ... of => iterable 요소만 사용 가능. 따라서 반복 가능하지 않다면 for..of로 순환돌 수 없다.

// 배열 
// 1. 순서(index)가 있다.
// 2. []
// 3. length

/*for(const item of [1, 2, 3]){
  // item 변수에 순차적으로 1, 2, 3이 할당된다. 
  console.log(item); // 1, 2, 3
}*/


// 유사 배열 : 배열처럼 생겼지만 배열이 아니다.
const arrayLike = {
  0 : 'body',
  1 : 'head',
  2 : 'div',
  length : 3
 //  Symbol[Symbo.iterablel](){}
};

/*for(let value of 'hello'){
  console.log(value);
}*/

// arrayLike is not iterable 이란 에러 메시지가 뜸
/*for(let value of arrayLike){
  console.log(value);
}*/



const languages = [
  {
    id: 'ecma-262',
    name: 'JavaScript',
    creator: 'Brendan Eich',
    createAt: 1995,
    standardName: 'ECMA-262',
    currentVersion: 2022,
  },
  {
    id: 'java',
    name: 'Java',
    creator: 'James Gosling',
    createAt: 1995,
    standardName: null,
    currentVersion: 18,
  },
  {
    id: 'ecma-334',
    name: 'C#',
    creator: 'Anders Hejlsberg',
    createAt: 2000,
    standardName: 'ECMA-334',
    currentVersion: 8,
  },
];


// for ~ of 문
// - 특정 조건에서 건너띄기 (Java 문자 포함 시) continue
// - 특정 조건에서 중단하기 break

for(let value of languages){
  let name = value.name;
  
  if(name.includes('Java') && name.length < 5) continue
  // console.table(value);
}



const randomUser = {
  gender: 'female',
  name: { title: 'Ms', first: 'Carol', last: 'May' },
  location: {
    street: { number: 9162, name: 'Church Road' },
    city: 'Birmingham',
    state: 'Cumbria',
    country: 'United Kingdom',
    postcode: 'FO5E 4TN',
    coordinates: { latitude: '-4.3301', longitude: '155.0223' },
    timezone: { offset: '-4:00', description: 'Atlantic Time (Canada), Caracas, La Paz' },
  },
  email: 'carol.may@example.com',
  login: {
    uuid: '39e4e214-7f66-44a6-a3ba-3b5ce46b8e25',
    username: 'redduck745',
    password: 'picks',
    salt: '8xzqOzAn',
    md5: '7250e4042c2367cc82487f798c7c5253',
    sha1: '6c0e2fac669d6d7f11fb0bab52493f441cf5834b',
    sha256: '9e49256b8917113750533c24c015336af43d5d7130cf8faa19054c1ba36e7de8',
  },
  dob: { date: '1962-12-07T21:51:26.781Z', age: 59 },
  registered: { date: '2018-06-08T04:07:17.788Z', age: 4 },
  phone: '022 1280 9236',
  cell: '07653 428700',
  id: { name: 'NINO', value: 'SH 44 98 72 L' },
  picture: {
    large: 'https://randomuser.me/api/portraits/women/21.jpg',
    medium: 'https://randomuser.me/api/portraits/med/women/21.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/21.jpg',
  },
  nat: 'GB',
};

// 객체의 키, 값 순환  --> 결론은 얘도 for~ of 로 순환함. 어떻게? 객체를 배열로 만들고 for...of 쓰기!
// - for ~ in 문
// - for ~ of 문
// - 성능 비교 진단

// Object.keys() => 객체들의 키를 모아 하나의 '배열로 반환'
// Object.values() => 객체들의 값를 모아 하나의 '배열로 반환'
// Object.entries() => 객체들의 키와 값을 하나의 쌍으로 만들고 이를 '배열로 반환'
const keys = Object.keys(arrayLike);
for(let key of keys){
   // console.log(key);
}

const values = Object.values(arrayLike);
for(let value of values){
  // console.log(value);
}

const entries = Object.entries(arrayLike);
for(let keyValue of entries){
  // let key = keyValue[0];
  // let value = keyValue[1];
  // console.log(key);
}




/* --------------- */
//      예제
/* --------------- */
// hasOwnProperty 함수 만들기
Object.prototype.nickName = 'tiger';


function hasProperty(obj, key){
  return Object.prototype.hasOwnProperty.call(obj, key);
}

/*for(let key in randomUser){
  if(hasProperty(randomUser, key)){
    const L1 = randomUser[key];

    if(typeof L1 === 'object'){ // 객체 타입만 출력.
      console.log(L1);
    }
  }
}*/

// console.time()


// 완성 코드
/*for(let key in randomUser){

  if(hasProperty(randomUser,key)){

    const L1 = randomUser[key];

    console.log('\tL1 : ',L1);

    if(typeof L1 === 'object'){

      for(let key in L1){
        
        if(hasProperty(L1,key)){

          const L2 = L1[key];
          console.log('\t\tL2 : ',L2);

          if(typeof L2 === 'object'){
            
            for(let key in L2){
              
              if(hasProperty(L2,key)){
                const L3 = L2[key];

                console.log('\t\t\tL3 : ',L3);
              }
            }
          }
        }
      }
    }
  }
}*/


// for ... of로 써보기...
// 이렇게 복잡한 코드를 재귀함수로 해결할 수 있다. 
/*for(let keyValue of Object.entries(randomUser)){
  let key = keyValue[0];
  let value = keyValue[1];
    console.log('\tL1 : ',value);
  if(typeof value === 'object'){

    for(let keyValue of Object.entries(value)){
      let key = keyValue[0];
      let value = keyValue[1];
      console.log('\t\tL2 : ',value);

      if(typeof value === 'object'){
        
        for(let keyValue of Object.entries(value)){
          let key = keyValue[0];
          let value = keyValue[1];
          
          console.log('\t\t\tL3 : ',value);
        }
      }
    }
  }
}*/

// console.timeEnd()