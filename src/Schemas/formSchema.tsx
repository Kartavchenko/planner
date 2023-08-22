import { object, string } from "yup";

export const formSchema = object({
  title: string()
    .trim()
    .required("Title is required")
    .matches(/^(?!.*([A-Za-z])\1{3,})[A-Za-zА-Яа-я0-9\s]+$/, "Invalid input")
    .min(3)
    .max(30),
  description: string()
    .trim()
    .required("Description is required")
    .matches(
      /^(?!.*([A-Z])\1{3,})[A-Za-z\s\-,.!?@#$%^&*()\\'\\^]+$/,
      "Invalid input"
    )
    .min(5)
    .max(200),
  date: string().required("Date is required"),
  time: string().required("Time is required"),
  location: string()
    .trim()
    .required("Location is required")
    .matches(/^(?!.*([A-Za-z])\1{3,})[A-Za-zА-Яа-я\s]+$/, "Invalid input"),
  category: string()
    .required("Category is required")
    .matches(/(Art|Music|Business|Conference|Workshop|Party|Sport)/),
  picture: string().trim(),
  priority: string()
    .trim()
    .required("Priority is required")
    .matches(/(High|Medium|Low)/),
});
