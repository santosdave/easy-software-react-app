import React from 'react';
import {Button} from "@material-ui/core";
import { useHistory } from 'react-router-dom';
import "./style.css";
function Signup() {
    const history = useHistory();
    const goToLogin = async () => {
		history.push('/login');
	};
    return (
        <div className="signup_container">
            <div className="signup_area">
                <h1>SignUp</h1>
                <p className="header_text"> By Santos Dave</p>
                <form>
                    <div className="signup_name">
                        <input type="text" className="" placeholder="First Name" required/>
                        <input type="text" className="" placeholder="Last Name" required/>
                    </div>
                    <input type="email" placeholder="Email Address" required/>
                    <input type="password" placeholder="Password" required/>
                    <div className="signup_btn">
                        <Button
                         onClick={goToLogin}
                        type="submit"
                        variant="contained"
                        className="secondary"
                        color="secondary"
                        >
                            Proceed
                        </Button>
                    </div>
                    
                </form>
            </div>
            
        </div>
    )
}

export default Signup
