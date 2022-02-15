'use strict';
const numberOfFilms = +prompt(`Сколько фильмов вы уже посмотрели?`,``);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastMovie = prompt(`Один из последних просмотренных фильмов?`,``);
const yourMovieScore = prompt(`На сколько оцените его?`);

personalMovieDB.movies[lastMovie] = yourMovieScore;

console.log(personalMovieDB);