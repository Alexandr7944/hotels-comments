import Form from "./Form";

class RenderItem extends Form {
  constructor(cache) {
    super(cache);
    this.addItem();
  }

  addItem() {
    const output = document.querySelector(".output");
    while (output.firstChild) output.firstChild.remove();
    this.cache.sort((a, b) => a.date - b.date);
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
          <button class="output__remove">
            <svg width="30px" height="30px" viewBox="0 0 24 24">
              <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13 19H5C3.89543 19 3 18.1046 3 17V7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V12" stroke-width="2" stroke-linecap="round"/>
              <path d="M17 16L19 18M21 20L19 18M19 18L21 16M19 18L17 20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <bitton class="output__like ${
            item.like ? "output__like_active" : ""
          }">
            <svg width="30px" height="30px" viewBox="0 0 24 24">
              <path d="M8 10V20M8 10L4 9.99998V20L8 20M8 10L13.1956 3.93847C13.6886 3.3633 14.4642 3.11604 15.1992 3.29977L15.2467 3.31166C16.5885 3.64711 17.1929 5.21057 16.4258 6.36135L14 9.99998H18.5604C19.8225 9.99998 20.7691 11.1546 20.5216 12.3922L19.3216 18.3922C19.1346 19.3271 18.3138 20 17.3604 20L8 20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>`;
      output.prepend(outputRow);
      this.listenerBtn(outputRow, item);
    });
  }

  listenerBtn(row, item) {
    const btnRemove = row.querySelector(".output__remove");
    btnRemove.addEventListener("click", () => {
      this.cache = this.cache.filter((row) => row.id !== item.id);
      this.addItem();
    });
    const btnLike = row.querySelector(".output__like");
    btnLike.addEventListener("click", () => {
      item.like = !item.like;
      this.addItem();
    });
  }

  // static addCommit(name, comment, date) {
  //   this.cache.push(new Comment(name.value.trim(), comment.value.trim(), date));
  //   this.addItem();
  // }

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
}

export default RenderItem;
