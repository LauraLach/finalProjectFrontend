import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Header from "../components/Header";
import UserPost from "../components/UserPost";

function DashboardPage ({ app, isLoading, isLoggedIn, setIsLoggedIn, setUserInformation, userInformation }) {
    const queryData = async (app) => {
        if(!app) return [];
        const db = getFirestore(app);
        const postsRef = collection(db, "posts");
        const p = query(postsRef, where("userID", "!=", userInformation.uid));
        const querySnapshot = await getDocs(p);
        const data = [];
        querySnapshot.forEach((doc) => {
            data.push(doc.data())
        });
        return data;
    };
    
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
                    postDate={post.postDate}
                    rating={post.rating}
                    resName={post.resName}
                    foodType={post.foodType}
                    review={post.review}
                    username={post.username}
                    userID={post.userID}
                    />
                ))}
                </div>
        </div>
    </>
    );
}

export default DashboardPage;