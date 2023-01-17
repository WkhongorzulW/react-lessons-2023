import { useState } from "react"

export default function PanelFunc({ children, title }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="panel">
            <h3>{title}</h3>
            {
                isActive ? <p>{children}</p> : <button onClick={() => setIsActive(true)}>Show</button>
            }
        </div>
    )
};