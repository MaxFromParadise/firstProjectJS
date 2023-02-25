'use strict';

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function() {
		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		};
	},
	rememberMyFilms: function() {
		const howManyFilms = 2;
		for (let i = 0; i < howManyFilms; i++) {
			const lastFilm = prompt('Один из последних просмотренных фильмов?', '').trim(),
				rating = prompt('На сколько оцените его?', '').trim();
			if (lastFilm != null && rating != null && 50 >= lastFilm.length > 0 && 50 >= rating.length > 0) {
				personalMovieDB.movies[lastFilm] = rating;
				console.log('Done');
			} else {
				console.log('Error');
				i--;
			}
		
		};
	},
	detectPersonalLevel: function() {
		if (personalMovieDB.count < 10) {
			console.log('Просмотрено довольно мало фильмов');
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
			console.log('Вы классический зритель');
		} else if (personalMovieDB.count > 30) {
			console.log('Вы киноман');
		} else {
			console.log('Error');
		};
	},
	writeYourGenres: function() {
		for(let i = 1; i <= 3; i++) {
			personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
			while(personalMovieDB.genres[i - 1] === null || personalMovieDB.genres[i - 1] === undefined || personalMovieDB.genres[i - 1] == ''){
				personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
			};
		};
		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Любимый жанр #${i + 1} - это ${item}`);
		});
	},
	showMyDB: function(hidden) {
		if(!hidden) {
			console.log(personalMovieDB);
		} else {
			console.log('База данных является приватной и не может быть передана в консоль');
		};
	},
	toggleVisibleMyDB: function() {
		if(personalMovieDB.privat){
			personalMovieDB.privat = false;
		} else{
			personalMovieDB.privat = true;
		};
	}
};
personalMovieDB.start();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB(personalMovieDB.privat);









const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Zlatan'];

function sortStudentsByGroups(arr) {
	arr = arr.sort();
	let firstComand = [],
		secondComand = [],
		thirdComand = [],
		remain = [];
	for(let i = 0; i < 3; i++){
		firstComand[i] = arr[i];
	};
	for(let i = 3; i < 6; i++){
		secondComand[i - 3] = arr[i];
	};
	for(let i = 6; i < 9; i++){
		thirdComand[i - 6] = arr[i];
	};
	if(arr.length == 9){
		return([firstComand, secondComand, thirdComand, ('Оставшиеся студенты: -')]);
	} else if(arr.length > 9){
		for(let i = 9; i < arr.length; i++){
			remain[i - 9] = students[i];
		}
		return([firstComand, secondComand, thirdComand, (`Оставшиеся студенты: ${remain.join(', ')}`)]);
	}
};
console.log(sortStudentsByGroups(students));



const result = getSum(5, 6);
const getSum = function(a, b) {
	return a + b;
};