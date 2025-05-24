const $input = document.querySelector('#todo-input');
const $button = document.querySelector('#add-button');
const $ul = document.querySelector('.todo-list');
const $count = document.querySelector('.count');

const updateCount = () => {
  const items = $ul.querySelectorAll('li');
  let count = 0;
  items.forEach(() => {
    count++;
  });
  $count.innerText = `${count}개 항목 남음`;
};
/* 현재 목록에 있는 li 개수를 세어서 count에 표시하는 역할*/

const delItem = (event) => {
  const target = event.target.parentElement;
  target.remove();
  updateCount();
};
/* parentElement 는 해당 버튼이 들어 있는 li 요소*/
/* li를 remove로 삭제 */
/* updateCount 호출해서 항목 수 업데이트*/

const addItem = (text) => {
  if (text !== '') {
    const $li = document.createElement('li');
    const $span = document.createElement('span');
    const $button = document.createElement('button');
    /* 인자로 받은 text가 빈 문자열이 아닌지 확인*
    /* li, span, button 요소를 새로 만들어 dom에 추가*/

    $span.innerText = text;
    $button.innerText = 'x';
    $button.addEventListener('click', delItem);
    /*<span>에는 사용자가 입력한 텍스트를 넣음.*/

    $li.appendChild($span);
    $li.appendChild($button);

    /*먼저 <li> 안에 <span>을 넣고, 그다음 <button>을 넣어요.

즉, 결과적으로 DOM에 아래와 같은 구조가 생김:*/

    $ul.appendChild($li);
    /*위에서 만든 <li> 항목을 실제 <ul> 목록에 추가*/
    updateCount();
  } else {
    alert('할 일을 입력하세요');
  }
};

$button.addEventListener('click', () => {
  addItem($input.value.trim());
  $input.value = '';
});
