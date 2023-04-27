"Use strict";

const apiUrl =
	"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c50cd752786fd745baffe0fa1511a50d&page=1";
const imgPath = "https://image.tmdb.org/t/p/w1280";
const searchApi =
	"https://api.themoviedb.org/3/search/movie?&api_key=c50cd752786fd745baffe0fa1511a50d&query=";

const mainSection = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

returnMovie(apiUrl);

// Function that creates the elements with the movie fetched information (image and title);
function returnMovie(url) {
	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			console.log(data.results);
			data.results.forEach((element) => {
				const div_movie = document.createElement("div");
				div_movie.classList.add("movie");

				const div_movieImage = document.createElement("div");
				div_movieImage.classList.add("movieImage");

				const image = document.createElement("img");

				// const overviewText = document.createElement("p");
				// overviewText.classList.add("overview-text");

				const overview = document.createElement("div");
				overview.classList.add("overview");

				const div_movieTitle = document.createElement("div");
				div_movieTitle.classList.add("movieTitle");

				const paragraph = document.createElement("p");
				paragraph.classList.add("Title");

				const modal = document.createElement("div");
				modal.classList.add("modal");

				paragraph.innerHTML = `${element.title}`;
				image.src = imgPath + element.poster_path;
				overview.innerHTML = `<b>Overview:</b><br> ${element.overview} <br> <br>
				<b>Release date:</b> ${element.release_date}`;
				div_movieImage.appendChild(image);
				div_movie.appendChild(div_movieImage);
				div_movieTitle.appendChild(paragraph);
				div_movie.appendChild(div_movieTitle);
				mainSection.appendChild(div_movie);
				div_movie.appendChild(overview);
			});
		});
}

// Event when submitting form while searching any movie
form.addEventListener("submit", (e) => {
	e.preventDefault();
	mainSection.innerHTML = "";

	const searchMovie = search.value;

	if (searchMovie) {
		returnMovie(searchApi + searchMovie);
		search.value = "";
	}
});
