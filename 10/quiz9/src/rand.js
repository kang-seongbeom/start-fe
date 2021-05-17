function random() {
  if (arguments.length === 1) { //파라미터가 하나일 때
    let num = arguments[0];
    if(!isNaN(num)) //파라미터가 숫자일 때
      return Math.floor(Math.random() * num);
    else  //파라미터가 숫자가 아닐 때
      return -1;
  } else if (arguments.length === 2) {  //파라미터가 두개일 때
    let min = arguments[0];
    let max = arguments[1];
    if((!isNaN(min)) && (!isNaN(max)))  //최대, 최소 둘다 숫자일 때
      return Math.floor(Math.random() * max) + min; 
    else  //최대, 최소가 숫자가 아닐때
      return -1; 
  } else   //파라미터가 없거나 세개 이상일 때
    console.log('Error');
}
export default random;
