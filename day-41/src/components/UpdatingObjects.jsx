import { useState } from "react"

export default function UpdatingObjects(){

    // const user = {age: 18, name: "Dorj"};
    // console.log(user);
    // user.age = 20;
    // console.log(user);

    const [user, setUser] = useState({age: 18, name: "Dorj"});

    const check = () => {
        //setUser({age: user.age + 20, name: "Dorj"});
        const newuser = {...user};
        newuser.age += 20;
        setUser(newuser);
    }

    return(
        <div>
            <h1>Updating Objects</h1>
            <button onClick={check}>UserAge is {user.age}</button>

            <hr />
        </div>
    )
}