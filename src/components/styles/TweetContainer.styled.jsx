import styled from "styled-components";

export const TweetContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px;
    width: 450px;
    border: 1px solid #d6d6d6b5;
    margin-bottom: 15px;
    box-shadow: 5px 5px 15px #00000028;

    &:hover {
        width: 470px;
    }

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
