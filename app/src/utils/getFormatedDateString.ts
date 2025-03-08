export const getFormatedDateString = (date: Date | string, format?: string): string => {
  // Convert to a Date object if it's a string
  if (typeof date === 'string') {
    date = new Date(date);
  }

  // Check if it is a Date object
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new TypeError("The provided value is not a valid Date object");
  }

  const year = date.getFullYear();
  let month = (date.getMonth() + 1).toString();
  let day = date.getDate().toString();

  if (format === "yyyymmdd") {
    month = month.padStart(2, '0');
    day = day.padStart(2, '0');
  }

  return `${year}.${month}.${day}`;
}