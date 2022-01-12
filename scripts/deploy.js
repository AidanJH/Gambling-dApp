const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    
    console.log("Deploying contracts with account: ", deployer.address);
    console.log("Account balance: ", accountBalance.toString());
  
    const Token = await hre.ethers.getContractFactory("WavePortal");
    const portal = await Token.deploy();
    
    await portal.deployed();
  
    console.log("WavePortal address: ", portal.address);

    const waveContract = await waveContractFactory.deploy({
        value: hre.ethers.utils.parseEther("0.001"),
    });
    await waveContract.deployed();
 
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();

  