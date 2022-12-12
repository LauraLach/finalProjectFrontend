import React from "react";
import UserPost from "./UserPost";

function CreatePostForm({ createPost }) {
    return (
        <form className="FormElement" onSubmit={(e) => createPost(e)}>
            <label htmlFor="resName">Restaurant Name</label>
            <input type="text" name="resName" />

            <label htmlFor="address">Address</label>
            <input type="text" name="address" />

            <div className="typeAndRating">
                <div className="foodTypeWrapper">
                    <label htmlFor="foodType">Food Type</label>
                    <input type="text" name="foodType" />
                </div>
                <div className="ratingInputWrapper">
                    <label htmlFor="rating">Rating (1-10)</label>
                    <input type="text" name="rating" />
                </div>
            </div>

            <label htmlFor="review">Review</label>
            <textarea name="review"></textarea>

            <button type="submit">Post</button>
        </form>
    );

}

export default CreatePostForm;