import { handleSignUp } from "../../JS/signup";
import "../../styles/auth.css";
import "../../styles/global.css"
// import { Link } from "react-router-dom";
function Signup(){
    return(
        <>
                <div className="authwrapper">
            <div className="auth-left"><img src="sign-up.jpg.jpg" alt=""/></div>
            <div className="auth-right">
                <form id="Sign-up-form" onSubmit={handleSignUp} className="inner-container">
                    <h1>Sign-Up</h1>
                    <input required className="primaryinput" name="fullName" type="text" placeholder="please enter your name"/>
                    <input required  className="primaryinput" name="email" type="email" placeholder="please enter your email"/> 
                    <input required  className="primaryinput" name="password" type="password" placeholder="place enter your password" />
                    <input required className="primaryinput" name="phoneNumber" type="number" placeholder="please enter your number"/>
                    <input required className="primaryinput" name="adress" type="text" placeholder="please enter your adress"/>
                    <div className="formbottom">
                        <button className="primarybtn">Submit</button>
                        <p>Already have an account? <a href="/login">login</a> </p>
                    </div>
                </form>
            </div>
            </div>
        </>
    )
}


export default Signup