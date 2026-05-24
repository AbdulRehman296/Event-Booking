
import { handleLogin } from "../../JS/login";
import "../../styles/auth.css";
import "../../styles/global.css"
import { Link } from "react-router-dom";

function Login(){
    return(
                <div className="authwrapper">
            <div className="auth-left"><img src="sign-up.jpg.jpg" alt=""/></div>
            <div className="auth-right">
                <form onSubmit={handleLogin} className="inner-container" id="Login-form">
                    <h1>Login</h1>
                    <input required  id="email" className="primaryinput" type="email" placeholder="please enter your email" />
                    <input required id ="password" className="primaryinput" type="password" placeholder="place enter your password"/>
                    <div className="formbottom">
                        <button  type="submit" className="primarybtn">Submit</button>
                        <p>Create a new account <Link to="/" >sing-up</Link> </p>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Login;