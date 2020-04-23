import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./Header.js";
import Forms from "./Forms.js";
import CreateUser from "./CreateUser.js";

import Body from "./Body";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="login">
            {/* <Link to="/users">{Login}</Link> */}

            <Route path="/" exact component={CreateUser} />

            <Route
              path="/user"
              render={(routerProps) => (
                <Body
                  addUser={this.usernameCreated}
                  {...routerProps}
                  {...this.state}
                />
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
