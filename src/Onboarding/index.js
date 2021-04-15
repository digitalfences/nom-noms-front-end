import React from 'react';
import OnboardingBackground from "./Background/index.js";
import LoginRegister from "./LoginRegister/index.js";
import video from "./Assets/SpringOnion.mov";
import "./style.css";

const Onboarding = () => {
    return(
        <div>
            <OnboardingBackground src={video}></OnboardingBackground>
            <LoginRegister></LoginRegister>
        </div>
    )
}

export default Onboarding;