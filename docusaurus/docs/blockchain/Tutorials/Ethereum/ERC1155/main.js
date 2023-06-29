let Deployer = require("ethereum-smart-contract-deployer")
// let Deployer = require('../../../Ethereum-Smart-Contract-Deployer');
let secrets = require("./secrets.json");

(async () => {
	try
	{
		let deployer = await new Deployer({
			contractFilePath: "./ERC1155Basic.sol",
			contractName: "MLBs",
			input: [7],
			sender: "0xD8f24D419153E5D03d614C5155f900f4B5C8A65C",
			httpAddress: secrets.goerliAPIKey,
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

async function getTokenBalance(web3, contract, contractAddress, tokenID)
{
	let contractInstance = new web3.eth.Contract(contract.abi, contractAddress)
	const result = await contractInstance.methods.balanceOf(sender, tokenID).call()
	console.log(web3.utils.fromWei(result))
	console.log(result)
}

async function mint(web3, contract, contractAddress, amount) {
	let contractInstance = new web3.eth.Contract(contract.abi, contractAddress)
	const result = await contractInstance.methods.mint(sender , amount.toString()).send({from: sender})
	console.log(result)
}

