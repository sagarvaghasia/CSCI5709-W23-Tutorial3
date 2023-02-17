
import { useLocation } from "react-router-dom";
import RegistrationForm from "./register";
import React from "react";
import './styles.css'



const Profile = () => {

    //Reference: https://stackabuse.com/programmatically-navigate-using-react-router/
    //Reference: https://reactrouter.com/en/main/hooks/use-navigate
    const location = useLocation();
    const userData = location.state;
    console.log("In profile====>", JSON.stringify(userData));

    return(
        <div>
            <h1>Profile</h1>
            <div className="form">
                <form>
                    <div>
                        <label htmlFor="fname"><b>First Name:</b> {userData.fname} </label>
                    </div>
                    <div>
                        <label htmlFor="fname"><b>Last Name:</b> {userData.lname} </label>   
                    </div>
                    <div>
                        <label htmlFor="fname"><b>Email:</b> {userData.email} </label>   
                        
                    </div>
                </form>
            </div>
        </div>
  
    );
}

export default Profile;