export default class CreateElement {
  constructor(tag) {
    this.tag = tag;
  }

  create(content, attributes, classes, eventsArray, inlineStyle) {
    this._element = document.createElement(this.tag);

    this.setInnerHTML(content);

    attributes && this.setAttributes(attributes);

    this.setCSS(classes);

    this.setEvents(eventsArray);

    this.setInlineStyle(this._element, inlineStyle);
    return this._element;
  }

  setInnerHTML(content) {
    const typeOfContent = (type) =>
      Object.prototype.toString.call(content).includes(type);
    if (typeOfContent("String")) {
      this._element.innerHTML = content;
    } else if (typeOfContent("Array")) {
      const newContent = [].concat(...content);
      newContent.forEach((item) => {
        this._element.appendChild(item());
      });
    } else {
      throw new Error("Content is not a 'String' nor an 'Array'");
    }
  }

  setAttributes(attributes) {
    const keys = Object.keys(attributes);
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
  setCSS(classes) {
    if (classes) {
      const styleTag = document.querySelector("style");
      if (!styleTag) {
        const styleTag = document.createElement("style");
        styleTag.innerHTML += classes;
        document.querySelector("head").appendChild(styleTag);
        return;
      }
      if (!styleTag.innerText.includes(classes)) styleTag.innerHTML += classes;
    }
  }
}
