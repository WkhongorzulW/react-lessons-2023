import { useState } from "react";
import userList from "../data/data";

export default function User(){
    const [index, setIndex] = useState(0);

    const [memo, setMemo] = useState("");

    let user = userList[index];
    return(
        <div>
            <button onClick={() => {setIndex(index + 1); setMemo(user.name)}}>Next</button>
            <p>{user.name}</p>
            <input  value={memo} />
        </div>
    )
}