const getFormatedLastmodDate = (date: Date): string => {
  const year = date.getUTCFullYear();
  const month = `0${date.getUTCMonth() + 1}`.slice(-2);
  const day = `0${date.getUTCDate()}`.slice(-2);
  const hours = `0${date.getUTCHours()}`.slice(-2);
  const minutes = `0${date.getUTCMinutes()}`.slice(-2);
  const seconds = `0${date.getUTCSeconds()}`.slice(-2);

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+09:00`;
}

export default getFormatedLastmodDate;