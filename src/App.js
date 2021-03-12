import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import LeagueDetails from "./components/LeagueDetails/LeagueDetails";
import NotFound from "./components/NotFound/NotFound";
// import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route path="/about">
            <About></About>
          </Route> */}
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/details/:id">
           <LeagueDetails></LeagueDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>  
    </div>
  );
}

export default App;
