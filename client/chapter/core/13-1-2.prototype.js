function User(name,address,age){
  
  this.name = name;
  this.address = address;
  this.age = age;

  this.sayHi = function(){
    return `안녕 ? 난 ${this.name} 이야 만나서 반가워~!`
  }
}


const person1 = new User('심','서울시 중랑구',40)
const person2 = new User('beom','서울시 ',35)
const person3 = new User('tiger','서울시',30)
const person4 = new User('kindtiger','서울시 중랑구',10)
const person5 = new User('이아영','서울시 중랑구',25)



function Admin(){
  User.call(this)
  this.auth = 'Lv.99'
}

const 관리자1 = new Admin('관리자');