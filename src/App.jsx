import "./App.css";
import TweetList from "./components/TweetList";
import styled from "styled-components";

const Container = styled.main`
    margin: auto;
    width: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
function App() {
    return (
        <>
            <Container>
                <TweetList />
            </Container>
        </>
    );
}

export default App;
