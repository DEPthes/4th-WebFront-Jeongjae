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

const delItem = (event) => {
  const target = event.target.parentElement;
  target.remove();
  updateCount();
};

const addItem = (text) => {
  if (text !== '') {
    const $li = document.createElement('li');
    const $span = document.createElement('span');
    const $button = document.createElement('button');

    $span.innerText = text;
    $button.innerText = 'x';
    $button.addEventListener('click', delItem);

    $li.appendChild($span);
    $li.appendChild($button);
    $ul.appendChild($li);

    updateCount();
  } else {
    alert('할 일을 입력하세요');
  }
};

$button.addEventListener('click', () => {
  addItem($input.value.trim());
  $input.value = '';
});
