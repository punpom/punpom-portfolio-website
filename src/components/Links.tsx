import React from "react";
import '../styles/Links.css';
import githubicon from '../images/github-icon.png'
import twittericon from '../images/twitter-icon.svg'

export const Links = () => {
    return (
        <div className="links">
            <a target="_blank" rel="noreferrer" href="https://github.com/punpom"><img src={githubicon}  className="github-icon" height={32} width={32} alt="link to my github" /></a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/cowgaze"><img src={twittericon} className="twitter-icon" height={32} width={32} alt="link to my linkedicon" /></a>
        </div>
    )
}