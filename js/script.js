'use strict';


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
alert(`Вы посмотрели ${numberOfFilms} фильмов`);


const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privar: false
};


const lastFilm1 = prompt('Один из последних просмотренных фильмов?', ''),
	  rating1 = prompt('На сколько оцените его?', ''),
	  lastFilm2 = prompt('Один из последних просмотренных фильмов?', ''),
	  rating2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastFilm1] = rating1;
personalMovieDB.movies[lastFilm2] = rating2;
console.log(personalMovieDB);