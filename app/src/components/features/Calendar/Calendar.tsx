import getDatesOfCalendar from "~/src/utils/getDatesOfCalendar";
import styles from "./Calendar.module.scss";

export type CalendarProps = {
  year?: number;
  month?: number;
}

const Calendar = (props: CalendarProps) => {
  const {year, month} = props;

  const date = new Date();

  const targetYear = year ? year : date.getFullYear();
  const targetMonth = month ? month : date.getMonth();

  const calendar = getDatesOfCalendar(targetYear, targetMonth);
  
  return (
    <>
      {calendar && (
        <>
          <div className={styles['calendar-title']}>{targetYear}.{targetMonth}</div>
          <table className={styles["calendar"]}>
            <thead>
              <tr>
                <th className={styles['sun']}>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th className={styles['sat']}>Sat</th>
              </tr>
            </thead>
            <tbody>
              {calendar.map((weeks, weekKey) => (
                <tr key={weekKey}>
                  {weeks.map((day, index) => (
                    <td
                      key={index}
                      className={`${index == 0 && styles['sun']} ${index == 6 && styles['sat']}`}
                    >
                      {day}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  )
}

export default Calendar;