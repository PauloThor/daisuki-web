import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
import utc from "dayjs/plugin/utc";
import "dayjs/locale/pt-br";

dayjs.extend(updateLocale);
dayjs.updateLocale("pt-br", {
  relativeTime: {
    future: "Em %s",
    past: "%s atrás",
    s: "%d segundos",
    m: "1 minuto",
    mm: "%d minutos",
    h: "1 hora",
    hh: "%d horas",
    d: "1 dia",
    dd: "%d dias",
    M: "1 mês",
    MM: "%d meses",
    y: "1 ano",
    yy: "%d anos",
  },
});

class DateUtils {
  static timeFromNow = (date?: string) => {
    dayjs.extend(relativeTime);
    dayjs.locale("pt-br");
    const timeDiff = dayjs(date).fromNow();
    return timeDiff;
  };

  static getDateTime = () => {
    dayjs.extend(utc);
    const day = dayjs();
    return day.utc().format();
  };

  static StringToDate = (date?: string) => {
    return dayjs(date).format("DD/MM/YYYY");
  };
}

export default DateUtils;
