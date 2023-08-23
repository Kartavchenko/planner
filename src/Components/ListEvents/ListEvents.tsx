import { NavLink } from "react-router-dom";
import { useMyEvents } from "../../pages/MainPage";
import BtnCreateEvent from "../BtnCreateEvent/BtnCreateEvent";
import ImgElement from "../ImgElement/ImgElement";

export default function ListEvents() {
  const { events } = useMyEvents();

  return (
    <div>
      <div className="box-title">
        <BtnCreateEvent />
        <h2 className="list-title">My events</h2>
      </div>
      {events?.length ? (
        <ul className="list-card">
          {events?.map(
            ({
              id,
              title,
              description,
              date,
              time,
              location,
              category,
              priority,
            }) => (
              <li className="card" key={id}>
                <ul>
                  <li>
                    <ImgElement
                      styleClass="card-img"
                      eventCategory={category}
                    />
                  </li>
                  <li className="item-card__params">
                    <p className="text-params">{category}</p>
                    <p className="text-params">{priority}</p>
                  </li>
                  <li className="item-card__slider">
                    <ul className="item-card__list">
                      <li className="card-data">
                        <p className="text-data">{date}</p>
                        <span className="text-data">at</span>
                        <p className="text-data">{time}</p>
                        <p className="text-data">{location}</p>
                      </li>
                      <li className="item-card__description">
                        <p className="card-title">{title}</p>
                        <p className="card-description">{description}</p>
                        <NavLink className="card-info" to={`${id}`}>
                          More info
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            )
          )}
        </ul>
      ) : (
        <div className="card-text-undefind">
          <p>Oops... have not event</p>
        </div>
      )}
    </div>
  );
}
