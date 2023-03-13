import addOption from "./addOption";
import Comment from "./Comment";
import Form from "./Form";
import RenderItem from "./RenderItem";

addOption(document.querySelector(".input__date"));
const cache = [];
cache.push(
  new Comment(
    "Витя",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat sequi placeat dolorem aut obcaecati animi praesentium error accusamus nihil quas, voluptatem illo voluptatibus eligendi ea adipisci nobis, nostrum culpa nisi. Placeat asperiores, quod ullam quae provident repellendus sit cum earum necessitatibus, voluptate corporis aut.",
    new Date("2023-03-07 03:15")
  )
);

cache.push(
  new Comment(
    "Коля",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat sequi placeat dolorem aut obcaecati animi praesentium error accusamus nihil quas, voluptatem illo voluptatibus eligendi ea adipisci nobis, nostrum culpa nisi.",
    new Date("2023-03-06 13:15")
  )
);

cache.push(
  new Comment(
    "Оля",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat sequi placeat dolorem aut obcaecati animi praesentium error accusamus nihil quas, voluptatem illo voluptatibus eligendi ea adipisci nobis, nostrum culpa nisi. Placeat asperiores, quod ullam quae provident repellendus sit cum earum necessitatibus, voluptate corporis aut. Animi labore quibusdam impedit ipsa sapiente!",
    new Date("2023-03-01 15:15")
  )
);

const renderItem = new RenderItem(cache);
const form = new Form(cache);
renderItem.addItem();
