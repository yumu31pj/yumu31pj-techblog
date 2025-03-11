const getDatesOfCalendar = (year?: number, month?: number) => {
  let targetYear: number;
  let targetMonth: number;

  const date = new Date();
  if (!year) {
    // yearがnull, undefinedの時は現在の年をセット
    targetYear = date.getFullYear()
  } else {
    targetYear = year;
  }

  if (!month) {
    // monthがnull, undefinedの時は現在の月をセット
    targetMonth = date.getMonth()
  } else {
    targetMonth = month;
  }

  // 月末日を取得(引数に0をつけると前月最終日が取れる)
  const lastday = new Date(targetYear, targetMonth + 1 ,0).getDate();

  // 月の1日の曜日を取得
  // [0:'sun',1:'mon',2:'tue',3:'wed',4:'thu',5:'fri',6:'sat']
  const monthFirstDate = new Date(targetYear, targetMonth, 1).getDay();

  // 指定月の月末日までの日付の配列を作成
  const dateRange = Array.from(Array(lastday).keys(), x => x + 1);

  let monthList = [];
  let weekList = [];

  // 1日の曜日まで空白を追加
  for (let i = 0; i < monthFirstDate; i++) {
    weekList.push(null);
  }

  for (let day of dateRange) {
    weekList.push(day);
    if (weekList.length === 7) {
      // 土曜日まで埋まったらweekListをmonthListに追加して
      // weekListを初期化
      monthList.push(weekList);
      weekList = [];
    }
  }

  // dateRange(月末）終了後、
  // 末尾が7で割り切れなかったらweekListに空白を追加
  while (weekList.length < 7 && weekList.length > 0) {
    weekList.push(null);
  }

  // 最後の週を追加
  if (weekList.length > 0) {
    monthList.push(weekList);
  }

  return monthList;
}

export default getDatesOfCalendar;