import React from "react";

function UserPost({address, foodType, postDate, rating, resName, review, username}) {

    return (
        <div className="userPost">
            <div className="postHeader">
                <div className="resInfo">
                    <h2>{resName}</h2>
                    <p className="foodType">{foodType}</p>
                </div>
                <div className="ratingWrapper">
                    <div className="rating">
                        <h3>{rating}/10</h3>
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