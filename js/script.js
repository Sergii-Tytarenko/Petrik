/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Грешник",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
    ]
};

const promoBlock = document.querySelectorAll('.promo__adv img'),
      promoImage = document.querySelector('.promo__bg'),
      genre = promoImage.querySelector('.promo__genre'),
      filmsContaienr = document.querySelector('.promo__interactive-list'),
      filmsItem = filmsContaienr.querySelectorAll('.promo__interactive-item');


promoBlock.forEach(el => {
    el.remove();
})
genre.textContent = 'Драма';
promoImage.style.backgroundImage = "url('img/bg.jpg')";


/* Films
---------------------------------------------------------------*/
let  filmsList = movieDB.movies.sort();

for (let i = 0; i < filmsList.length; i++) {

    if (filmsItem[i] == undefined) {
        let newItem = document.createElement('li');
        newItem.classList.add('promo__interactive-item');
        filmsContaienr.append(newItem);
        newItem.textContent = `${i + 1}. ${filmsList[i]}`;
        continue;
    } else {
        filmsItem[i].textContent = `${i + 1}. ${filmsList[i]}`;
    }
}
