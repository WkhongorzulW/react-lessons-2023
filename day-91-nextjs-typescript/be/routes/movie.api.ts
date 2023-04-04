import { Router } from "express";
import { getMovies } from "../controllers/movies.controller";

const movieApi = Router();

movieApi.get("/list", getMovies);

export default movieApi;
