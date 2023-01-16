export default function Register(){
    return(
        <div className="App">
            <h2>It is Register page</h2>

            <form>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="" />
                <br />
                <label htmlFor="firstname">Firstname: </label>
                <input type="text" name="firstname" id="" />
                <br />
                <label htmlFor="lastname">Lastname: </label>
                <input type="lastname" name="email" id="" />
                <br />

                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="" />
                <br />
                <label htmlFor="confirmpassword">Confirm Password: </label>
                <input type="password" name="confirmpassword" id="" />
                <br />
                <button>Register</button>
            </form>
        </div>
    )
}