import Render from "./RenderItem";
import Comment from "./Comment";

class Form {
  constructor(cache) {
    this.cache = cache;
    this.listenerForm();
  }

  listenerForm() {
    const form = document.forms[0];
    form.addEventListener("submit", (e) => this.formSubmit(e));
    form.addEventListener("keydown", (e) => {
      if (e.key == "Enter") this.formSubmit(e);
    });
  }

  formSubmit(e) {
    e.preventDefault();

    const form = document.forms[0];
    const comment = form.querySelector(".input__comment");
    const name = form.querySelector(".input__name");

    if (this.validInputData(name)) return;
    if (this.validInputData(comment)) return;

    let date = form.querySelector(".input__date").value;
    date = new Date(
      `${date
        .split(".")
        .reverse()
        .join("-")} ${new Date().toLocaleTimeString()}`
    );

    this.cache.push(new Comment(name.value.trim(), comment.value.trim(), date));

    const render = new Render(this.cache);
    render.addItem();
    form.reset();
  }

  showWarning(elem, text) {
    document.querySelector(".warning")?.remove();
    const warning = document.createElement("div");
    warning.className = "warning";
    warning.innerHTML = `<span>${text}</span>`;
    elem.parentElement.append(warning);
    elem.addEventListener("input", () => warning.remove(), { once: true });
  }

  validInputData(row) {
    if (row.classList.contains("input__name") && !row.value.trim()) {
      this.showWarning(row, "Введите имя");
      return true;
    }
    if (
      row.classList.contains("input__name") &&
      /^[0-9]/.test(row.value.trim())
    ) {
      this.showWarning(row, "Имя не может начинаться с цифры");
      return true;
    }
    if (row.classList.contains("input__comment") && !row.value.trim()) {
      this.showWarning(row, "Оставьте комментарий");
      return true;
    }
    return false;
  }
}

export default Form;
