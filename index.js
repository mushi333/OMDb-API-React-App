const express = require("express");
var cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;

async function fetchFromAPI(searchParam, searchMethod) {
  let searchString = "http://www.omdbapi.com/?apikey=" + API_KEY;
  switch (searchMethod) {
    case "search":
      searchString = searchString + "&s=" + searchParam;
      break;
    case "detailed":
      searchString = searchString + "&i=" + searchParam;
      break;
    default:
      break;
  }

  const response = await fetch(searchString);
  const jsonData = await response.json();
  return jsonData;
}

async function retrieveMovieId(movieTitle) {
  let rawSearchResult = await fetchFromAPI(movieTitle, "search");
  let filteredId = [];
  for (key in rawSearchResult.Search) {
    filteredId.push(rawSearchResult.Search[key].imdbID);
  }

  return filteredId;
}

async function retrieveMovieDetail(filteredId) {
  let movieDetailList = [];
  for (key in filteredId) {
    const movie = await fetchFromAPI(filteredId[key], "detailed");
    movieDetailList.push(movie);
  }

  return movieDetailList;
}

app.get("/", async (req, res) => {
  console.log(req.query);
  const movieIdList = await retrieveMovieId(req.query.name);
  const movieDetailList = await retrieveMovieDetail(movieIdList);

  res.send(movieDetailList);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
