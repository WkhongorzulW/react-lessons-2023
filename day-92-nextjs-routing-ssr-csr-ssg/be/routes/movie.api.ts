import { Router } from "express";
import { getMovies, getMoviesById } from "../controllers/movies.controller";

const movieApi = Router();

movieApi.get("/list", getMovies);

movieApi.get("/byId/:id", getMoviesById);

export default movieApi;
