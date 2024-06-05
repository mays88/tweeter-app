import "./App.css";
import TweetList from "./components/TweetList";
import { Container } from "./components/styles/Container.styled";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/themes/main.theme";
import GlobalStyles from "./components/styles/Global";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                <Container>
                    <TweetList />
                </Container>
            </>
        </ThemeProvider>
    );
}

export default App;
