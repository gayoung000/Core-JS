/* global gsap */ 

export function shake (t){

  // 하나의 tween
  // gsap은 애니메이션 작동시키면서 Tween 객체가 반환된다. 
  // 따라서 tween은 참조가 가능하다. (변수에 담기 가능)
  // 그리고 해당 참조된 대상을 반환해야 shake().play() 같은 형태로 쓸 수 있다.
  const animation = gsap.to(t, {
    duration:0.1,
    x:-10,
    repeat:5,
    yoyo:true,                         
  })

  return animation
}

