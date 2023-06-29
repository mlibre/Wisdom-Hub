let Deployer = require("ethereum-smart-contract-deployer");
// let Deployer = require("../../../../Ethereum-Smart-Contract-Deployer");

(async () => {
	let sender = "0xc6b2fB12F47dcA59e2d79D6AdE8825Dc80314Db9"
	try {
		let deployer = await new Deployer({
			contractFilePath: "./multi-sig-wallet.sol",
			contractName: "MultiSigWallet",
			input: [
				"0x14c6814d103db28ea5aE0086552051f21e3790e3", // beneficiary
				["0xCbee283AA4b615E8B474092F43710B786e1aBE16", "0x3CCc5104aEA8f2faDfbd086a08cE6f3515Bf08BB" , "0xF5cb7F7D0F1012e159eb6Cd2334b8C202596a54e"], // approvers
				2 // minApprovers
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
		await deployer.web3.eth.sendTransaction({
			from: sender,
			to: contract.options.address,
			value: deployer.web3.utils.toWei("3", "ether")
		})
		let res = await contract.methods.approve().send({from: "0xCbee283AA4b615E8B474092F43710B786e1aBE16"})
		// console.log(res.events)
		res = await contract.methods.approve().send({from: "0x3CCc5104aEA8f2faDfbd086a08cE6f3515Bf08BB"})
		// console.log(res.events)
	}
	catch (e) {
		console.error("Error:", e)
	}
})()