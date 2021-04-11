
//요소찾기
const $box = document.getElementById('box');

//변수
let x=0, y=0
let toggle = false;

//함수
function moveUp() {
    toggle = false;
}

function moveDown(event) {
    toggle = true;
    x = $box.offsetLeft - event.clientX;
    y = $box.offsetTop - event.clientY;
}

function moveMove(event) {
    if (toggle) {
        $box.style.left = x + event.clientX + 'px';
        $box.style.top = y + event.clientY + 'px';
        console.log(event.clientX, event.clientY);
    }
}

//이벤트 등록
$box.addEventListener('mouseup', moveUp);
document.addEventListener('mousedown', moveDown);
document.addEventListener('mousemove', moveMove);