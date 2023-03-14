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
    let date = form.querySelector(".input__date");

    if (this.validInputData(name)) return;
    if (this.validInputData(comment)) return;

    date =
      date.value && new Date(date.value) <= new Date()
        ? new Date(`${date.value} ${new Date().toLocaleTimeString()}`)
        : new Date();

    this.cache.push(new Comment(name.value.trim(), comment.value.trim(), date));

    this.addItem();
    form.reset();
  }

  validInputData(row) {
    if (row.classList.contains("input__name")) {
      if (!row.value.trim()) {
        this.showWarning(row, "Введите имя");
        return true;
      }
      if (/^[0-9]/.test(row.value.trim())) {
        this.showWarning(row, "Имя не может начинаться с цифры");
        return true;
      }
      if (!/^[а-яa-z]/i.test(row.value.trim())) {
        this.showWarning(row, "Имя не может начинаться с знака");
        return true;
      }
    } else if (row.classList.contains("input__comment") && !row.value.trim()) {
      this.showWarning(row, "Оставьте комментарий");
      return true;
    }
    return false;
  }

  showWarning(elem, text) {
    if (document.querySelector(".warning")) {
      document.querySelector(".warning").remove();
    }
    const warning = document.createElement("div");
    warning.className = "warning";
    warning.innerHTML = `<span>${text}</span>`;
    elem.parentElement.append(warning);
    warning.style.top = elem.offsetTop + elem.offsetHeight + 5 + "px";
    elem.addEventListener("input", () => warning.remove(), { once: true });
  }
}

export default Form;
