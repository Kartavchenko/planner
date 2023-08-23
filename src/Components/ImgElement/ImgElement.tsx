import art from "../../images/art.jpg";
import business from "../../images/business.jpg";
import conference from "../../images/conference.jpg";
import music from "../../images/music.jpg";
import party from "../../images/party.jpg";
import sport from "../../images/sport.jpg";
import workshop from "../../images/workshop.jpg";
import defaultPicture from "../../images/default-img-small.jpg";

interface EventProp {
  eventCategory: string;
  styleClass: string;
}

export default function ImgElement({ styleClass, eventCategory }: EventProp) {
  let imageType = defaultPicture;

  switch (eventCategory) {
    case "Art":
      imageType = art;
      break;
    case "Business":
      imageType = business;
      break;
    case "Conference":
      imageType = conference;
      break;
    case "Music":
      imageType = music;
      break;
    case "Party":
      imageType = party;
      break;
    case "Sport":
      imageType = sport;
      break;
    case "Workshop":
      imageType = workshop;
      break;
    default:
      break;
  }

  return (
    <img
      className={styleClass}
      loading="lazy"
      src={imageType}
      alt={`picture ${imageType} card background for a event planner`}
    />
  );
}
