const content = document.querySelector("#content");

// console.log(content.innerHTML); 
// <span>안녕</span><span style="display:none">내가 과연 보일까~?😏</span>

// console.log(content.innerText); // 안녕

// console.log(content.textContent); // 안녕~ 내가 과연 보일까~?😏 



// 안바뀜
// content.innerHTML의 현재 값(A)을 innerH라는 변수(B)에 복사
// 복사해서 담은 변수(B)가 다른 걸 저장하더라도 다른 변수(A)는 바뀌지 않음
/*let innerH = content.innerHTML;
innerH = '<span style="color: hotpink">안녕</span>' ;*/




// content.innerHTML = '<span style="color: hotpink; display: none">안녕#1</span>' ;

// console.log(content.innerHTML); 




// content.innerText = '<span style="color: green; display: none">안녕#2</span>'

// console.log(content.innerText);



content.textContent = '<span style="color: blue; display: none">안녕#3</span>'

console.log(content.textContent);
