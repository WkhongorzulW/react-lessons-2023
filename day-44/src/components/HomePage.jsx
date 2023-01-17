import { useLocation, Link } from "react-router-dom";

export default function HomePage(){
    const location = useLocation();
    const state = location.state;
    return(
        <div>
            <h1>{state.message}</h1>
            <p>{state.timeStamp}</p>
            <Link to={"/"}>Back</Link>
        </div>
    )
};