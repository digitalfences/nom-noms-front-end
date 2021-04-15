import React from 'react';
import HomeGenerator from "./Generator/index.js";
import "./style.css";

const Home = () => {
    return(
        <div className="Home">
            <HomeGenerator></HomeGenerator>
        </div>
    )
}

export default Home;