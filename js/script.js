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

if (personalMovieDB.count < 10) {
	console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
	console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
	console.log('Вы киноман');
} else {
	console.log('Error');
};


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
console.log(personalMovieDB);

/* if (lastFilm.length <= 0) {

} else if (lastFilm.length > 50) {

} */