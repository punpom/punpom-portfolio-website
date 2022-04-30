import React, {useState} from "react";
import '../styles/MintButton.css';
import ethers from "ethers";
import { injected } from "../wallet/connectors";
import { useWeb3React } from "@web3-react/core";



interface Props {
    numberOfMint: number;
}

export const Mintbutton: React.FC<Props> = (props) => {
    const {active, account, library, connector, activate } = useWeb3React()
    const [metamask, setMetamask] = useState<boolean>(true)
    
    
    const connect = async function() {
        const provider = (window as any).ethereum;
        if(!provider) {
            setMetamask(false)
        }
        else {
            const chainId = await provider.request({ method: 'eth_chainId' });
            if(chainId === '0x4') {
            await activate(injected)  
            }
                else {
                    try {
                    await provider.request({
                        method: 'wallet_switchEthereumChain',
                        params: [{ chainId: '0x4' }],
                    });
                    await activate(injected) 
                }
                catch {
                    try {
                        await provider.request({
                            method: 'wallet_addEthereumChain',
                            params: [
                                {
                                    chainId: '0x4',
                                    chainName: 'Rinkeby',
                                    rpcUrls: ['https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'], blockExplorerUrls: ['https://rinkey.etherscan.io'],
                                    nativeCurrency: {
                                        symbol: 'ETH',
                                        decimals: 18
                                    }
                                }]
                        });
                    }
                    catch(error) {
                        console.log(error)
                    }
                }
            }
        }
    }

    const mintNewNFT = async function(howMuch: number) {
        

    }
    return (
        <>
        {!active ? <button className="walletbutton" onClick={() => connect()}>Connect your wallet</button> : <button className="mintbutton" onClick={() => mintNewNFT(props.numberOfMint)}>Mint my resume</button>}
        {active && <div className="minting-infos">
          <h5>Mint me on Rinkeby</h5>
        </div>}
        </>
    )

}