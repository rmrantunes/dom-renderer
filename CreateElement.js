export default class CreateElement {
  constructor(tag) {
    this.tag = tag;
  }

  create(content, attributes, inlineStyle, eventsArray) {
    this._content = content;
    this._attributes = attributes;

    this._element = document.createElement(this.tag);

    this.setInnerHTML(this._content);

    this._attributes && this.setAttributes(this._attributes);

    this.setInlineStyle(this._element, inlineStyle);

    this.setEvents(eventsArray);
    return this._element;
  }

  setInnerHTML(content) {
    if (typeof content === "string") {
      this._element.innerHTML = content;
    } else {
      content.forEach((item) => {
        this._element.appendChild(item);
      });
    }
  }

  setAttributes(attributes) {
    const keys = Array.from(Object.keys(attributes));
    keys.forEach((key) => {
      const value = attributes[key];
      this._element.setAttribute(key, value);
    });
  }

  setInlineStyle(element, styles) {
    Object.assign(element.style, styles);
  }

  setEvents(eventsArray) {
    if (eventsArray) {
      eventsArray.forEach(({ type, callback }) => {
        this._element.addEventListener(type, callback);
      });
    }
  }
}

// const attributes = {
//   class: "animais to-right",
//   "data-anime": "false",
// };

// const styles = {
//   backgroundColor: "blue",
//   fontSize: "2rem",
//   color: "white",
// };

// const section = new CreateElement("section");
// const div = new CreateElement("div");

// const animaisDiv = div.create("<p>Esse é um parágrafo</p>", attributes);
// div.setInlineStyle(animaisDiv, {
//   backgroundColor: "green",
//   fontSize: "3rem",
//   color: "white",
//   display: "inline-block",
// });

// console.log(animaisDiv);
// const animaisSection = section.create(animaisDiv, attributes);
// document.body.appendChild(animaisSection);
