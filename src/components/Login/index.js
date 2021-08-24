import React from 'react';
import {Button} from "@material-ui/core";
import { useHistory } from 'react-router-dom';
import "./style.css";

function Login() {
    const history = useHistory();
    const goToSignup = async () => {
		history.push('/signup');
	};
    const goToMain=async()=> {
        history.push('/main');
    }
    return (
        <div className="login_container">
            <div className="login_area">
                <h1>Login</h1>
                <p className="header_text"> By Santos Dave</p>
                <form>
                    <input type="text" className="" placeholder="Email or Username" required/>
                    <input type="password" className="" placeholder="Password" required/>
                    <div className="login_btn">
                        <Button
                            onClick={goToMain}
                            className="secondary"
                            color="secondary"
                            type="submit"
                            size="large"
                            variant="contained"
                        >
                            Proceed
                        </Button> 
                    </div>
                    
                    <p>Don't have an account yet?<b className="signup_link" onClick={goToSignup}> Register</b></p>
                </form>
            </div>
        </div>
    )
}

export default Login
