'use strict';


let numberOfFilms;


function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	};
};
start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};


function rememberMyFilms() {
	const howManyFilms = 2;
	for (let i = 0; i < howManyFilms; i++) {
		const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
	  	  rating = prompt('На сколько оцените его?', '');
		if (lastFilm != null && rating != null && 50 >= lastFilm.length > 0 && 50 >= rating.length > 0) {
			personalMovieDB.movies[lastFilm] = rating;
			console.log('Done');
		} else {
			console.log('Error');
			i--;
		}
	
	};
};
rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Просмотрено довольно мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
		console.log('Вы классический зритель');
	} else if (personalMovieDB.count > 30) {
		console.log('Вы киноман');
	} else {
		console.log('Error');
	};
};
detectPersonalLevel();


function writeYourGenres() {
	for(let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
	}
};
writeYourGenres();



function showMyDB(hidden) {
	if(!hidden) {
		console.log(personalMovieDB);
	} else {
		console.log('База данных является приватной и не может быть передана в консоль');
	};
};
showMyDB(personalMovieDB.privat);



