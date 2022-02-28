import { renderSearchFormBlock, search } from "./search-form.js";
import { renderSearchStubBlock } from "./search-results.js";
import { getFavoritesAmount, getUserData, renderUserBlock } from "./user.js";
import { renderToast } from "./lib.js";
//Получение начальной и конечной даты
const sinpleDate = new Date();
function daysInMonth(month: number, year: number) {
  return new Date(year, month + 1, 0).getDate();
}
const howDaysInMounth = daysInMonth(
  sinpleDate.getMonth(),
  sinpleDate.getFullYear()
);
const howDaysInNextMounth = daysInMonth(
  sinpleDate.getMonth() + 1,
  sinpleDate.getFullYear()
);
const raznicaDney =
  howDaysInMounth - sinpleDate.getDay() + howDaysInNextMounth + 1;
const finishDate = new Date(
  sinpleDate.setDate(sinpleDate.getDate() + raznicaDney)
);
const firstdate = new Date();

//создаем интерфейс user и favoritesAmount т.к. данные в localStorage отсутствуют.
//Тем самым создаём жмуляцию получения данных из localStorage
export class localStorageUser {
  name?: string | undefined;
  avatarUrl?: string;
  favoritesAmount?: number;
  constructor(name?: string, avatarUrl?: string, favoritesAmount?: number) {
    this.name = name;
    this.avatarUrl = avatarUrl;
    this.favoritesAmount = favoritesAmount;
  }
}
const user = new localStorageUser("Alex", "/img/avatar.png", 2);
const userrDate = getUserData(user);
const favorite = getFavoritesAmount(user.favoritesAmount);
//интерфейс для заданиа 2.2
export interface SearchFormData {
  city: string;
  startDate: string;
  finishDate: string;
  price?: string;
}
//После отрисовки страницы выбираем элементы формы содержащие информацию и передаем их в функцию

const cityId: string = (<HTMLInputElement>document.getElementById("city"))
  .value;
const firstDateId: string = (<HTMLInputElement>(
  document.getElementById("check-in-date")
)).value;
const finishDateId: string = (<HTMLInputElement>(
  document.getElementById("check-out-date")
)).value;
const priceId: string = (<HTMLInputElement>document.getElementById("max-price"))
  .value;
const data: SearchFormData = {
  city: cityId,
  startDate: firstDateId,
  finishDate: finishDateId,
  price: priceId,
};

window.addEventListener("DOMContentLoaded", () => {
  renderUserBlock(userrDate.name, user.avatarUrl, favorite.favoritesAmount);
  renderSearchFormBlock(firstdate, finishDate);
  renderSearchStubBlock();
  renderToast(
    {
      text: "Это пример уведомления. Используйте его при необходимости",
      type: "success",
    },
    {
      name: "Понял",
      handler: () => {
        console.log("Уведомление закрыто");
      },
    }
  );
});
//добваляю форму в переменную и вешаю слушатель onSubmit в который передаю функцию Search
// Функция Search  принимает данные из инпутов в форме и при отправле формы выводит их в консоль
const elemForm = document.getElementById("formSubmit");
elemForm.addEventListener("submit", search(data), false);
