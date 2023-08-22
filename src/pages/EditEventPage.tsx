import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormEvent from "../Components/FormEvent/FormEvent";
import { Obj } from "./MainPage";
import { getEvents } from "../localStorage";

export default function EditEventPage() {
  const [editorshipEvent, setEditorshipEvent] = useState<Obj>();

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const fetchEditEvent = (await getEvents("edit-event")) as Obj;

        if (!fetchEditEvent) {
          navigate(`/${id}`);
        }

        setEditorshipEvent(fetchEditEvent);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [navigate, id]);

  return <FormEvent eventId={id} editorshipEvent={editorshipEvent} />;
}
