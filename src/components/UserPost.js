import React, { useMemo } from "react";

function UserPost({address, postDate, rating, resName, foodType, review, username}) {
    // const postDate = useMemo(() => {
    //     if (!date) return '';
    //     const parsedDate = new Date(date);
    //     return parsedDate.toDateString();}, 
    //     [date]);

    // let postDate = new Date();


    return (
        <div className="userPost">
            <div className="postHeader">
                <div className="resInfo">
                    <h2>{resName}</h2>
                    <p className="foodType">{foodType}</p>
                </div>
                <div className="ratingWrapper">
                    <div className="rating">
                        <h3>{rating}</h3>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="resAddress">{address}</h3>
                <p className="resReview">{review}</p>
            </div>
            <div className="postFooter">
                <p className="username">{username}</p>
                <p className="userPostDate">{postDate}</p>
            </div>
        </div>
    );
}

export default UserPost;