import { Outlet, Link } from "react-router-dom";

export default function About() {
    return(
        <div className="App">
            <p>It is about page</p>
            <Link to={"/about/usukhuu"}>Usukhuu</Link>
            <br />
            <Link to={"/about/khangai"}>Khangai</Link>
            <Outlet />
        </div>
    )
}