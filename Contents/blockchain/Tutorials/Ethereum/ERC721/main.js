let Deployer = require('ethereum-smart-contract-deployer');
// let Deployer = require('../../../Ethereum-Smart-Contract-Deployer');
let secrets = require('./secrets.json');

(async () => {
	try
	{
		let deployer = await new Deployer({
			contractFilePath: './ERC721Basic.sol',
			contractName: 'MLBNft',
			sender: '0xD8f24D419153E5D03d614C5155f900f4B5C8A65C',
			httpAddress: secrets.goerliAPIKey,
			privateKey: secrets.D8PrivateKey,
			compilerOptimize: false,
			compileOutput: 'bin',
			combined: true
		});
		// await deployer.info()
		deployer.deploy()
	}
	catch (e)
	{
		console.error("Error:" , e);
	}
})();

async function getBalance(web3, contract, contractAddress)
{
	let contractInstance = new web3.eth.Contract(contract.abi, contractAddress)
	let result = await contractInstance.methods.balanceOf(options.sender).call()
	console.log(result)
	result = await contractInstance.methods.symbol().call()
	console.log(result)
	result = await contractInstance.methods.tokenURI(1).call()
	console.log(result)
}

async function mint(web3, contract, contractAddress, amount) {
	let contractInstance = new web3.eth.Contract(contract.abi, contractAddress)
	const result = await contractInstance.methods.mint(options.sender , amount.toString()).send({from: options.sender})
	console.log(result)
}