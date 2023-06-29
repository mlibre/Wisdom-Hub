const Deployer = require("ethereum-smart-contract-deployer"); // 2.2.0

let owner = "0xF5cb7F7D0F1012e159eb6Cd2334b8C202596a54e"; // Factory creator address
let LP = "0x14c6814d103db28ea5aE0086552051f21e3790e3";

(async () => 
{
	try
	{
		let MLB1Deployer = await new Deployer({
			contractFilePath: "./MLB1.sol",
			input: [200],
			sender: LP,
			mnemonic: "gospel fault armor invest scrap manage salad ride amazing among clay feature",
			address: "http://127.0.0.1:7545",
			compilerOptimize: true,
			compileOutput: "combined",
			combineFolder: 'combined',
			combined: true,
			setGas: true,
			confirmations: false
		})
		let MLB1 = await MLB1Deployer.deploy();
		let MLB1Decimals = await MLB1.methods.decimals().call();

		// ABI & Contract address of the token which can be exchanged for ETH
		let MLB1ContractAddress = MLB1.options.address; // Contract address of a sample deployed ERC-20 token
		let MLB1Abi = MLB1Deployer.contract.abi;

		let MLB2Deployer = await new Deployer({
			contractFilePath: "./MLB2.sol",
			input: [200],
			sender: LP,
			mnemonic: "gospel fault armor invest scrap manage salad ride amazing among clay feature",
			address: "http://127.0.0.1:7545",
			compilerOptimize: true,
			compileOutput: "combined",
			combineFolder: 'combined',
			combined: true,
			setGas: true,
			confirmations: false
		})
		let MLB2 = await MLB2Deployer.deploy();
		let MLB2Decimals = await MLB2.methods.decimals().call();

		// ABI & Contract address of the token which can be exchanged for ETH
		let MLB2ContractAddress = MLB2.options.address; // Contract address of a sample deployed ERC-20 token
		let MLB2Abi = MLB2Deployer.contract.abi

		const factory = await new Deployer({
			contractFilePath: "./factory.sol",
			sender: owner,
			mnemonic: "gospel fault armor invest scrap manage salad ride amazing among clay feature", // Ganache mnemonic
			address: "http://127.0.0.1:7545", // Ganache address
			compilerOptimize: true,
			compileOutput: "combined",
			combineFolder: 'combined',
			setGas: true,
			confirmations: false
		});
		const FactoryInstance = await factory.deploy();
		web3 = factory.web3;
		let toWei = web3.utils.toWei;

		await FactoryInstance.methods.createExchange(MLB1ContractAddress)
		.send({
			from: owner
		})
		await FactoryInstance.methods.createExchange(MLB2ContractAddress)
		.send({
			from: owner
		})

	
		MLB1ExchangeAddress = await FactoryInstance.methods.getExchange(MLB1ContractAddress).call();
		MLB2ExchangeAddress = await FactoryInstance.methods.getExchange(MLB2ContractAddress).call();
		
		let factoryTokens = await FactoryInstance.methods.getTokens().call();
		let exchangeABI = [{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"uint256","name":"_tokenAmount","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minTokens","type":"uint256"}],"name":"ethToTokenSwap","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minTokens","type":"uint256"},{"internalType":"address","name":"_recipient","type":"address"}],"name":"ethToTokenTransfer","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factoryAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenSold","type":"uint256"}],"name":"getEthAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReserve","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_ethSold","type":"uint256"}],"name":"getTokenAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokensSold","type":"uint256"},{"internalType":"uint256","name":"_minEth","type":"uint256"}],"name":"tokenToEthSwap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokensSold","type":"uint256"},{"internalType":"uint256","name":"_minTokensBought","type":"uint256"},{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"tokenToTokenSwap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]

		let MLB1Exchange = new web3.eth.Contract(exchangeABI, MLB1ExchangeAddress);
		let MLB2Exchange = new web3.eth.Contract(exchangeABI, MLB2ExchangeAddress);


		let LP_MLB1_Balance_Before_Liquidity = await MLB1.methods.balanceOf(LP).call() // 0
		let LP_Reward_Balance_Before_Liquidity = await MLB1Exchange.methods.balanceOf(LP).call()
		let LP_ETH_Balance_Before_Liquidity = await web3.eth.getBalance(LP)

		let LPMLB1TokenToSend = (20 * 10 ** MLB1Decimals).toString();
		await MLB1.methods.approve(MLB1Exchange.options.address, LPMLB1TokenToSend)
		.send(
			{
				from: LP
			});
		await MLB1Exchange.methods.addLiquidity(LPMLB1TokenToSend) // Token Amount to send for liquidity
		.send({
			from: LP,
			value: toWei("1.5") // Ether amount to send for liquidity
		});

		let LPMLB2TokenToSend = (50 * 10 ** MLB2Decimals).toString();
		await MLB2.methods.approve(MLB2Exchange.options.address, LPMLB2TokenToSend)
		.send(
			{
				from: LP
			});
		await MLB2Exchange.methods.addLiquidity(LPMLB2TokenToSend) // Token Amount to send for liquidity
		.send({
			from: LP,
			value: toWei("1.5") // Ether amount to send for liquidity
		});

		let LP_Reward_Balance_After_Liquidity = await MLB1Exchange.methods.balanceOf(LP).call()
		let LP_MLB1_Balance_After_Liquidity = await MLB1.methods.balanceOf(LP).call()
		let LP_ETH_Balance_After_Liquidity = await web3.eth.getBalance(LP)

		let exchange_ETH_Reserve_Before_Swap = await web3.eth.getBalance(MLB1Exchange.options.address)
		let exchange_Token_Reserve_Before_Swap = await MLB1Exchange.methods.getReserve().call();

		let tokensOut = await MLB1Exchange.methods.getTokenAmount(toWei("1")).call();
		let tokensOut2 = await MLB1Exchange.methods.getTokenAmount(toWei("1000")).call();
		
		let LPMLB1TokenSwap = (1 * 10 ** MLB1Decimals).toString();
		let ethOut = await MLB1Exchange.methods.getEthAmount(LPMLB1TokenSwap).call();

		await MLB1.methods.approve(MLB1Exchange.options.address, LPMLB1TokenSwap).send({from: LP});
		let tokenToEthSwap = await MLB1Exchange.methods.tokenToEthSwap(LPMLB1TokenSwap, ethOut)
		.send({
			from: LP,
		});
		let exchange_ETH_Reserve_After_Swap = await web3.eth.getBalance(MLB1Exchange.options.address)
		let exchange_Token_Reserve_After_Swap = await MLB1Exchange.methods.getReserve().call();

		let LP_MLB1_Balance_After_Swap = await MLB1.methods.balanceOf(LP).call()
		let LP_ETH_Balance_After_Swap = await web3.eth.getBalance(LP);
		
		let LPAmountToRemove = (1 * 10 ** MLB1Decimals).toString();
		await MLB1Exchange.methods.removeLiquidity(LPAmountToRemove) // Token Amount to send for liquidity
		.send({
			from: LP,
		});
		
		let LP_Reward_Balance_After_Remove_Liquidity = await MLB1Exchange.methods.balanceOf(LP).call()

		let exchange_ETH_Reserve_After_Remove_Liquidity = await web3.eth.getBalance(MLB1Exchange.options.address)
		let exchange_Token_Reserve_After_Remove_Liquidity = await MLB1Exchange.methods.getReserve().call();

		let LP_MLB1_Balance_After_Remove_Liquidity = await MLB1.methods.balanceOf(LP).call()
		let LP_ETH_Balance_After_Remove_Liquidity = await web3.eth.getBalance(LP);
		
		
		
		let LPAmount = (5 * 10 ** MLB1Decimals).toString();
		let LPAmountMin = (1 * 10 ** MLB1Decimals).toString();
		await MLB1.methods.approve(MLB1Exchange.options.address, LPAmount).send({from: LP});
		await MLB2.methods.approve(MLB2Exchange.options.address, LPAmountMin).send({from: LP});
		
		let tokenToTokenSwap = await MLB1Exchange.methods.tokenToTokenSwap(LPAmount, LPAmountMin, MLB2ContractAddress)
		.send({
			from: LP,
		});
		let LP_MLB1_Balance_After_Token_Swap = await MLB1.methods.balanceOf(LP).call()
		let a
		

	}
	catch (e) 
	{
		console.error("Error:", e);
	}
})();