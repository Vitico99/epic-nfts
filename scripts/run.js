const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT');
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();
    console.log("Contract deployed to:", nftContract.address);

    let txn = await nftContract.makeAnEpicNFT()

    await txn.wait()

    txn = await nftContract.makeAnEpicNFT()
    
    await txn.wait()

    let c = await nftContract.getMintedNFTs()
    let m = await nftContract.getMaxNFTs()

    console.log(c.toNumber(), " NFTs have been minted out of ", m.toNumber());
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