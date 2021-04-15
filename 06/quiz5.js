//요소찾기
const $box = document.querySelector('.box');
const $box1 = document.querySelector('.box1');

//변수
let x = 0,
  y = 0;
let toggle = false;
let currentBox = '';

//함수
function moveUp(box) {
  box.addEventListener('mouseup', function () {
    toggle = false;
  });
}

function moveDown(box) {
  box.addEventListener('mousedown', function (event) {
    toggle = true;
    currentBox = box;
    x = box.offsetLeft - event.clientX;
    y = box.offsetTop - event.clientY;
  });
}

function moveMove(box) {
  document.addEventListener('mousemove', function (event) {
    if (toggle) {
      currentBox.style.left = x + event.clientX + 'px';
      currentBox.style.top = y + event.clientY + 'px';
      console.log(event.clientX, event.clientY);
    }
  });
}

moveUp($box);
moveDown($box);
moveMove($box);

moveUp($box1);
moveDown($box1);
moveMove($box1);
