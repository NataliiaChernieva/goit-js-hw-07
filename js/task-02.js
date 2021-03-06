const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// Напиши скрипт, который для каждого элемента
// массива ingredients создаст отдельный li, после чего
// вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingredientsEl = document.querySelector("#ingredients");

const createList = ingredients.forEach((ingredient) => {
    const newLiEl = document.createElement("li");
    newLiEl.textContent = ingredient;
    
    ingredientsEl.append(newLiEl);
});

