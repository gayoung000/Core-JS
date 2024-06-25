
export function copy(text){
  // Promise 객체가 튀어나오므로 이걸 반환해줘야!
  return navigator.clipboard.writeText(text)
}