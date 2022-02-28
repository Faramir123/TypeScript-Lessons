import { finishDate } from './date';
import { fetchTodo } from './FetchToDo';
import { data, renderSearchFormBlock, search } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import {
  getFavoritesAmount,
  getUserData,
  localStorageUser,
  renderUserBlock,
} from './user.js';
import { renderToast } from './lib.js';
//Получение начальной и конечной даты
const firstdate = new Date();

//создаем интерфейс user и favoritesAmount т.к. данные в localStorage отсутствуют.
//Тем самым создаём жмуляцию получения данных из localStorage

const user = new localStorageUser('Alex', '/img/avatar.png', 2);
const userrDate = getUserData(user);
const favorite = getFavoritesAmount(user);

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock(
    userrDate?.name,
    userrDate?.avatarUrl,
    favorite?.favoritesAmount
  );
  renderSearchFormBlock(firstdate, finishDate);
  renderSearchStubBlock();
  renderToast(
    {
      text: 'Это пример уведомления. Используйте его при необходимости',
      type: 'success',
    },
    {
      name: 'Понял',
      handler: () => {
        console.log('Уведомление закрыто');
      },
    }
  );
  fetchTodo();
});
//добваляю форму в переменную и вешаю слушатель onSubmit в который передаю функцию Search
// Функция Search  принимает данные из инпутов в форме и при отправле формы выводит их в консоль
const elemForm = document.getElementById('formSubmit');
elemForm.addEventListener('submit', search(data), false);
