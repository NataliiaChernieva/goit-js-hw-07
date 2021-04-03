//Напиши скрипт, который выполнит следующие операции.

//Посчитает и выведет в консоль количество категорий в ul#categories,
//есть элементов li.item.Получится 'В списке 3 категории.'.

//Для каждого элемента li.item в списке ul#categories, найдет 
//и выведет в консоль текст заголовка элемента(тега h2) и 
//количество элементов в категории(всех вложенных в него элементов li).

//Например для первой категории получится:

//Категория: Животные
//Количество элементов: 4


const categories = document.querySelectorAll(".item");
console.log(`В списке ${categories.length} категории.`);

const categoryItem = categories.forEach((category) => {
    const categoryTitle = category.querySelector("h2");
    //console.log(categoryTitle);
    console.log(`Категория: ${categoryTitle.textContent}`);
    
    const categoryItemList = category.querySelectorAll("ul li");
    //console.log(categoryItemList);
    console.log(`Количество элементов:  ${categoryItemList.length}`);
    
});
    

 
