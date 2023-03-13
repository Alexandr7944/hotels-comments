class Comment {
  constructor(name, comment, date, like = false) {
    this.name = name[0].toUpperCase() + name.slice(1);
    this.comment = comment;
    this.date = date;
    this.like = like;
    this.id = this.calcID();
  }

  calcID() {
    return Math.ceil(Math.random() * 999999);
  }
}

export default Comment;
