function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

export function formatDate(date) {
  const data = new Date(date);
  data.setMinutes(data.getMinutes() + data.getTimezoneOffset());
  return [
    padTo2Digits(data.getDate()),
    padTo2Digits(data.getMonth() + 1),
    data.getFullYear(),
  ].join('/');
}
