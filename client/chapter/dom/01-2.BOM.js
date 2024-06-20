// let user;


/*function userInfo(id) {
  setTimeout(function () {
    console.log('2초');
    user = {
      'id' : id,
    };
  }, 2000);
  return user;
}

userInfo('아이디'); 
// console.log(user); // undefined
// undefined가 나오는 이유는 setTimeout이 실행되기 전 user를 리턴하고 있어서 */

let user;

function userInfo2(id) {
  setTimeout(function () {
    console.log('2초');
    user = {
      'id' : id,
    };

    console.log('user :', user);
  }, 2000);
}

 userInfo2('아이디'); 




// =================== 2번쨰 방식 ================//
setTimeout(function () {
  console.log('3초');
  console.log(user);
}, 3000);

              // 아이디  // function (user) {...}
function userInfo(id, callback) {
  setTimeout(function () {
    console.log('2초');
    const user = {
      'id': id, // { id: 아이디 }
    };
    callback(user); // user : { id: 아이디 }
  }, 2000);
}

userInfo('아이디', function (user) {
  console.log('user :', user);
});



