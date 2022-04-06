import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchGif from "./pages/SearchGif";
import Trending from "./pages/Trending";

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/trending">
                    <Trending />
                </Route>
                <Route path="/search">
                    <SearchGif />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
