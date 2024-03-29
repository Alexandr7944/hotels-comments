import Comment from "../Comment";

test("class Comment", () => {
  const comment = new Comment(
    "Витя",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat sequi placeat dolorem aut obcaecati animi praesentium error accusamus nihil quas, voluptatem illo voluptatibus eligendi ea adipisci nobis, nostrum culpa nisi. Placeat asperiores, quod ullam quae provident repellendus sit cum earum necessitatibus, voluptate corporis aut.",
    new Date("2023-02-07 03:15"),
    true
  );

  expect(comment.name).toBe("Витя");
});
