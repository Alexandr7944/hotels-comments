import Form from "./Form";
import CommentElement from "./CommentElement";

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
      const commentElement = new CommentElement(item).createElement();
      output.prepend(commentElement);
      this.listenerBtn(commentElement, item);
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
}

export default RenderItem;
