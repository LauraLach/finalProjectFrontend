import React from "react";

function CreateUserForm({ signUpUser }) {
    return (
        <form className="FormElement" onSubmit={(e) => signUpUser(e)}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" />

            <label htmlFor="displayName">Username</label>
            <input type="displayName" name="displayName" />

            <button type="submit">Submit</button>
        </form>
    );
}

export default CreateUserForm;