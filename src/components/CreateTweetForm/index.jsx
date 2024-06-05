/* eslint-disable react/prop-types */
import { useState } from "react";

import styled from "styled-components";

const Container = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 450px;
    margin-bottom: 10px;

    #content {
        width: 450px;
        height: 200px;
    }

    .delButton {
        width: 50px;
        align-self: self-end;
    }
`;

function CreateTweetForm({ addTweet }) {
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTweet(content);
        setContent("");
    };
    return (
        <Container onSubmit={handleSubmit}>
            {/* <label htmlFor="">Content</label> */}
            <input
                type="text"
                name="content"
                id="content"
                placeholder="Whats on your mind?"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <input type="submit" value="Post" className="delButton" />
        </Container>
    );
}
export default CreateTweetForm;
