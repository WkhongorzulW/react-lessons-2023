import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header(){
    const [activeIndex, setActiveIndex] = useState(0);
    return(
        <div>
            <h1>Header</h1>

            <nav>
                <Link to="/" className={activeIndex === 0 ? "active" : ""} onClick={() => setActiveIndex(2)}>Home</Link>

                <Link to="/login" className={activeIndex === 1 ? "active" : ""} onClick={() => {setActiveIndex(1)}}>Login</Link>

                <Link to="/register" className={activeIndex === 2 ? "active" : ""} onClick={() => {setActiveIndex(2)}}>Register</Link>

                <Link to="/accordion" className={activeIndex === 3 ? "active" : ""} onClick={() => {setActiveIndex(3)}}>Accordion</Link>
            </nav>
        </div>
    )
}