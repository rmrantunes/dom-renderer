import Elements from "../Elements.js";
const { button } = Elements;

const content = "Incremento";

const props = {
  id: "add",
};

let i = 0;
const events = [
  {
    type: "click",
    callback() {
      i++;
      this.innerHTML = `Incremento ${i}`;
    },
  },
];

const style = {
  padding: "1rem 1.5rem",
  fontSize: "1.25rem",
  color: "black",
  cursor: "pointer",
  backgroundColor: "#FB4",
};

const incrementButton = button.create(content, props, style, events);

export default incrementButton;
