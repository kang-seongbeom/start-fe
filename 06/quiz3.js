//요소 찾기
const $box = document.querySelector('.box');
const $btnClassNameAddRed = document.querySelector('.add-red');
const $btnAddBoxElement = document.querySelector('.add-btn');
const $btnDeleteBoxElement = document.querySelector('.delete-btn');
const $btnAddTextToBox = document.querySelector('.text-btn');
const $btnResetBox = document.querySelector('.reset-btn');
const $btnToggleBox = document.querySelector('.toggle-btn');
const $btnShowImage = document.querySelector('.image-btn');

//함수
function boxClassToRed() {
  console.log('boxClassToRed');
  $box.className += ' red';
}

function addBoxElement() {
  const newDiv = document.createElement('div');
  newDiv.setAttribute('class', $box.className);
  document.body.appendChild(newDiv);
}

function deleteBoxElement() {
  const box = document.querySelector('.box');
  if (box) box.remove();
}

function addTextToBox() {
  const $inputText = document.querySelector('.txt');
  const $allBox = document.querySelectorAll('.box');
  for (var i = 0; i < $allBox.length; i++) {
    $allBox[i].innerHTML = $inputText.value;
  }
}

function resetBox() {
  const $allBox = document.querySelectorAll('.box');
  for (var i = 0; i < $allBox.length; i++) {
    $allBox[i].remove();
  }
}

let toggle = 'block';
function toggleBox() {
  const $allBox = document.querySelectorAll('.box');
  if (toggle === 'block') {
    toggle = 'none';
    for (var i = 0; i < $allBox.length; i++) $allBox[i].style.display = toggle;
  } else if (toggle === 'none') {
    toggle = 'block';
    for (var i = 0; i < $allBox.length; i++) $allBox[i].style.display = toggle;
  }
}

const imageRrc = 'https://i.imgur.com/69NjYBH.png';
function showImage() {
  const image = '<img src=' + imageRrc + "alt=''>";
  $box.innerHTML = image;
}

//이벤트 등록
$btnClassNameAddRed.addEventListener('click', boxClassToRed);
$btnAddBoxElement.addEventListener('click', addBoxElement);
$btnDeleteBoxElement.addEventListener('click', deleteBoxElement);
$btnAddTextToBox.addEventListener('click', addTextToBox);
$btnResetBox.addEventListener('click', resetBox);
$btnToggleBox.addEventListener('click', toggleBox);
$btnShowImage.addEventListener('click', showImage);
