import mongoose, { Schema } from "mongoose";

interface IAwards {
  wins: number;
  nominations: number;
  text: string;
}

interface Iimdb {
  rating: number;
  votes: number;
  id: number;
}

interface ITomatoes {
  viewer: IViewer;
  lastUpdated: Date;
}

interface IViewer {
  rating: number;
  numReviews: number;
  meter: number;
}

interface IMovie {
  plot: string;
  genres: [string];
  runtime: number;
  rated: {
    enum: ["RATED", "UNRATED"];
  };
  cast: [string];
  num_mflix_comments: number;
  poster: string;
  title: string;
  fullplot: string;
  languages: [string];
  released: Date;
  directors: [string];
  writers: [string];
  awards: IAwards;
  lastupdated: Date;
  year: number;
  imdb: Iimdb;
  countries: [string];
  type: {
    enum: ["movie", "series"];
  };
  tomatoes: ITomatoes;
}

const MovieSchema: Schema = new Schema({});

const MovieModel = mongoose.model<IMovie>("Movies", MovieSchema);

export default MovieModel;
