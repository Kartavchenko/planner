import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs, { Dayjs } from "dayjs";

interface DatePropsTypes {
  editValue: string;
  onChange: (value: Dayjs | null) => void;
  errors?: object;
}

export default function CustomTimePicker({
  onChange,
  editValue,
  errors,
}: DatePropsTypes) {
  const handleTimePicked = (pickerEvent: Dayjs | null) => {
    onChange(pickerEvent);
  };

  const editValueOfTime = editValue ? dayjs(editValue) : null;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        className={errors ? "input error" : "input"}
        sx={{ marginTop: "8px" }}
        value={editValueOfTime}
        onChange={(editTime) => handleTimePicked(editTime)}
      />
    </LocalizationProvider>
  );
}
