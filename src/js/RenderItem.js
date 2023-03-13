class RenderItem {
  constructor(cache) {
    this.cache = cache;
  }

  addItem() {
    const output = document.querySelector(".output");
    while (output.firstChild) output.firstChild.remove();
    this.filterCache();
    this.cache.forEach((item) => {
      let date = this.calcDay(item.date);
      const time = item.date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      const outputRow = document.createElement("div");
      outputRow.className = "output__row";
      outputRow.innerHTML = `
        <div class="output__title">
          <span class="output__name">${item.name}</span>
          <span class="output__date">${date}</span>
          <span class="output__time">, ${time}</span>
        </div>
        <div class="output__comment">
          <p>${item.comment}</p>
        </div>
        <div class="output__btn">
          <button class="output__remove">Удалить</button>
        </div>`;
      output.prepend(outputRow);
      this.listenerBtn(outputRow, item);
    });
  }

  listenerBtn(row, item) {
    const btnRemove = row.querySelector(".output__btn");
    btnRemove.addEventListener("click", () => {
      this.cache = this.cache.filter((row) => row.id !== item.id);
      this.addItem();
    });
  }

  calcDay(date) {
    const dateComment = date.toLocaleDateString();
    const today = new Date().toLocaleDateString();
    const yesterday = new Date(Date.now() - 86400000).toLocaleDateString();
    if (dateComment === today) {
      return "Сегодня";
    } else if (dateComment === yesterday) {
      return "Вчера";
    }
    return dateComment;
  }

  filterCache() {
    this.cache.sort((a, b) => a.date - b.date);
  }
}

export default RenderItem;
