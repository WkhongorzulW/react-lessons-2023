import { Request, Response } from "express";
import MovieModel from "../models/movies.model";

export const getMovies = async (req: Request, res: Response) => {
  const page: number = Number(req.query.page) || 0;
  const moviesPerPage: number = Number(req.query.moviesPerPage) || 5;

  try {
    const movies = await MovieModel.find({})
      .limit(moviesPerPage)
      .skip(moviesPerPage * (page - 1));
    res.status(200).json(movies);
  } catch (error) {
    res.status(404).json({ data: [] });
  }
};
