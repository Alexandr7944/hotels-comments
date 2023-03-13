class Comment {
  constructor(name, comment, date, like = false) {
    this.name = name;
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
