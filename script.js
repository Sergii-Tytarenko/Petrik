"use strict";

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        for (let i = 1; i >= 1; i++) {
            let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
            if (!numberOfFilms) {
                alert('Попробуйте еще раз');
                continue;
            } else {
                personalMovieDB.count = numberOfFilms;
                break;
            }
        }
    },

    rememberMyFilms: function  () {
        for (let i = 0; i < 2;) {
            let lastMovie = prompt('Один из последних просмотренных фильмов ?', '');
            let movieRating = +prompt('На сколько оцените его по дисятибальной шкале ?', '');
            
            if (lastMovie == 0 || !movieRating) {
                alert('Попробуйте еще раз');
                continue;
            } else if (lastMovie.length > 50) {
                alert('Название фильма не должно быть больше 50-ти символов')
                continue;
            } else {
                personalMovieDB.movies[lastMovie] = movieRating;
                i++;
                continue;
            }  
        }
    },

    personalLevel: function () {
        if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >=10 && personalMovieDB.count <= 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            alert('ВЫ киноман !');
        } else {
            alert('Произошла ошибка !');
        }      
    },

    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function () {
        if (this.privat) {
            this.privat = false;
        } else {
            this.privat = true;
        }
    },

    writeYourGenres:  function () {
        let num = 1;

        for (let i = 0; i < 3; i++) {
            let genres = prompt(`Ваш любимый жанр под номером ${num++}`, '');
            
            if (!genres) {
                i--;
                num--;
                continue;
            } else {
                personalMovieDB.genres[i] = genres;
            }
        }

        this.genres.forEach(function (el, i) {
            console.log(`Любимый жанр #${++i} - это ${el}`);
        })
    },
}

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.personalLevel();
// personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB(personalMovieDB.privat);



/*1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/