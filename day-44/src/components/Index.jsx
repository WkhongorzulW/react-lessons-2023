import {Link} from "react-router-dom";

export default function Index() {
    const aboutPageData = {
        from: "Index",
        message: "Welcome to About Page",
        timeStamp: Date.now(),
    }
    const homePageData = {
        from: "index",
        message: "Welcome to Home Page",
        timeStamp: Date.now(),
    }
    return (
        <div>
            <h1>React dynamic routing</h1>

            <div className="navbar">
                <Link to={"/home"} state={homePageData}>Home</Link>
                <Link to={"/accordion"}>Accordion</Link>
                <Link to={"/about"} state={aboutPageData}>About</Link>
                <Link to={"/movies"}>Movies</Link>
                <Link to={"/gallery"}>Image Gallery Page</Link>
                <Link to={"/toast"}>Toaster Page</Link>
            </div>
        </div>
    )
}