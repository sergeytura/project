'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt(`Сколько фильмов вы уже посмотрели?`,``);
    while (isNaN(numberOfFilms) || numberOfFilms == null || numberOfFilms == '') {
        numberOfFilms = +prompt(`Сколько фильмов вы уже посмотрели?`,``);
    }
}

start();



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function writeYourGenres () {
    for (let i = 1; i <= 3; i++){
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);       
        personalMovieDB.genres[i-1] = genre;
    }
}

writeYourGenres ();

function rememberMyFilms() {
    for (let i = 1; i < 3; i++) {
        const a = prompt(`Один из последних просмотренных фильмов?`,``);
        const b = prompt(`На сколько оцените его?`);
        if (a != '' && b != '' && b != null && a != null && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
        
    }   
}

rememberMyFilms();

function detectPersonalLevel () {
    if(personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    }else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
        console.log("Вы классический зритель");
    }else if(personalMovieDB.count > 30){
        console.log("Вы киноман!");
    }else{
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB () {
    if(personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

