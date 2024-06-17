let user;


function userInfo(id) {
  setTimeout(function () {
    console.log('2초');
    user = {
      id: id,
    };
  }, 2000);
  return user;
}

userInfo('아이디');
console.log(user); // undefined

setTimeout(function () {
  console.log('3초');
  console.log(user);
}, 3000);

function findUserAndCallBack(id, callback) {
  setTimeout(function () {
    console.log('2초');
    const user = {
      id: id,
    };
    callback(id);
  }, 2000);
}

findUserAndCallBack('아이디', function (id) {
  console.log('user :', id);
});



