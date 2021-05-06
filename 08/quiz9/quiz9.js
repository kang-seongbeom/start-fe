const $url = document.querySelector('#url');
const $btn = document.querySelector('#btn');
const $log = document.querySelector('#log');

//fetch를 통해 가져온 값 셋팅
function showup(callback) {
  $log.value = callback;
}

//fetch
$btn.addEventListener('click', () => {
  let url = $url.value;
  fetch(url)
    .then((res) => {
      res.text().then(showup);
    })
    .catch((error) => {
      showup(error);
    });
});
