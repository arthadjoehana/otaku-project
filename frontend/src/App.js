import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Waiting from "./pages/waiting/Waiting";
import UserListPage from "./pages/userlistpage/UserListPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  console.log("user :", user)

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Login />}
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
        <Route exact path="/waitingforvalidation" component={Waiting} />
        <Route exact path="/userlistpage" component={UserListPage} />
      </Switch>
    </Router>
  );
}

export default App;
