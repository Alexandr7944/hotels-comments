function addOption(element) {
  for (let i = 0; i < 10; i++) {
    const dateNow = new Date();
    const valueDate = new Date(
      dateNow - 24 * 60 * 60 * 1000 * i
    ).toLocaleDateString();

    element.insertAdjacentHTML(
      "beforeend",
      `
    <option value="${valueDate}" class="input__date_item">${valueDate}</option>
    `
    );
  }
}

export default addOption;
