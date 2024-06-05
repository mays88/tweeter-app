/* eslint-disable react/prop-types */
import { useState } from "react";
import { CreateFormContainer } from "../styles/CreateFormContainer.styled";
import { Button } from "../styles/Button.styled";

function CreateTweetForm({ addTweet }) {
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        addTweet(content);
        setContent("");
    };
    return (
        <CreateFormContainer onSubmit={handleSubmit}>
            {/* <label htmlFor="">Content</label> */}
            <input
                type="text"
                name="content"
                id="content"
                placeholder="Whats on your mind?"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <Button type="submit" value="Post" />
        </CreateFormContainer>
    );
}
export default CreateTweetForm;
