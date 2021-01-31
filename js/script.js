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
        "ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
    ]
};


/* Remove Blcok
---------------------------------------------------------------*/
const promoBlock = document.querySelector('.promo__adv');
promoBlock.remove();


/* Change genre
---------------------------------------------------------------*/
const genre = document.querySelector('.promo__genre');
genre.textContent = 'Драма';


/* Image
---------------------------------------------------------------*/
const promoImage = document.querySelector('.promo__bg');
promoImage.style.backgroundImage = "url('../img/bg.jpg')";


/* Films
---------------------------------------------------------------*/
const filmsContaienr = document.querySelector('.promo__interactive-list');
const filmsItem = document.querySelectorAll('.promo__interactive-item');


let films = movieDB.movies.slice();
for(let i = 0; i < films.length; i++) {
    films[i] = films[i].toLowerCase();
}
const  filmsList = films.sort();

for (let i = 0; i < filmsList.length; i++) {
    let film = filmsItem[i];

    if (film === undefined) {
        let newItem = document.createElement('li');
        newItem.classList.add('promo__interactive-item');
        filmsContaienr.append(newItem);
        newItem.textContent = `${i + 1}. ${filmsList[i]}`;
        continue;
    } else {
        film.textContent = `${i + 1}. ${filmsList[i]}`;
    }
}
