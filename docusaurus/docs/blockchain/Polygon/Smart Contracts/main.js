const Deployer = require("ethereum-smart-contract-deployer");
const secrets = require("./secrets.json");

(async () => 
{
	try
	{
		const sender = "0xD8f24D419153E5D03d614C5155f900f4B5C8A65C";
		const deployer = await new Deployer({
			contractFilePath: "voter.sol",
			input: [["mlibre" , "Good"]],
			sender,
			privateKey: secrets.privateKey,
			address: secrets.mumbai
		});
		const contract = await deployer.deploy();
		// let abi = deployer.contract.abi
		// let contract = deployer.contractInstance
		await contract.methods.addOption("new option").send({from: sender});
		const options = await contract.methods.getOptions().call();
		await contract.methods.startVoting().send({from: sender});
		await contract.methods.vote(0).send({from: sender});
		const votes = await contract.methods.getVotes().call({
			from: sender,
		});
		console.log(options, votes);
	}
	catch (e)
	{
		console.error("Error:" , e);
	}
})();