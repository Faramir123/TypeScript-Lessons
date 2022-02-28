import { renderBlock } from './lib.js';

export function search(data: SearchFormData): any {
  console.log('CITY', data.city);
  console.log('startDate', data.startDate);
  console.log('finishDate', data.finishDate);
  if (data.price) {
    console.log('price', data.price);
  }
}

//интерфейс для заданиа 2.2
export interface SearchFormData {
  city: string;
  startDate: string;
  finishDate: string;
  price?: string;
}
//После отрисовки страницы выбираем элементы формы содержащие информацию и передаем их в функцию

const cityId: string = (<HTMLInputElement>document.getElementById('city'))
  .value;
const firstDateId: string = (<HTMLInputElement>(
  document.getElementById('check-in-date')
)).value;
const finishDateId: string = (<HTMLInputElement>(
  document.getElementById('check-out-date')
)).value;
const priceId: string = (<HTMLInputElement>document.getElementById('max-price'))
  .value;
export const data: SearchFormData = {
  city: cityId,
  startDate: firstDateId,
  finishDate: finishDateId,
  price: priceId,
};

export function renderSearchFormBlock(startDate: any, finishDate: any) {
  renderBlock(
    'search-form-block',
    `
    <form id='formSubmit>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${
  startDate.toISOString().split('T')[0]
}" min="${startDate.toISOString().split('T')[0]}" max="${
  finishDate.toISOString().split('T')[0]
}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${
  new Date(startDate.setDate(startDate.getDay() + 1))
    .toISOString()
    .split('T')[0]
}" min="${startDate.toISOString().split('T')[0]}" max="${
  finishDate.toISOString().split('T')[0]
}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button type="submit">Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  );
}
