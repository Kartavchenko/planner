import { Obj } from "../../pages/MainPage";
import { dateFormat, timeFormat } from "../../parseDate";
import ImgElement from "../ImgElement/ImgElement";

export default function DetailsEvent({
  currentEvent,
  editEvt,
  removeEvt,
}: {
  currentEvent: Obj;
  editEvt: () => void;
  removeEvt: () => void;
}) {
  const { title, description, date, time, location, category, priority } =
    currentEvent;

  return (
    <div className="event-box">
      <h2 className="event-title">{title}</h2>
      <ul className="event-list">
        <li className="event-item__img">
          <ImgElement styleClass="event-img" eventCategory={category} />
        </li>
        <li className="event-item__description">
          <ul className="event-list__details">
            <li>
              <p>{description}</p>
            </li>
            <li className="item-details">
              <div className="box-details">
                <p className="details-category">{category}</p>
                <p className="details-priority">{priority}</p>
                <p className="details-location">{location}</p>
              </div>
              <div className="event-box__date">
                <p className="event-date">{dateFormat(date)}</p>
                <span className="event-date">at</span>
                <p className="event-date">{timeFormat(time)}</p>
              </div>
            </li>
            <li className="event-item__btns">
              <button
                className="event-btn__edit"
                type="button"
                onClick={() => editEvt()}
              >
                Edit
              </button>
              <button
                className="event-btn__delete"
                type="button"
                onClick={() => removeEvt()}
              >
                Delete event
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
