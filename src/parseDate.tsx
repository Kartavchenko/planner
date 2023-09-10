import dayjs from "dayjs";

export const dateFormat = (date: string) => dayjs(date).format("DD/MM/YYYY");

export const timeFormat = (date: string) => dayjs(date).format("hh:mm a");
