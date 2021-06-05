import './todo.css';

import { render } from './html-render';
import formInput from './form-input';
import { loadData } from './data-manager';

const $result = document.querySelector('#result');

loadData((todos)=>{
  $result.addEventListener('click', (event) => {
    let { className } = event.target;
    if (className === 'delete') {
      //todo 삭제
      const { index } = event.target.parentElement.dataset;
      todos.splice(index, 1);
      render(todos);
    } else if (className === 'toggle-checked') {
      //todo chech box 선택
      const { index } = event.target.parentElement.dataset;
      todos[index].isDone = !todos[index].isDone; //toggle 반전
      render(todos);
    }
  });
  
  
  formInput.init(todos);
  render(todos);
});


