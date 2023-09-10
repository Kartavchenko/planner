import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLocation, useNavigate } from "react-router-dom";
import { formSchema } from "../../Schemas/formSchema";
import Select from "../CustomSelect/CustomSelect";
import CustomDatePicker from "../CustomDatePicker/CustomDatePicker";
import CustomTimePicker from "../CustomTimePicker/CustomTimePicker";
import {
  saveEvent,
  removeEvent,
  removeStorageItem,
  saveEditedEvent,
} from "../../localStorage/localStorage";
import Notiflix from "../../notiflix";

interface FormData {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  picture: string | undefined;
  priority: string;
}

interface Props {
  eventId?: string;
  editorshipEvent?: FormData;
}

export default function FormEvent({ eventId, editorshipEvent }: Props) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(formSchema),
    values: editorshipEvent,
  });

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    try {
      if (pathname === "/create-event") {
        saveEvent("events", data);
        Notiflix.Report.success("Success", "Your event was created", "Good");
      }

      if (pathname === `/${eventId}/edit-event`) {
        removeEvent("events", `${eventId}`);
        removeStorageItem("edit-event");

        Notiflix.Report.success(
          "Well done",
          "Event successfully was changed",
          "Cool"
        );

        saveEditedEvent("events", data);
        Notiflix.Report.success("Success", "Your event was edited", "Good");
      }
    } catch (error) {
      Notiflix.Report.failure("Error", "Something went wrong", "Okay");
      console.error(error);
    }

    navigate(-1);
  };

  const priorityOptions = ["High", "Medium", "Low"];

  const categoryOption = [
    "Art",
    "Music",
    "Business",
    "Conference",
    "Workshop",
    "Party",
    "Sport",
  ];

  return (
    <>
      <h2 className="form-title">Create new event</h2>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="box-field">
          <label className="label" htmlFor="title">
            Title
          </label>
          <input
            className={errors.title ? "input error" : "input"}
            type="text"
            id="title"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && (
            <span className="error-msg">{errors.title.message}</span>
          )}
        </div>
        <div className="box-field">
          <label className="label" htmlFor="description">
            Description
          </label>
          <textarea
            className={
              errors.description ? "input__textarea error" : "input__textarea"
            }
            id="description"
            rows={8}
            {...register("description", {
              required: "Description is required",
            })}
          />
          {errors.description && (
            <span className="error-msg">{errors.description.message}</span>
          )}
        </div>
        <div className="box-field">
          <label className="label">
            Date
            <Controller
              name="date"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <CustomDatePicker
                  onChange={(value) => onChange(value)}
                  editValue={value}
                  errors={errors.date}
                />
              )}
            />
          </label>
          {errors.date && (
            <span className="error-msg">{errors.date.message}</span>
          )}
        </div>
        <div className="box-field">
          <label className="label">
            Time
            <Controller
              name="time"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <CustomTimePicker
                  onChange={(value) => onChange(value)}
                  editValue={value}
                  errors={errors.time}
                />
              )}
            />
          </label>
          {errors.time && (
            <span className="error-msg">{errors.time.message}</span>
          )}
        </div>
        <div className="box-field">
          <label className="label" htmlFor="location">
            Location
          </label>
          <input
            className={errors.location ? "input error" : "input"}
            type="text"
            id="location"
            {...register("location", { required: "Location is required" })}
          />
          {errors.location && (
            <span className="error-msg">{errors.location.message}</span>
          )}
        </div>
        <div className="box-field box-field__category">
          <label className="label" htmlFor="category">
            Category
          </label>
          <Controller
            name="category"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <Select
                inputId="category"
                options={categoryOption}
                onChange={(value) => onChange(value)}
                editValue={value}
                errors={errors.category}
              />
            )}
          />
          {errors.category && (
            <span className="error-msg">{errors.category.message}</span>
          )}
        </div>
        <div className="box-field box-field__picture">
          <label className="label picture">Picture</label>
          <input className="input" type="text" id="picture" disabled />
          <input
            className={
              errors.category ? "input__picture error" : "input__picture"
            }
            type="file"
            name="picture"
            id="picture"
            disabled
          />
          {errors.picture && (
            <span className="error-msg">{errors.picture.message}</span>
          )}
        </div>
        <div className="box-field box-field__priority">
          <label className="label" htmlFor="priority">
            Priority
          </label>
          <Controller
            name="priority"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <Select
                inputId="priority"
                options={priorityOptions}
                onChange={(value) => onChange(value)}
                editValue={value}
                errors={errors.priority}
              />
            )}
          />
          {errors.priority && (
            <span className="error-msg">{errors.priority.message}</span>
          )}
        </div>
        <div className="box-field box-field__button">
          <button className="btn-submit" type="submit">
            {pathname === "/create-event" ? "Add event" : "Save"}
          </button>
        </div>
      </form>
    </>
  );
}
