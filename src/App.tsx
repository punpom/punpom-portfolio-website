import React from 'react';
import './styles/App.css';
import me from './images/me.png'
import { Mintbutton } from './components/Mintbutton';
import { Links } from './components/Links';
import { Web3ReactProvider } from '@web3-react/core';
import { ethers } from 'ethers';

const getLibrary = (provider: string) => {
  new ethers.providers.Web3Provider((window as any).ethereum)
}

const App: React.FC = () => {

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
    <div className="profile">
      <div className="profile-image-container">
      <img className="profile-image" src={me} height={150} width={150} alt="my avatar"/>
      </div>
      <h1>Hello, I am <span className="my-name">Lucas CARRILHO GOMES</span> <span className="wave">👋</span></h1>
      <h4>I am a front-end & Solidity developer from France</h4>
      <Mintbutton />
      <Links />
    </div>
    </Web3ReactProvider>
  );
}

export default App;
