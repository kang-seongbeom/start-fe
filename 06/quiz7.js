//요소 찾기
const $box = document.querySelector('.box');
const $bug = document.getElementById('bug');
let $point = document.getElementById('point');
let $life = document.getElementById('life');

//1초마다 setInterval할 함수 등록.
//decreaseLife함수에서 clearInterval을 할 것이기 때문에 전역으로 만듦
var showBug;

//생명, 포인트, 주기 변수 초기화
$life.innerHTML = 10;
$point.innerHTML = 0;
var frequency = 1000;

//생명력 감소 함수
function decreaseLife() {
  let life = $life.innerHTML;
  let transLife = parseInt(life);
  if (transLife === 1) {
    $life.innerHTML = 0;
    $bug.style.display = 'none';
    alert('Game over!');
    clearInterval(showBug);
  } else if (transLife > 0) {
    $life.innerHTML = transLife - 1;
  } else {
    alert('Game이 끝났습니다. 새로고침해 주세요.');
  }
}

//포인트 증가 함수
//bug클릭이 box에게 까지 전달되지 않도록 stopPropagation사용
function increasePoint(event) {
  let point = $point.innerHTML;
  let life = $life.innerHTML;
  if (life > 0) $point.innerHTML = parseInt(point) + 1;
  event.stopPropagation();
}

//게임 함수
function gameStart(boxTop, boxLeft, boxRight, boxBottom) {
  //bug display 변수 및 초기값 셋팅
  let toggle = 'block';
  $bug.style.display = toggle;

  //box의 영역 크기 구하기
  const distanceX = boxRight - boxLeft;
  const distanceY = boxBottom - boxTop;

  //bug의 크기 가져오기
  const bugWidth = $bug.offsetWidth;
  const bugHieght = $bug.offsetHeight;

  showBug = setInterval(() => {
    //bug가 나타날 랜덤 좌표 구하기
    const randX = Math.floor(Math.random() * (distanceX - bugWidth));
    const randY = Math.floor(Math.random() * (distanceY - bugHieght));

    if (toggle === 'none') {
      toggle = 'block';
      $bug.style.top = randY + 'px';
      $bug.style.left = randX + 'px';
      $bug.style.display = toggle;
    } else {
      toggle = 'none';
      $bug.style.display = toggle;
    }
  }, frequency);
}

//이벤트 등록
$box.addEventListener('click', decreaseLife);
$bug.addEventListener('click', increasePoint);

//게임 시작하기
const locationBox = $box.getBoundingClientRect();
gameStart(
  locationBox.top,
  locationBox.left,
  locationBox.right,
  locationBox.bottom,
);
