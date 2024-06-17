/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

// 1. 객체의 상속
// 2. 생성자 함수의 상속
// 3. 생성자 함수 모던 방식 class

class Animal {
  constructor(name){
    this.name = name;
    this.legs = 4;
    this.tail = true,
    this.stomach = []
  }

  get eat(){
    return this.stomach
  }

  set eat(food){
    this.stomach.push(food)
  }
}

const a = new Animal('포동이');

class Tiger extends Animal { // 즉, Animal꺼를 상속받아서 생성자 함수 Tiger 만들어줘~ 란 뜻.
  
  // 인갭슐레이션 .. 캡술화시키기
  // 이피 패턴(IIFE)과 비슷하다. 
  static options = { // 이렇게 쓰면 데이터가 전역이 아닌 함수 안에서 쓰므로 안전하게 보관됨.
    version: '1.0.0',
    company: '8b-studio',
    ceo: '신선범'
  }
  constructor(name){ 
    super(name) // 부모의 constructor을 호출하겠다! // 그럼 Animal의 constructor(name) 매개변수 name로 들어가짐
    this.pattern = '호랑이무늬'
  }

  static bark(sound){ // 인스턴스 메서드 bark를 static으로 만들기..
    return sound + '호랑이'
  }

  hunt(target){
    return `${target}에게 조용히 접근한다. `
  }
}



// Model   (데이터)
// View    (랜더링)
// Control (이벤트)


class Todo {

  target = null;
  registerButton = null;
  list = null;
  
  constructor({input,button,renderPlace}){
    
    this.target = document.querySelector(input);
    this.registerButton = document.querySelector(button);
    this.list = document.querySelector(renderPlace)
    this.todoListArray = [];
    this.data;

    this.registerEvent()

    this.target.addEventListener('input',()=>{
      this.data = this.currentInputTodoData;
    })
  }

  get currentInputTodoData(){
    return this.target.value;
  }

  set currentInputTodoData(value){
    this.target.value = value;
  }

  get todoList(){
    return this.todoListArray
  }

  set todoList(value){
    this.todoList.push(value);
  }

  #createList(){
    let template = `
      <li>${this.data}</li>
    `
    return template;
  }

  render(){ 
    this.list.insertAdjacentHTML('beforeend',this.#createList());
    this.target.value = ''
  }
  
  addTodoData(){
    this.todoList = this.data;
  }

  registerEvent(){
    this.registerButton.addEventListener('click',()=>{
      this.addTodoData()
      this.render()
    });
  }

}




const button = new Todo({
  input:'#todo',
  button:'.register',
  renderPlace:'.todoList'
})



const button2 = new Todo({
  input:'#todo2',
  button:'.register2',
  renderPlace:'.todoList2'
})