import CreateElement from "../CreateElement.js";
import MainParagraph from "./MainParagraph.js";
import Button from "./Button.js";
import Offer from "./Offer.js";

const section = new CreateElement("section");
const CarSection = section.create([Offer, MainParagraph, Button], {
  class: "main-car textblue",
});

export default CarSection;
