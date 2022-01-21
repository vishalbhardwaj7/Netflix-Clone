const API_KEY = "62316871610be695c4ef577fd1adfa07";
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,

  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,

  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres-10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
};

export default requests;
