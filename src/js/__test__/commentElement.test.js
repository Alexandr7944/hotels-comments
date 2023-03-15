import CommentElement from "../CommentElement";

test("class CommentElement.calcDay(today)", () => {
  const day = new CommentElement().calcDay(new Date());
  expect(day).toBe("Сегодня");
});

test("class CommentElement.calcDay(tomorrow)", () => {
  const day = new CommentElement().calcDay(new Date(new Date() + 86400000));
  expect(day).toBe("Сегодня");
});

test("class CommentElement.calcDay(yesterday)", () => {
  const day = new CommentElement().calcDay(new Date(new Date() - 86400000));
  expect(day).toBe("Вчера");
});

test("class CommentElement.calcDay(date)", () => {
  const day = new CommentElement().calcDay(new Date("2023-02-07 03:15"));
  expect(day).toBe("07.02.2023");
});
