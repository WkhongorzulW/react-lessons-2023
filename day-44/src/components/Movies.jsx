import { useState } from "react";
import movieData from "../data/Movies";
import { Link } from "react-router-dom";

export default function Movies() {
    const [movies, setMovies] = useState(movieData);

    return (
        <div>
            <h1>Movies</h1>

            {
                movieData.map((data, index) => {
                    return (
                        <Link to={`/movie/${data.id}`} state={data}>
                            <div key={index}>{data.name}</div>
                        </Link>
                    )
                })
            }

            <br />
            <Link to={"/"}>Back</Link>
        </div>
    )
}