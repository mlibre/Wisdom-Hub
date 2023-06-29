const HDWalletProvider = require("@truffle/hdwallet-provider")
const {MaticPOSClient} = require("@maticnetwork/maticjs")
const secrets = require("./secrets.json")

let from = "0xD8f24D419153E5D03d614C5155f900f4B5C8A65C"
let rootToken = "0xd2d40892B3EebdA85e4A2742A97CA787559BF92f"
let amount = 999 * (10 ** 18)

const parentProvider = new HDWalletProvider(secrets.seed, "http://127.0.0.1:8545")
const maticProvider = new HDWalletProvider(secrets.seed, secrets.mumbai)

const maticPOSClient = new MaticPOSClient({
	network: "testnet",
	version: "mumbai",
	parentProvider,
	maticProvider
});


(async () => {
	try
	{
		let result = await maticPOSClient.approveERC20ForDeposit(rootToken, amount.toString(), {
			from,
			gasPrice: "10000000000"
		})
		let result_2 = await maticPOSClient.depositERC20ForUser(rootToken, from, amount.toString(), {
			from,
			gasPrice: "10000000000",
		})
		console.log(result)
		console.log(result_2)
	}
	catch (error)
	{
		console.log(error)
	}
})()