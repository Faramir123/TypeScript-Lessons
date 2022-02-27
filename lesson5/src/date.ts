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
export const finishDate = new Date(
  sinpleDate.setDate(sinpleDate.getDate() + raznicaDney)
);
