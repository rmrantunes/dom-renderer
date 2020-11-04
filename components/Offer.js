import CreateElement from "../CreateElement.js";
import Elements from "../Elements.js";
const { span } = Elements;
const Offer = span.create("conteudo da oferta", {});

span.setInlineStyle(Offer, {
  color: "green",
  fontSize: "1.5rem",
});

export default Offer;
