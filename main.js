import CreateElement from "./CreateElement.js";
import CarSection from "./components-tests/CarSection.js";
import Buttons from "./components-tests/AnotherSection.js";

document.body.appendChild(CarSection());
Buttons.forEach((button) => {
  document.body.appendChild(button());
});
