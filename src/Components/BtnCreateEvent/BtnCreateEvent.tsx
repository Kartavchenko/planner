import { NavLink } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

export default function BtnCreateEvent() {
  return (
    <div className="create-event">
      <NavLink className="create-event__link" to="/create-event">
        <AiOutlinePlus className="create-event__icon" />
        <p className="create-event__text">Add new event</p>
      </NavLink>
    </div>
  );
}
