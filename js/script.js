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
      btn = document.querySelector('button'),
      input = document.querySelector('.adding__input'),
      data = movieDB.movies;


const removeBlocks = (blocks) => {
    blocks.forEach(el => {
        el.remove();
    });
}

const changeContent = () => {
    genre.textContent = 'Драма';
    promoImage.style.backgroundImage = "url('img/bg.jpg')";
}


/* Added film in list
---------------------------------------------------------------*/  
const addNewFilm = (array) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
    
        let newFilm = input.value,
            star = document.querySelector('input[type="checkbox"]:checked');
    
        if (newFilm && newFilm != 0) {
            if (newFilm.length > 21) {
                newFilm = newFilm.substr(0, 21) + '...';
            }
            if (star) {
                console.log("Добавляем любимый фильм");
            }
            array.push(newFilm);
            createList(array, filmsContaienr);
            input.value = '';
        }
    });
}


/* Create list function
---------------------------------------------------------------*/
function createList (array, container) {
    let movieList = [];

    array.forEach((el, i) => {
        movieList[i] = el.toLowerCase();
    });
    movieList.sort();
    container.innerHTML = "";

    for (let i = 0; i < movieList.length; i++) {
        container.insertAdjacentHTML("beforeend",
       `<li class="promo__interactive-item">${i + 1}. ${movieList[i]}
            <div class="delete"></div>
        </li>`);
    }

    const removeBtns = document.querySelectorAll('.delete');
    removeBtns.forEach( (item, i) => {
        item.addEventListener('click', () => {
            array.splice(i, 1);
            item.parentElement.remove();
            createList(data, filmsContaienr);
        });
    });
}

removeBlocks(promoBlock);
changeContent();
addNewFilm(data)
createList(data, filmsContaienr);
