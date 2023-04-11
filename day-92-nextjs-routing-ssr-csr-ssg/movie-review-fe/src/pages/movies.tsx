import { ChangeEvent, useEffect, useState } from "react";
import React from "react";
import Link from "next/link";
import moment from "moment";
import { Pagination, Stack } from "@mui/material";
import NavigationBar from "@/components/navigation.bar";
import { MdPlayCircleOutline } from "react-icons/md";

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
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchMovies();
  }, []);

  async function fetchMovies(): Promise<void> {
    const FETHCED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETHCED_DATA.json();
    setMovies(FETCHED_JSON);
  }

  async function sendPage(page: any) {
    const PAGE_URL = `http://localhost:8080/movies/list?page=${page}`;
    const FETCHED_DATA = await fetch(PAGE_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setMovies(FETCHED_JSON);
  }

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    sendPage(value);
    setPage(value);
  };

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
    <div className="w-[70rem] p-[20px]">
      <NavigationBar />
      <div className="flex justify-center flex-wrap gap-1">
        {movies.map((m: IMovie, idx: number) => (
          <Link href={{ pathname: "/movies/" + m._id }} passHref>
            <div className="w-[250px] my-2 relative" key={idx}>
              <MdPlayCircleOutline className="text-white absolute top-[150px] left-[90px] text-5xl" />
              <img
                src={
                  !m.poster
                    ? "https://images.unsplash.com/photo-1680264534453-27b46832ffe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8RnpvM3p1T0hONnd8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60"
                    : m.poster
                }
                alt=""
                className="flex-auto h-[340px] w-[230px] rounded-xl"
              />
              <div className="flex gap-2 mt-2">
                <img src={tomato} alt="" className="w-5" />{" "}
                <span>{m.imdb.rating}</span>
                <img src={popcorn} alt="popcorn" className="w-5 ms-10" />
                <span>{m.imdb.votes}</span>{" "}
              </div>
              <div className="mt-1">{m.title}</div>
              <div>{moment(m.year).format("MMM Do YYYY")}</div>
            </div>
          </Link>
        ))}
      </div>
      <Stack className="w-96 mx-auto mt-5">
        <Pagination
          count={20}
          page={page}
          onChange={handlePageChange}
          color={"secondary"}
        />
      </Stack>
    </div>
  );
}
