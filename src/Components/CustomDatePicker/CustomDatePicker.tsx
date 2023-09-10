import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

interface DatePropsTypes {
  editValue: string;
  onChange: (value: Dayjs | null) => void;
  errors?: object;
}

export default function CustomDatePicker({
  onChange,
  editValue,
  errors,
}: DatePropsTypes) {
  const handleDatePicked = (pickerEvent: Dayjs | null) => {
    onChange(pickerEvent);
  };

  const editValueOfDate = editValue ? dayjs(editValue) : null;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        sx={{ marginTop: "8px" }}
        className={errors ? "input error" : "input"}
        format="DD/MM/YYYY"
        minDate={dayjs(Date.now())}
        value={editValueOfDate}
        onChange={(editDate) => handleDatePicked(editDate)}
      />
    </LocalizationProvider>
  );
}
