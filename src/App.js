import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPostCountAsync,
  getPostListAsync,
  getPostAsync,
} from "./redux/actions/postActions";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Posts from "./components/Posts";
import configContext from "./context/configContext";
import config from "./.env.config.json";

function App({ env }) {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getPostCountAsync());
    dispatch(getPostListAsync());
  }, []);

  return (
    <configContext.Provider value={config[env]}>
      <div className="container">
        <center>
          <Switch>
            <Route path="/" exact>
              <Posts />
            </Route>
          </Switch>
        </center>
      </div>
    </configContext.Provider>
  );
}

export default App;
