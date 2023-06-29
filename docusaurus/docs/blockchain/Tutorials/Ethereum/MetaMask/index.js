/* eslint-disable no-undef */

$(window).on("load", async function() {
	const provider = await detectEthereumProvider()
	if (typeof window.ethereum !== "undefined")
	{
		console.log("MetaMask is installed!")
		if (provider) {
			if (provider !== window.ethereum) {
				console.error("Do you have multiple wallets installed?")
			}
			else
			{
				console.log("MetaMask is ready")
				const accounts = await ethereum.request({ method: "eth_requestAccounts" })
				const account = accounts[0]
				const chainId = await ethereum.request({ method: "eth_chainId" })
				console.log(chainId, accounts, account)
				
				window.web3 = new Web3(window.ethereum)
			}
		}
		else {
			console.log("Please install MetaMask!")
		}
	}
	else 
	{
		console.log("MetaMask is not installed!")
	}
})
