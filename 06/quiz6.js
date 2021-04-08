
//요소
const $result = document.getElementById("result");
const $btnGetInputValue = document.getElementById("btn");

//함수
function gugudan(num){
    str = ''
    for(var i = 1; i<10; i++){
        str += num + "x" + i + "=" + (num*i) + "<br>";
        //console.log(num, "X", i, " = ", num*i);
    }
    $result.innerHTML = str;
}

function setResult(){
    const $inputValue = document.getElementById("num");
    const transType = parseInt($inputValue.value);
    if(!isNaN(transType)){    //숫자일 때
        gugudan(transType);
    }else{                    //숫자가 아닐 때
        alert('숫자를 입력해 주세요');
    }
    
}

//이벤트 등록
$btnGetInputValue.addEventListener("click", setResult);