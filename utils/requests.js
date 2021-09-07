const API_KEY = process.env.API_KEY;
const requests = {
  fetchTrending: {
    title: "Trending",
    url: `trending/all/week?api_key=79ce7bd19195d04744565f4aeb59db61&language=en-US`,
  },
  fetchToprated: {
    title: "Top Rated",
    url: `movie/top_rated?api_key=79ce7bd19195d04744565f4aeb59db61&language=en-US`,
  },
  fetchAction: {
    title: "Action",
    url: `discover/movie?api_key=79ce7bd19195d04744565f4aeb59db61&with_genres=28`,
  },
  fetchComedy: {
    title: "Comedy",
    url: `discover/movie?api_key=79ce7bd19195d04744565f4aeb59db61&with_genres=35`,
  },
  fetchHorror: {
    title: "Horror",
    url: `discover/movie?api_key=79ce7bd19195d04744565f4aeb59db61&with_genres=27`,
  },
  fetchMystery: {
    title: "Mystery",
    url: `discover/movie?api_key=79ce7bd19195d04744565f4aeb59db61&with_genres=9648`,
  },
  fetchRomance: {
    title: "Romance",
    url: `discover/movie?api_key=79ce7bd19195d04744565f4aeb59db61&with_genres=10749`,
  },
};
export default requests;
