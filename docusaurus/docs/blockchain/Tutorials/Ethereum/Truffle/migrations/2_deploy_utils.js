let Utils = artifacts.require("Utils")
let TestCrowdFundingWithDeadline = artifacts.require("TestCrowdFundingWithDeadline")
let CrowdFundingWithDeadline = artifacts.require("CrowdFundingWithDeadline")

module.exports = async function (deployer) {
	await deployer.deploy(Utils)
	deployer.link(Utils, CrowdFundingWithDeadline)
	deployer.link(Utils, TestCrowdFundingWithDeadline)  
}
