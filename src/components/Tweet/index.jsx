/* eslint-disable react/prop-types */
import { FaHeart } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { FaUserNinja } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

import { TweetContainer } from "../styles/TweetContainer.styled";

function Tweet({ tweet, removeTweet }) {
    return (
        <TweetContainer>
            <div className="closeIcon">
                <MdOutlineClose
                    onClick={() => {
                        removeTweet(tweet.id);
                    }}
                />
            </div>
            <div className="userContainer">
                <FaUserNinja className="ninjaIcon" />
                <h4>{tweet.username}</h4>
            </div>

            <div className="content">{tweet.content}</div>
            <div className="iconContainer">
                <div className="icons">
                    <FaRegComment />
                    <div>{tweet.comments}</div>
                </div>

                <div className="icons">
                    <FaRetweet className="retweetIcon" />
                    <div>{tweet.retweets}</div>
                </div>
                <div className="icons">
                    <FaHeart className="heartIcon" />
                    <div>{tweet.likes}</div>
                </div>
                <div>
                    <IoShareSocialOutline />
                </div>
            </div>
        </TweetContainer>
    );
}
export default Tweet;
