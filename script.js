"use strict";

let numberOfFilms;

function start () {
    for (let i = 1; i >= 1; i++) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        if (!numberOfFilms) {
            alert('Попробуйте еще раз');
            continue;
        } else {
            break;
        }
    }
}

// start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

function rememberMyFilms () {
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
}

// rememberMyFilms ();

function personalLevel () {
    if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >=10 && personalMovieDB.count <= 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        alert('ВЫ киноман !');
    } else {
        alert('Произошла ошибка !');
    }      
}

// personalLevel ();

function showMyDB() {
    let a = personalMovieDB.privat;
    
    if (!a) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres () {
    let num = 1;

    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${num++}`, '');
       
    }
}

// writeYourGenres ();
// showMyDB ();
