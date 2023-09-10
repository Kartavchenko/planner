import { useNavigate, useParams } from "react-router-dom";
import { Obj, useMyEvents } from "./MainPage";
import DetailsEvent from "../Components/DetailsEvent/DetailsEvent";
import { editEvent, removeEvent } from "../localStorage/localStorage";
import Notiflix from "../notiflix";

export default function DetailsEventPage() {
  const { events } = useMyEvents();

  const { id } = useParams();

  const navigate = useNavigate();

  const findEvent = events?.find((item) => item.id === id) as Obj;

  const editEvt = () => {
    try {
      editEvent("events", "edit-event", id!);
      navigate(`/${id}/edit-event`);
    } catch (error) {
      Notiflix.Report.failure("Error", "Something went wrong", "Okay");
      console.error(error);
    }
  };

  const removeEvt = () => {
    try {
      removeEvent("events", id!);
      Notiflix.Report.success("Deleted", "Your event was deleted", "Okay");
      navigate("/");
    } catch (error) {
      Notiflix.Report.failure("Error", "Something went wrong", "Okay");
      console.error(error);
    }
  };

  return (
    <DetailsEvent
      currentEvent={findEvent}
      editEvt={editEvt}
      removeEvt={removeEvt}
    />
  );
}
