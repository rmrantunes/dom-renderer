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
    if (typeof content === "string") {
      this._element.innerHTML = content;
    } else {
      content.forEach((item) => {
        if (Object.prototype.toString.call(item).includes("Array")) {
          item.forEach((subitem) => {
            this._element.appendChild(subitem());
          });
        } else {
          this._element.appendChild(item());
        }
      });
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
      if (!styleTag.innerText.includes(classes))
        styleTag.innerHTML += classes;
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

// setCSS(classes) {
//   classes
//     .split(" {")
//     .map((item) => item.trim())
//     .filter((item) => {
//       return item.startsWith(".") || item.startsWith("#");
//     })
//     .map((item) => {
//       return item.replace(".", "") || item.replace("#", "");
//     })
//     .forEach((item) => {
//       this._element.classList.add(item);
//     });
//   const styleTag = document.querySelector("style");
//   if (!styleTag) {
//     const styleTag = document.createElement("style");
//     styleTag.innerHTML += classes;
//     document.querySelector("head").appendChild(styleTag);
//     return;
//   }
//   styleTag.innerHTML += classes;
// }

// classes
// .split(".")
// .map((item) => {
//   return item.trim();
// })
// .filter((item) => {
//   console.log(item);
//   return item.startsWith(".") || item.startsWith("#");
// })
// .map((item) => {
//   return item.replace(".", "") || item.replace("#", "");
// })
// .forEach((item) => {
//   this._element.classList.add(item);
// });
