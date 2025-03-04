import moment from "moment-jalaali";

export function convertToPersianDate(date: Date): string {
  return moment(date).format("jYYYY/jMM/jDD");
}
