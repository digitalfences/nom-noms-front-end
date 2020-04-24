import React, { Component } from "react";

import Search from "./Search";
import "./Body.css";
let searchURL = "https://nom-noms-api.herokuapp.com/search/?ingredient=";
let baseURL = "https://nom-noms-api.herokuapp.com/user/";

class Body extends Component {
  constructor() {
    super();
    this.state = {
      Username: "",
      Password: "",
      FavoriteRecipes: [],
      searchTerm: "",
    };
  }

  componentDidMount() {
    const username = this.state.Username;
    const profileURL = `${baseURL}`;
    const searchTerm = this.state.searchTerm;
    let searchURL = `https://nom-noms-api.herokuapp.com/search/?ingredient=${this.state.searchTerm}`;

    fetch(profileURL)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        let profilePages = data.map(profile => ({
          Username: `${profile.Username}`,
          Favorites: `${profile.Favorites[0].FavoriteRecipes}`,
        }))


    const profileURL = `${baseURL}${username}`;

    fetch(profileURL, {
      method: "GET",
      body: JSON.stringify(this.state.Username),
      headers: { "Content-Type": "application/JSON" },
    })
      .catch((err) => console.log(err))
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let profilePages = {
          Username: `${data.Username}`,
          Favorites: `${data.Favorites[0].FavoriteRecipes}`,
        };
        console.log(profilePages);
        this.props.setProfiles(profilePages);
        console.log(profilePages);
      })
      .catch(err => {
        console.log(err);
      });

    fetch(searchURL)
      .then((res) => res.json())
      .then((searchData) => {
        console.log(searchData);
        let searchResults = searchData.map((search) => ({
          searchTerm: `${searchTerm}`
        }));
        console.log(searchResults);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  deleteData = () => {
    const username = this.props.match.params.Username;
    const profileURL = `${baseURL}${username}`;
    fetch(profileURL, {
      method: "DELETE",
      body: this.state,
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  })
  }
  render() {
    // let display = this.props.profiles.map((profile, i) => {
    return (
      <div>
        <div className="body">
          <div className="searchBar">
            <Search />
          </div>
          <div className="results" key={i}>
            <p>Your results: {profile.searchTerm}</p>
          </div>
          <div className="favorites">
            Your Favorites: {this.props.profiles.Favorites}
          </div>
        </div>
        <div className="button">
          <button type="click" onCLick={this.deleteData()}>
            DELETE PROFILE
          </button>
        </div>
      </div>
    );
  }
  // return <div>{display}</div>;
}

export default Body;
