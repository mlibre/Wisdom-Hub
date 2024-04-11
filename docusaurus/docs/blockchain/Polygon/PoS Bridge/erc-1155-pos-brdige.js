// main.js
const HDWalletProvider = require("@truffle/hdwallet-provider")
const { MaticPOSClient } = require("@maticnetwork/maticjs")
const secrets = require("./secrets.json")

let user = "0xD8f24D419153E5D03d614C5155f900f4B5C8A65C"
let rootToken = "0x11C47A4F19cc52923b9C495080ADB441ADe38883" // Goerli Contract Address
let amount = 999 // amount of token we want to trasnfer
let tokenId = 0 // Token ID
let data = "0x0" // Additional data

const parentProvider = new HDWalletProvider(secrets.seed, "http://127.0.0.1:8545") // // Local Geth client address
const maticProvider = new HDWalletProvider(secrets.seed, secrets.mumbai) // DataHub Mumbai Testnet JSONRPC URL

const maticPOSClient = new MaticPOSClient({
	network: "testnet",
	version: "mumbai",
	parentProvider,
	maticProvider
});


(async () =>
{
	try
	{
		let result = await maticPOSClient.approveERC1155ForDeposit(rootToken, {
			from: user, gasPrice: "10000000000"
		})
		let result_2 = await maticPOSClient.depositSingleERC1155ForUser(
			rootToken,
			user,
			tokenId.toString(),
			amount,
			data,
			{ from: user, gasPrice: "10000000000" }
		)
		console.log(result)
		console.log(result_2)
	}
	catch (error)
	{
		console.log(error)
	}
})()