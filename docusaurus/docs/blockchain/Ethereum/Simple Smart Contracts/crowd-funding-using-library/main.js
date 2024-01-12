let Deployer = require("ethereum-smart-contract-deployer");
// let Deployer = require("../../../../Ethereum-Smart-Contract-Deployer");

(async () => {
	// Deploying Utils Library
	let utilsAddress
	try {
		let sender = "0xc6b2fB12F47dcA59e2d79D6AdE8825Dc80314Db9"
		let deployer = await new Deployer({
			contractFilePath: "./utils.sol",
			contractName: "utils",
			sender,
			mnemonic: "gospel fault armor invest scrap manage salad ride amazing among clay feature",
			httpAddress: "http://127.0.0.1:7545",
		})
		let contract = await deployer.deploy()
		utilsAddress = contract.options.address
	}
	catch (e) {
		console.error("Error:", e)
	}

	try {
		let sender = "0xc6b2fB12F47dcA59e2d79D6AdE8825Dc80314Db9"
		let deployer = await new Deployer({
			contractFilePath: "./crowd-funding-using-library.sol",
			contractName: "CrowdFundingWithDeadline",
			libraries: {
				"utils.sol:utils": utilsAddress
			},
			input: [
				"My Campaign",
				2, // target
				5,
				"0x14c6814d103db28ea5aE0086552051f21e3790e3" // beneficiary
			],
			sender,
			mnemonic: "gospel fault armor invest scrap manage salad ride amazing among clay feature",
			httpAddress: "http://127.0.0.1:7545",
			compilerOptimize: false,
			compileOutput: "bin",
			combined: true,
			setGas: true,
			confirmations: false
		})
		let contract = await deployer.deploy()
		await contract.methods.contribute().send(
			{
				value: deployer.web3.utils.toWei("3", "ether"),
				from: "0xCbee283AA4b615E8B474092F43710B786e1aBE16"
			})
		await contract.methods.finishCrowdFunding().send({from: sender})
		await contract.methods.collect().send({from: sender})
		console.log(await contract.methods.getFundingDeadline().call())
	}
	catch (e) {
		console.error("Error:", e)
	}
})()