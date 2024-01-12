let Deployer = require("ethereum-smart-contract-deployer");
// let Deployer = require("../../../../Ethereum-Smart-Contract-Deployer");

(async () => {
	let sender = "0xc6b2fB12F47dcA59e2d79D6AdE8825Dc80314Db9"
	try {
		let deployer = await new Deployer({
			contractFilePath: "voter.sol",
			input: [["mlibre" , "Good"]],
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
		// let abi = deployer.contract.abi
		// let contract = deployer.contractInstance
		await contract.methods.addOption("new option").send({from: sender})
		let options = await contract.methods.getOptions().call()
		await contract.methods.startVoting().send({from: sender})
		await contract.methods.vote(0).send({from: sender})
		const votes = await contract.methods.getVotes().call({
			from: sender,
		})
		console.log(options, votes)
	}
	catch (e) {
		console.error("Error:", e)
	}
})()