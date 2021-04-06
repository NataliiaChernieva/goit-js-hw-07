// Напиши скрипт для создания галлереи изображений по массиву данных.
// Используй массив объектов images для создания тегов img вложенных
// в li.Для создания разметки используй шаблонные строки и insertAdjacentHTML().
// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
    },
 
];


const galleryEl = document.querySelector("#gallery");
galleryEl.classList.add("gallery");

//1 способ
// const makeImgGalery = ({ url, alt }) => {
//     const item = document.createElement("li");
//     const img = document.createElement("img");
//     img.classList.add("img");
//     img.setAttribute("src", url);
//     img.setAttribute("alt", alt);
//     item.append(img);
//     galleryEl.append(item);
//     return galleryEl;
// };

// const imgGalery = images.map(makeImgGalery);

//2 способ
// const makeImgGalery =({ url, alt }) => {
//     galleryEl.insertAdjacentHTML('beforeend', `<li><img class="img" src=${url} alt = ${alt}></li>`)
// };

// const newImgGalery = images.map(makeImgGalery);

//3 способ
//  const newImgGalery = images.forEach(({ url, alt }) => {
//     galleryEl.insertAdjacentHTML('beforeend', `<li><img class="img" src=${url} alt = ${alt}></li>`)
//      return galleryEl;
//  });

//4 способ
const makeListItem = images.map(({ url, alt }) => {
  const itemEl = document.createElement("li");
  itemEl.insertAdjacentHTML('afterbegin', `<img class="img" src=${url} alt = ${alt}>`);
  return itemEl;
});

galleryEl.append(...makeListItem);
  
