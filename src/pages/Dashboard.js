import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import Header from "../components/Header";
import UserPost from "../components/UserPost";

const queryData = async (app) => {
    //     if(!app) return [];
    //     const db = getFirestore(app);
        if(!app) return [];
        const db = getFirestore(app);
        const querySnapshot = await getDocs(collection(db, "posts"));
        const data = [];
        querySnapshot.forEach((doc) => {
            data.push(doc.data())
        });
        return data;
    };

function DashboardPage ({ app, isLoading, isLoggedIn, setIsLoggedIn, setUserInformation }) {
    const navigate = useNavigate();
    const [postData, setPostData] = useState([]);

    useEffect(() => {
        if(!isLoggedIn && !isLoading) navigate('/login');
    }, [isLoading, isLoggedIn, navigate]);

    useEffect(() => {
        if(!app) return;
        queryData(app).then(setPostData);
    }, [app]);

    return ( 
    <>
        <Header 
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            setUserInformation={setUserInformation}
        />
        <div className="DashWrapper"> 
            <h1>Dashboard</h1>
                <div>
                    {postData.map((post) => (
                        <UserPost
                        address={post.address}
                        postDate={post.date}
                        rating={post.rating}
                        resName={post.resName}
                        foodType={post.foodType}
                        review={post.review}
                        username={post.username}
                        />
                ))}
                </div>
                {/* <UserPost
                 address={address}
                 date={postDate}
                 rating={rating}
                 resName={resName}
                 resType={resType}
                 review={review}
                 username={username}
                /> */}
                 <UserPost
                 address="123 Pizza Place, Brooklyn, NY 11201"
                 postDate="12/07/22"
                 rating="8/10"
                 resName="Pizza Palace"
                 resType="Italian"
                 review="Lorem Ipsum"
                 username="Username"
                />
                <UserPost
                 address="321 Street Road, New York, NY 11201"
                 postDate="12/07/22"
                 rating="10/10"
                 resName="Masala"
                 resType="Indian"
                 review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into a electronic typesetting, remaining essentially unchanged."
                 username="Username"
                />
            {/* <div class="friendPost">
                <div class="postHeader">
                    <div class="resInfo">
                        <h2>Pizza Palace</h2>
                        <h3>Italian</h3>
                    </div>
                    <div class="ratingWrapper">
                        <div class="rating">
                            <h3>8/10</h3>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>Address</h3>
                    <p>Review</p>
                </div>
                <div class="postFooter">
                    
                </div>
            </div>
            <div class="friendPost"></div> */}
        </div>
    </>
    );
}

export default DashboardPage;