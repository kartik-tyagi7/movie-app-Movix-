import axios from "axios";

const BASE_URl = "https://api.themoviedb.org/3";

const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDY5MjE4NWIyMGQzZDkyNWY0NDQwYzRiYjIxMmU1NiIsInN1YiI6IjY1MzBkMDViNTFhNjRlMDBlOWQwYzgwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4i9JX5pdiXMkpKBIs2grUA4aqEfXCzExxJ8oWBAydiU";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios(BASE_URl + url, {
      headers,
      params,
    });

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
