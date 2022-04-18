import React, {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchGif from "./pages/SearchGif";
import Trending from "./pages/Trending";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <ChakraProvider>
                <Router>
                    <Navbar />
                    <Switch>
                        <Route path="/trending" exact>
                            <Trending />
                        </Route>
                        <Route path="/search" exact>
                            <SearchGif />
                        </Route>
                    </Switch>
                </Router>
            </ChakraProvider>
        </Provider>
    );
}

export default App;