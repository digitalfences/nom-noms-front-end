import React from 'react';
import './style.css'

const OnboardingBackground = props => {
    return(
        <div>
            <video className="Onboading-background" autoPlay muted loop>
                <source src={props.src} type = "video/mp4"></source>
            </video>
            <div>
                <p className="video-citation">Stock footage provided by Videvo, downloaded from www.videvo.net</p>
            </div>
        </div>
    )
}

export default OnboardingBackground;