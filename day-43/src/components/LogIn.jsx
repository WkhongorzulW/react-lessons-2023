export default function LogIn(){
    return(
        <div className="App">
            <h2>It is Login page</h2>

            <form>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="" />
                <br />
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="" />
                <br />
                <button>Sign in</button>
            </form>
        </div>
    )
}