let CrowdFundingWithDeadline = artifacts.require("CrowdFundingWithDeadline")

module.exports = async function (deployer) {
	await deployer.deploy(CrowdFundingWithDeadline,
		"Test Campaign" , 1, 5, "0xF5cb7F7D0F1012e159eb6Cd2334b8C202596a54e")
}
