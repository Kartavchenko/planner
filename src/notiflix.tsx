import Notiflix from "notiflix";

Notiflix.Report.init({
  backOverlayClickToClose: true,
  fontFamily: "inherit",
  success: {
    svgColor: "#7b61ff",
    titleColor: "#3f3f3f",
    messageColor: "#3f3f3f",
    buttonBackground: "#7b61ff",
    buttonColor: "#ffffff",
  },
});

export default Notiflix;
