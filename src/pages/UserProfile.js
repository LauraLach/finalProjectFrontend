import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import UserPost from "../components/UserPost";

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
        <div className="ProfileWrapper">
            <div className="yourFriends">
                <div className="plus">
                    <h1>Friends</h1>
                    <p>+</p>
                </div>
                <p>PizzaGuy</p>
            </div>
            <div className="yourPosts"> 
                <div className="plus">
                    <h1>Your Posts</h1>
                    <Link to="/create-post">
                        <p>+</p>
                    </Link>
                </div>
                    <UserPost
                    address="123 Pizza Place, Brooklyn, NY 11201"
                    postDate="12/07/22"
                    rating="8/10"
                    resName="Pizza Palace"
                    foodType="Italian"
                    review="Lorem Ipsum"
                    username="Username"
                    />
                    <UserPost
                    address="321 Street Road, New York, NY 11201"
                    postDate="12/07/22"
                    rating="10/10"
                    resName="Masala"
                    foodType="Indian"
                    review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into a electronic typesetting, remaining essentially unchanged."
                    username="Username"
                    />
                
                {/* <h1>User Profile</h1>
                <p>
                    <strong>Username: </strong>
                    {userInformation.displayName}
                </p> */}
            </div>
        </div>
    </>
    );
}

export default UserProfilePage;