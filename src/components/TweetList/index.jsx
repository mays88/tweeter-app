import { data } from "../../data/data";
import { useState } from "react";
import Tweet from "../Tweet";
import CreateTweetForm from "../CreateTweetForm";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    align-items: center;
`;
function TweetList() {
    const [tweets, setTweets] = useState(data);

    const addTweet = (newTweet) => {
        const tweetDoc = {
            id: uuidv4(),
            content: newTweet,
            username: "Mays88",
            likes: 0,
            retweets: 0,
            timestamp: new Date(),
        };
        setTweets([tweetDoc, ...tweets]);
    };

    const removeTweet = (tweetId) => {
        setTweets(tweets.filter((t) => t.id !== tweetId));
    };

    return (
        <Container>
            <CreateTweetForm addTweet={addTweet} />
            {tweets.map((item) => {
                return (
                    <Tweet
                        key={item.id}
                        tweet={item}
                        removeTweet={removeTweet}
                    />
                );
            })}
        </Container>
    );
}
export default TweetList;
