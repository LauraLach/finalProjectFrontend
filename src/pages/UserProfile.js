import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function UserProfilePage ({ isLoading, isLoggedIn, setIsLoggedIn, setUserInformation, userInformation }) {
    const navigate = useNavigate();

    useEffect(() => {
        if(!isLoggedIn && !isLoading) navigate('/login');
    }, [isLoading, isLoggedIn, navigate]);
    
    return ( 
    <>
        <Header 
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            setUserInformation={setUserInformation}
        />
        <div className="FormWrapper"> 
            <h1>User Profile</h1>
            <p>
                <strong>Username: </strong>
                {userInformation.displayName}
            </p>
        </div>
    </>
    );
}

export default UserProfilePage;