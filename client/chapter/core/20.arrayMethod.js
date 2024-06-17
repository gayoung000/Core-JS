/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

/*function isArray(data){
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array'
}
// Object.prototype.toString() : [object Object] 로, 
// 즉, 이건 오브젝트만 가지고 있는 함수 (정확하게 data 뭘 가지고 있는지 떨어짐. 배열을 넣으면 Array라고 나옴!)
// call 로 빌려와서 쓰기
// slice(8, -1): slice로 Array란 문자열만 잘라서 씀.
// Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array' : true가 떨어지고 이걸 반환함.


isArray(data) // true | false


function isNull(data){
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null'
}
*/


/*function typeOf(data){
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase()
}*/

/*const typeOf = (data) => Object.prototype.toString.call(data).slice(8,-1).toLowerCase()


const isArray = (data) => typeOf(data) === 'array'
const isNull = (data) => typeOf(data) === 'null'
const isNumber = (data) => typeOf(data) === 'number'*/


const people = [
  {
    id:0,
    name:'안재명',
    age:25,
    job:'물음표살인마',
    imgSrc:'https://randomuser.me/api/portraits/thumb/men/50.jpg',
    imgAlt:'대체 텍스트입니다.'
  },
  {
    id:1,
    name:'황선우',
    age:51,
    job:'요식업 사장님',
    imgSrc:'https://randomuser.me/api/portraits/thumb/men/65.jpg',
    imgAlt:'대체 텍스트입니다.'
  },
  {
    id:2,
    name:'유진',
    job:'디스코드 봇',
    age:12,
    imgSrc:'https://randomuser.me/api/portraits/thumb/men/75.jpg',
    imgAlt:'대체 텍스트입니다.'
  },
  {
    id:3,
    name:'김한울',
    job:'비둘기',
    age:39,
    imgSrc:'https://randomuser.me/api/portraits/thumb/men/78.jpg',
    imgAlt:'대체 텍스트입니다.'
  }
]







/* 요소 순환 ---------------------------- */

// forEach
people.forEach((user) => {
  console.log(user.job);  // 왜 user[job]은 안되나
})

const span = document.querySelectorAll('span'); // span은 지금 유사배열! 그리고 forEach 내장되어 있다. 

span.forEach((tag)=>{
  tag.addEventListener('click', function(){
    this.style.color = 'blue' // this 찾기 위해 일반함수 쓰기
  })
})

/*const first = document.querySelector('.first');

first.addEventListener('click', () => {
  console.log('first를 클릭하셨습니다.');
})
*/




/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift
// reverse
// splice
// sort



// people.push('admin')
// people.pop('admin')
// unshift
// shift
/*const arr = [...people];
arr.reverse()

console.log(arr);*/

// people.splice(0, 2, '안녕');


/*function compare(a,b){
  if(a.age > b.age) return 1; // 첫 번째 값이 두 번째 값보다 큰 경우
  if(a.age == b.age) return 0; // 두 값이 같은 경우 
  if(a.age < b.age) return -1; // 첫 번째 값이 두 번째 값보다 작은 경우
}*/

// 구조분해할당으로 비교
function compare({age:a}, {age:b}){ // 객체의 age를 받되, 이름 중복이라 이름을 다시 바꿔주는 것!
  if(a > b) return 1; // 첫 번째 값이 두 번째 값보다 큰 경우
  if(a == b) return 0; // 두 값이 같은 경우 
  if(a < b) return -1; // 첫 번째 값이 두 번째 값보다 작은 경우
}


 // people.sort(compare) // sort() 안에는 비교 함수 넣어줌.

/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
// toReversed
// toSpliced
// map


// concat
// slice
const toSorted = people.toSorted(compare);

const toReversed = people.toReversed();

const toSpliced = people.toSpliced(0, 2);

// 이름만 담은 배열 반환
const nameList = people.map(user => user.name)

// 현재 나이에 + 2 배열 반환
const age = people.map(user => user.age + 2)





// ========== 네임 태그 ============ //
/*const nameTag = people.map(({name})=>{ // 객체라서 구조분해할당을 해서 name을 뽑아냄
 
  let template = `
     <li> 이름 : ${name} </li>
  `
  return template // 배열이 나옴
})
*/

/*nameTag.forEach((tag)=>{ // 배열을 순환하기 위해 forEach()
 document.body.insertAdjacentHTML('beforeend',tag)
})*/

// ul 태그 직접 잡는 버전
/*nameTag.forEach((tag)=>{ // 배열을 순환하기 위해 forEach()
  document.querySelector('ul').insertAdjacentHTML('beforeend',tag)
 })*/


  const cardTag = people.map(({name,age,job,imgSrc,imgAlt})=>{
  
    let template = /* html */`
      <li class="userCard">
        <div class="imageField">
          <img src="${imgSrc}" alt="${imgAlt}" />
        </div>
        <ul class="contents">
          <li> <span class="strong">이름</span> : ${name}</li>
          <li> <span class="strong">나이</span> : ${age}</li>
          <li> <span class="strong">직업</span> : ${job}</li>
        </ul>
      </li>
    `
    return template;
  })
  

  const ul = document.querySelector('ul');

  cardTag.forEach(tag => ul.insertAdjacentHTML('beforeend',tag))




/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find

const h = people.find((item)=>{
  return item.name === '황선우'
}) // 얘는 단일 대상만 찾음 // 얘는 객체를 반환할 수 있고 배열을 반환할 수도 있고,, item이 뭔지에 따라 반환값이 다르다. 

// findIndex
// 얘는 하나만 찾음

/* 요소 걸러내기 --------------------------- */

// filter
const filter = people.filter((item) => {
  return item.age > 20
})
// console.log(...filter); // 참이 되는 아이템들을 다 모아서 배열로만 반환한다. //조건에 부합하는 여러 개를 반환할 수 있다.




/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
const reduce = people.reduce((acc, cur) => {
  return acc + cur.age
}, 0) // 초기값 안주면 첫번째 객체가 acc가 되고 거기에 숫자를 더하려하니.. 처음에 객체가 toString()이 발동돼서 문자열이 되고 거기에 숫자를 더하려해서 전체 문자열이 된다. 

// 화살표 함수로 ..!
// const reduce = people.reduce((acc,cur) => acc + cur.age ,0)


const template = people.reduce((acc, cur)=>{
  return acc + `<li class="userCard"> ${cur.name} : ${cur.age} </li>`
}, '')

ul.insertAdjacentHTML('beforeend', template)

// reduceRight

/* string ←→ array 변환 ------------------ */

const str = '유진 정민 현주 재명'

// split : 문자 -> 배열

const stringToArray = str.split(' ');
console.log(stringToArray);


// join : 배열 -> 문자
const arrayToString = stringToArray.join('.');
console.log(arrayToString);




// forEach를 함수로 만들어본다면..?
const products = [
  {name: '냉동 만두', price: 10000, brand: '비비고'},
  {name: '냉동 피자', price: 15000, brand: '오뚜기'},
  {name: '냉동 치킨 너겟', price: 12000, brand: '하림'},
  {name: '냉동 감자튀김', price: 8000, brand: '맥케인'},
  {name: '냉동 새우', price: 18000, brand: '곰곰'}
];


// [1,2,3].forEach(()=>{})


const forEach= (f, i) => { // i는 배열
  for(const a of i){
    f(a)
  }
}

forEach((item)=>{
  console.log(item);
}, [1,2,3])

// forEach(()=>{}, [1,2,3])




// map을 함수로 만들어본다면..?

const map = (f, i) => {
  let result = [];

  for(const a of i){
    result.push(f(a))
  }

  return result;
}

// console.log(map(n => {return ????}))


// filter를 함수로 만들어본다면..?

const _filter = (f, i) => {
  let result = [];
  for(const a of i){
    if(f(a)) result.push(a)
  }
  return result;  
}

_filter( n => n > 3, [1,2,3,4,5]) // n > 3한 값을 리턴함. 이걸 f(a)에 넣음..?



// reduce를 함수로 만들어본다면..?
const _reduce = (f, acc, i) => {

  if(!i){
    i = acc;
    acc = i.shift()

    // i = acc[Symbol.iterator](); //이터레이터로 쓰기
    // acc = i.next().value
  }

  for(const a of i){
   acc = f(acc,a);
  }

  return acc;
}


const add = (a,b) => a + b; // a 누적값 b는 더해지는 값

// console.log(_reduce(add, [1,2,3]));
console.log(_reduce( (t, p) => t + p.price, 0, products)); //products 객체 계산해보기

console.log( 


  _reduce(
    add,
    map(p => p.price,
      _filter(p => p.price < 10000,products)),
  )
  
);






//배열 메서드에서 forEach, map, filter, reduce가 중요함!