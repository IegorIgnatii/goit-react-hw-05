import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZWQ5M2EzN2M1ZGFlMDM3YzU3MWY3Mjg3ZmQ3YmJhMCIsIm5iZiI6MTcyNDgzMDY2OS45NjY1MzcsInN1YiI6IjY2Y2VjY2EyZDhlMjFiNTFlZTY5ZjA2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.en4-l8pEmowrcxPklVBGSK6L49yRaOBNum-stDBORp8";

export const fetchPopularMovies = async () => {
  const { data } = await axios.get("trending/movie/day");
  return data;
};

export const fetchMovieById = async (id) => {
  const { data } = await axios.get(`movie/${id}`);
  return data;
};

export const fetchMoviesByQuery = async (query) => {
  const { data } = await axios.get(`search/movie`, {
    params: {
      query,
    },
  });
  return data;
};

export const fetchMovieCastById = async (id) => {
  const { data } = await axios.get(`movie/${id}/credits`);
  return data;
};

export const fetchMovieReviewsById = async (id) => {
  const { data } = await axios.get(`movie/${id}/reviews`);
  return data;
};

export const fetchConfiguration = async () => {
  const { data } = await axios.get(`configuration`);
  return data;
};
