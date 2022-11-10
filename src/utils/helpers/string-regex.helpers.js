// Получить цифры из строки
export function getDigFromString(item) {
  return parseInt(item.replace(/[^\d]/g, ''))
}
// Форматирование цифр типа 100 000 000
export function getDigFormat(item) {
  return item.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
}