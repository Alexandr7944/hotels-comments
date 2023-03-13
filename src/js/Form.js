import Render from "./RenderItem";
import Comment from "./Comment";

class Form {
  constructor(cache) {
    this.cache = cache;
    this.listenerForm();
  }

  listenerForm() {
    const form = document.forms[0];
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let name = form.querySelector(".input__name").value;
      let comment = form.querySelector(".input__comment").value;
      let date = form.querySelector(".input__date").value;
      date = new Date(
        `${date
          .split(".")
          .reverse()
          .join("-")} ${new Date().toLocaleTimeString()}`
      );
      this.cache.push(new Comment(name, comment, date));
      const render = new Render(this.cache);
      render.addItem();
      this.resetForm(form);
    });
  }

  resetForm(form) {
    form.querySelector(".input__name").value = "";
    form.querySelector(".input__comment").value = "";
    form.querySelector(".input__date").value = new Date().toLocaleDateString();
  }
}

export default Form;
