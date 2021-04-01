var $select = null;

//블록 보이기
function printBoards() {
  var $board = document.getElementById('board');
  var boardCount = 16;
  var isWhite = false;
  var className = '';
  var boardLineCount = 4;
  var str = '';

  for (var i = 0; i < boardCount; i++) {
    //삼항 연산자를 통해 블랙과 화이트 결정
    className = isWhite ? 'black' : 'white';

    str += '<span class="' + className + '"></span>';

    isWhite = !isWhite;

    if (i % boardLineCount === boardLineCount - 1) {
      isWhite = !isWhite;
    }
  }
  $board.innerHTML = str;
}

//선택했을 때 빨간색으로 바뀌도록 설정
//replace를 사용하여 class에 select를 추가하고 삭제하여 되돌리기
function select(event) {
  if ($select) {
    $select.className = $select.className.replace(' select', '');
  }
  var el = event.currentTarget;
  el.className += ' select';
  $select = el;
}

//각 블록에 이벤트 추가
function addEvent() {
  var $boards = document.querySelectorAll('span');
  var boardsLength = $boards.length;
  for (var i = 0; i < boardsLength; i++) {
    $boards[i].addEventListener('click', select);
  }
}

printBoards();
addEvent();