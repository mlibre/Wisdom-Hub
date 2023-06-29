let Deployer = require("ethereum-smart-contract-deployer")
let secrets = require("./secrets.json");

(async () => {
	try
	{
		let deployer = await new Deployer({
			contractFilePath: "./ERC20Basic.sol",
			contractName: "MlibreToken",
			input: [12300000000],
			sender: "0xD8f24D419153E5D03d614C5155f900f4B5C8A65C",
			address: secrets.goerliAPIKey,
			privateKey: secrets.D8PrivateKey,
			compilerOptimize: false,
			compileOutput: "bin",
			combined: true
		})
		// await deployer.info()
		await deployer.deploy()
	}
	catch (e)
	{
		console.error("Error:" , e)
	}
})()

async function getBalance(web3, contract) {
	await web3.eth.personal.unlockAccount(options.sender , options.password, 150)
	let contractInstance = new web3.eth.Contract(contract.abi, options.token)
	const result = await contractInstance.methods.balanceOf(options.sender).call()
	console.log(web3.utils.fromWei(result))
}

async function mint(web3, contract, amount) {
	await web3.eth.personal.unlockAccount(options.sender , options.password, 150)
	let contractInstance = new web3.eth.Contract(contract.abi, options.token)
	const result = await contractInstance.methods.mint(options.sender , amount.toString()).send({from: options.sender})
	console.log(result)
}