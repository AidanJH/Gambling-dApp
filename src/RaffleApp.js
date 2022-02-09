import React, { useEffect, useState } from "react";
import "./App.css";
import { ethers } from "ethers";
import abi from "./raffle.json"
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { BuyNFTComponent } from './components/BuyNFTComponent';

const { SubMenu } = Menu;

const App = () => {

  const [currentAccount, setCurrentAccount] = useState("");
  const contractAddress = "0xD5DA20ACB63151888c84C8F4A90b5Db5165f521b"
  const contractABI = abi.abi;
  const [menuItem, setMenuItem]=useState("")

  // const onMessageChange = (waveMessage) => {
  //   setWaveMessage(waveMessage.target.value);
  //   console.log(waveMessage.target.value);
  // }
  

  // const checkIfWalletIsConnected = async () => {
  //   try {
  //     const { ethereum } = window;

  //     if (!ethereum) {
  //       console.log("Make sure you have metamask!");
  //       return;
  //     } else {
  //       console.log("We have the ethereum object", ethereum);
  //     }

  //     const accounts = await ethereum.request({ method: "eth_accounts" });

  //     if (accounts.length !== 0) {
  //       const account = accounts[0];
  //       console.log("Found an authorized account:", account);
  //       setCurrentAccount(account);
  //     } else {
  //       console.log("No authorized account found")
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  /**
  * Implement your connectWallet method here
  */
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error)
    }
  }

  // const wave = async () => {
  //   try {
  //     const { ethereum } = window;

  //     if (ethereum) {
  //       const provider = new ethers.providers.Web3Provider(ethereum);
  //       const signer = provider.getSigner();
  //       const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);
  //       await wavePortalContract.wave(waveMessage, { gasLimit: 300000 })
  //       console.log("Input message is: " + waveMessage);
  //       let count = await wavePortalContract.getTotalWaves();
      
  //       console.log("Retrieved total wave count...", count.toNumber());
  //     } else {
  //       console.log("Ethereum object doesn't exist!");
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
// }

// const getAllWaves = async () => {
//   const { ethereum } = window;

//   try {
//     if (ethereum) {
//       const provider = new ethers.providers.Web3Provider(ethereum);
//       const signer = provider.getSigner();
//       const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);
//       const waves = await wavePortalContract.getAllWaves();

//       const wavesCleaned = waves.map(wave => {
//         return {
//           address: wave.waver,
//           timestamp: new Date(wave.timestamp * 1000),
//           message: wave.message,
//         };
//       });

//       setAllWaves(wavesCleaned);

//       console.log(allWaves);
//     } else {
//       console.log("Ethereum object doesn't exist!");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

/**
 * Listen in for emitter events!
 */
useEffect(() => {
  // let wavePortalContract;

  // const onNewWave = (from, timestamp, message) => {
  //   console.log("NewWave", from, timestamp, message);
  //   setAllWaves(prevState => [
  //     ...prevState,
  //     {
  //       address: from,
  //       timestamp: new Date(timestamp * 1000),
  //       message: message,
  //     },
  //   ]);
  // };

  // if (window.ethereum) {
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   const signer = provider.getSigner();

  //   wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);
  //   wavePortalContract.on("NewWave", onNewWave);
  // }

  // return () => {
  //   if (wavePortalContract) {
  //     wavePortalContract.off("NewWave", onNewWave);
  //   }
  // };
}, []);

const handleClick = e => {
  setMenuItem(e.key)
};
  return (
      <div className="parent" >
        <div className="navBar">
          <div className="menu">
          <Menu onClick={(e)=>handleClick(e)} selectedKeys={menuItem} mode="horizontal">
          <Menu.Item key="" >
          Home
        </Menu.Item>
        <Menu.Item key="buy" >
          Buy Nft
        </Menu.Item>
        <Menu.Item key="sell" >
          Sell Nft
        </Menu.Item>
        <Menu.Item key="raffle" >
          Enter Raffle
        </Menu.Item>
    
       
      </Menu>
          </div>
          <div className="butt">   <button>Connect Wallet</button></div>
       
        </div>
    
        <div className="header">
          👋 Hey there!
        </div>
      

        {!menuItem &&<div className="boxStyle">HELLO My name is Nathan</div>}
        {menuItem === "buy" &&<BuyNFTComponent/>}
        
      </div>
  );
}

export default App
