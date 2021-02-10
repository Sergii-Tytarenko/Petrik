/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

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
      button = document.querySelector('button');


promoBlock.forEach(el => {
    el.remove();
});
genre.textContent = 'Драма';
promoImage.style.backgroundImage = "url('img/bg.jpg')";


/* Added film in list
---------------------------------------------------------------*/
const btn = document.querySelector('button'),
      input = document.querySelector('.adding__input');
     
     
btn.addEventListener('click', (e) => {
    e.preventDefault();

    let newFilm = input.value;
    if (newFilm && newFilm != 0) {
        if (newFilm.length > 21) {
            newFilm = newFilm.substr(0, 21);
            newFilm += '...';
        }
        movieDB.movies.push(newFilm);
        addNew();
        input.value = '';
    }
});


/* Films
---------------------------------------------------------------*/
function addNew () {
    let  filmsList = movieDB.movies.sort(),
         filmsItem = document.querySelectorAll('.promo__interactive-item'),
         star = document.querySelector('input[type="checkbox"]:checked');

    for (let i = 0; i < filmsList.length; i++) {
        if (filmsItem[i] == undefined) {
            let newItem = document.createElement('li');
            newItem.classList.add('promo__interactive-item');
            filmsContaienr.append(newItem);
            if (star) {
                newItem.innerHTML = `<span></span>${i + 1}. ${filmsList[i]}<div class="delete"></div>`;
            } else {
                newItem.innerHTML = `${i + 1}. ${filmsList[i]}<div class="delete"></div>`;
            }
            continue;
        } else {
            filmsItem[i].innerHTML = `${i + 1}. ${filmsList[i]}<div class="delete"></div>`;
        }
    }

    const removeBtns = document.querySelectorAll('.delete');

    removeBtns.forEach(item => {
        item.addEventListener('click', () => {
            let num = item.parentElement.textContent[0];
            --num;
            movieDB.movies.splice(num, 1);
            item.parentElement.remove();
        });
    });
}

addNew();


