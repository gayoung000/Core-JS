/* ---------------- */
/* Switch           */
/* ---------------- */

let a = 10;
switch (a){
 case 10 :
  console.log('10입니다!');
  break;

  case 11 :
    console.log('11입니다!');
    break;
  
  case 12 :
    console.log('12입니다!');
    break;

  default :
    console.log('10, 11, 12가 없습니다');
}

console.clear()

const MORNING    = '아침',
      LUNCH      = '점심',
      DINNER     = '저녁',
      NIGHT      = '밤',
      LATE_NIGHT = '심야',
      DAWN       = '새벽';

let thisTime = LATE_NIGHT;



/* 다양한 상황에 맞게 처리 --------------------------------------------------- */


switch (thisTime) {
  case MORNING:
    console.log('뉴스 기사 글을 읽는다.');
    break;
    
  case LUNCH:
    console.log('자주 가는 식당에 가서 식사를 한다.');
    break;

  case DINNER:
    console.log('동네 한바퀴를 조깅한다.');
    break;

  case NIGHT:
    console.log('친구에게 전화를 걸어 수다를 떤다.');
    break;

  case LATE_NIGHT:
  case DAWN:
    console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
    break;

  default:
    break;
}

/* switch문 → if문 변환 --------------------------------------------------- */
if (thisTime == MORNING){
  console.log('뉴스 기사 글을 읽는다.');
} else if (thisTime === LUNCH){
  console.log('자주 가는 식당에 가서 식사를 한다.');
} else if (thisTime === DINNER){
  console.log('뉴스 기사 글을 읽는다.');
} else if (thisTime === NIGHT){
  console.log('친구에게 전화를 걸어 수다를 떤다.');
} else if (thisTime === LATE_NIGHT || thisTime === DAWN){
  console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
} 


/* switch vs. if -------------------------------------------------------- */

//let promptValue = +prompt('0~6까지의 숫자를 입력해주세요');

 /* switch(promptValue){
  case 0 : 
    console.log('일');
    break
  case 1 : 
    console.log('월');
    break
  case 2 : 
    console.log('화');
    break
  case 3 : 
    console.log('수');
    break
  case 4 : 
    console.log('목');
    break
  case 5 : 
    console.log('금');
    break
  case 6 :
    console.log('토');
    break
  default : 
    console.log('0~6까지의 숫자를 입력해주세요');
    break
} */
console.clear();



// 0~6까지의 랜덤수를 받아서
// Separation of concetns (관심사의 분리)
// 매개 변수(parameter)
function random(n) {
  let landomValue = Math.floor(Math.random()*n);
  return landomValue;
}

//const number = random(7);


function getDay(num) {
    switch (num) {
      case 0: return '일';
      case 1: return '월';
      case 2: return '화';
      case 3: return '수';
      case 4: return '목';
      case 5: return '금';
      case 6: return '토';
  
  }
  //return landomValue;
}
// getDay(random(7))

console.clear()


// getDay 를 실행해서 요일을 받아옴
// 해당 요일을 가지고 토, 일이 뜨면 '주말입니다'
// 나머지는 '평일입니다'
function weekend() {
  let weekendValue = getDay(random(7));
  
  if (weekendValue === '토' || weekendValue === '일'){
    return '주말입니다.'
  } else {
    return '주중입니다.'
  }
}

console.log(weekend());


  

