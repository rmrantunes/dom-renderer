import Elements from "../Elements.js";
const { p } = Elements;

const MainParagraph = p.create(
  "Meu peixe",
  {
    class: "meu-paragrafo blue",
  },
  {
    color: "blue",
    fontSize: "1.25rem",
  },
  [
    {
      type: "click",
      callback() {
        this.style.color = "green";
      },
    },
  ],
);

export default MainParagraph;
