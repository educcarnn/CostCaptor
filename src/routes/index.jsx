import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from "../pages/Home";
import Principal from "../pages/Principal";

export const Routes = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/costcaptor">
            <Principal />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  };