import { useEffect, useState } from "react";
import React from "react";
import Link from "next/link";
import moment from "moment";

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

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, [movies]);

  async function fetchMovies(): Promise<void> {
    const FETHCED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETHCED_DATA.json();
    setMovies(FETCHED_JSON);
  }

  // movies.map((m) => {
  //   let toma;

  //   if (m.imdb.rating >= 6 && m.imdb.rating <= 8) {
  //     toma = tomato;
  //   } else if (m.imdb.rating > 8) {
  //     toma = tPie;
  //   } else {
  //     toma = rotten;
  //   }
  // });

  const tPie =
    "https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/certified_fresh-notext.56a89734a59.svg";
  const tomato =
    "https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/tomatometer-fresh.149b5e8adc3.svg";
  const popcorn =
    "https://www.rottentomatoes.com/assets/pizza-pie/images/icons/audience/aud_score-fresh.6c24d79faaf.svg";
  const rotten =
    "https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/tomatometer-rotten.f1ef4f02ce3.svg";

  return (
    <div className="lg:container p-5">
      <div className="flex justify-center flex-wrap gap-1">
        {movies.map((m: IMovie, idx: number) => (
          <div className="w-48 mt-1" key={idx}>
            <img
              src={
                !m.poster
                  ? "https://images.unsplash.com/photo-1680264534453-27b46832ffe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8RnpvM3p1T0hONnd8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60"
                  : m.poster
              }
              alt=""
              className="flex-auto h-72 rounded-xl"
            />
            <div className="flex gap-2 mt-2">
              <img src={tomato} alt="" className="w-5" />{" "}
              <span>{m.imdb.rating}</span>
              <img src={popcorn} alt="popcorn" className="w-5 ms-10" />
              <span>{m.imdb.votes}</span>{" "}
            </div>
            <Link href={{ pathname: "/movies/" + m._id }} passHref>
              <div className="mt-1">{m.title}</div>
            </Link>
            <div>{moment(m.year).format("MMM Do YYYY")}</div>
          </div>
        ))}
      </div>
      <h1 className="text-red">movies</h1>
    </div>
  );
}
