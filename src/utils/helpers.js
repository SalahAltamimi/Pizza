export function funCurrency(val) {
  return new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "EUR",
  }).format(val);
}
export const formatDate = (value) => {
  return new Intl.DateTimeFormat("en-us", {
    year: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
};
export function calcMintes(value) {
  const estimatedTimes = new Date().getMinutes();
  const estimatedTime = new Date(value).getMinutes();
  return estimatedTimes - estimatedTime;
}
