const main = async () => {
  //const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const raffleContractFactory = await hre.ethers.getContractFactory("Raffle");
  const raffleContract = await raffleContractFactory.deploy({
    value: hre.ethers.utils.parseEther("0.1"),
  });


  // const waveContract = await waveContractFactory.deploy({
  //   value: hre.ethers.utils.parseEther("0.1"),
  // });

   
  
  //await waveContract.deployed();
  //console.log("Contract addy:", waveContract.address);

  //NFT Transaction
  await raffleContract.deployed();
  let transaction = await raffleContract.makeNFT();
  await transaction.wait();
  await raffleContract.makeNFT();


  await raffleContract.sellNFT(100, 1, "0x80207A9870354f9Cf4e0598bA7450aAC1A2cea47");

  await raffleContract.inspectOwners();
  //console.log()


  // let contractBalance = await hre.ethers.provider.getBalance(
  //   waveContract.address
  // );
  // console.log(
  //   "Contract balance:",
  //   hre.ethers.utils.formatEther(contractBalance)
  // );

  /*
   * Let's try two waves now
   */
  // const waveTxn = await waveContract.wave("This is wave #1");
  // await waveTxn.wait();

  // const waveTxn2 = await waveContract.wave("This is wave #2");
  // await waveTxn2.wait();

  // contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
  // console.log(
  //   "Contract balance:",
  //   hre.ethers.utils.formatEther(contractBalance)
  // );

  // let allWaves = await waveContract.getAllWaves();
  // console.log(allWaves);
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