import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import Header from "../components/Header";
import CreatePostForm from "../components/CreatePostForm";

function CreatePostPage ({ app, isLoading, isLoggedIn, setIsLoggedIn, setUserInformation, userInformation }) {

    const navigate = useNavigate();

    useEffect(() => {
        if(!isLoggedIn && !isLoading) navigate('/login');
    }, [isLoading, isLoggedIn, navigate]);

    let date = new Date();

    const createPost = useCallback (
        async (e) => {
            e.preventDefault();
            const db = getFirestore(app);

            const resName = e.currentTarget.resName.value;
            const address = e.currentTarget.address.value;
            const foodType = e.currentTarget.foodType.value;
            const rating = e.currentTarget.rating.value;
            const review = e.currentTarget.review.value;
            const postDate = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();;
            // const username = userInformation.displayName;
            const username = userInformation.email.substring(0, userInformation.email.indexOf('@'));
            const userID = userInformation.uid;

            try {
                const docRef = await addDoc(collection( db, "posts"), {
                    resName,
                    address,
                    username,
                    foodType,
                    rating,
                    review,
                    postDate,
                    userID: userID,
                });
                console.log("Document written with ID: ", docRef.id);
                } catch (e) {
                    console.error("Error adding document: ", e)
                }
                navigate("/user/:id")
            }, [app, userInformation]
        );

    return ( 
    <>
        <Header 
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            setUserInformation={setUserInformation}
        />
        <div className="FormWrapper">
            <h1>Create Post</h1>
            <CreatePostForm createPost={createPost}/>
        </div>
    </>
    );
    }

export default CreatePostPage;