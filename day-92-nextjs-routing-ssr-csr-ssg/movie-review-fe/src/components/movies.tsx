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
    <div>
      <h1>Movies</h1>
      <div className={styles.movies}>
        {movies.map((m, idx) => (
          <div className={styles.mBox} key={idx}>
            <img src={m.poster} alt="" className={styles.poster} />
            <div className={styles.title}>{m.title}</div>
            <div className={styles.plot}>{m.plot}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
