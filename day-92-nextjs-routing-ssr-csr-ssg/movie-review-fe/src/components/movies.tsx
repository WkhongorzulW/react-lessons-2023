import { useEffect, useState } from "react";
import React from "react";
import styles from "@/styles/Home.module.css";

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
export default function Movies(): JSX.Element {
  const URL = "http://localhost:8080/movies/list";

  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  async function fetchMovies(): Promise<void> {
    const FETHCED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETHCED_DATA.json();
    setMovies(FETCHED_JSON);
  }
  return (
    <div className="lg:container p-5">
      <div className="flex justify-center flex-wrap gap-1">
        {movies.map((m, idx) => (
          <div className="w-48" key={idx}>
            <img src={m.poster} alt="" className="flex-auto h-80 rounded-xl" />
            <div className="">{m.title}</div>
          </div>
        ))}
      </div>
      <h1 className="text-red">movies</h1>
    </div>
  );
}
