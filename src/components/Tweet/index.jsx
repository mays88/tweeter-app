/* eslint-disable react/prop-types */
import { FaHeart } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { FaUserNinja } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px;
    width: 450px;
    border: 1px solid #d6d6d6b5;
    margin-bottom: 15px;
    box-shadow: 5px 5px 15px #00000028;
    .userContainer {
        display: flex;
        align-items: center;
    }

    .heartIcon {
        color: red;
    }

    .retweetIcon {
        color: blue;
    }

    .ninjaIcon {
        margin: 10px;
    }

    .iconContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 25px;
        margin: 10px;
    }
    .closeIcon {
        align-self: self-end;
    }

    .content {
        padding: 10px;
    }

    .icons {
        display: flex;
        gap: 5px;
    }
`;

function Tweet({ tweet, removeTweet }) {
    return (
        <Container>
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
        </Container>
    );
}
export default Tweet;
