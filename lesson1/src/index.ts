import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
//Получение начальной и конечной даты
const sinpleDate = new Date()
function daysInMonth(month, year) {
  return new Date(year, month+1, 0).getDate();
}
const howDaysInMounth = daysInMonth(sinpleDate.getMonth(), sinpleDate.getFullYear())
const howDaysInNextMounth = daysInMonth((sinpleDate.getMonth() + 1), sinpleDate.getFullYear())
const raznicaDney = howDaysInMounth - sinpleDate.getDay() + howDaysInNextMounth + 1
const finishDate = new Date(sinpleDate.setDate(sinpleDate.getDate() + raznicaDney))
const firstdate = new Date()


window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('Alex', '/img/avatar.png', 2)
  renderSearchFormBlock(firstdate,finishDate)
  renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})
