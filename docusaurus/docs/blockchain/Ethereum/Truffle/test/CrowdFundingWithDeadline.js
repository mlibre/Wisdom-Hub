const TestCrowdFundingWithDeadline = artifacts.require("./TestCrowdFundingWithDeadline")

contract("Crowd Funding With Deadline" , async accounts => {
	let contract
	let account = accounts[0]
	let beneficiary = accounts[1]
	const ONE_ETH = 1000000000000000000
	const Ongoing_State = 0
	const Failed_State = 1
	const Succeeded_State = 2
	const Payout_State = 3

	beforeEach(async function () {
		// Each time a new contract
		// Calling contstructor is a transation
		contract = await TestCrowdFundingWithDeadline.new(
			"funding",
			1,
			10,
			beneficiary,
			{
				from: account,
				gas: 2000000
			}
		)
	})
	it("contract is initiated", async function () {
		let camName = await contract.name.call()
		expect(camName).to.equal("funding")

		let amount = await contract.targetAmount.call()
		expect(Number.parseInt(amount)).to.equal(ONE_ETH)

		let beneficiaryAddress = await contract.beneficiary.call()
		expect(beneficiaryAddress).to.equal(beneficiary)

		let fundingDeadline = await contract.fundingDeadline.call()
		expect(Number.parseInt(fundingDeadline)).to.equal(600)

		let state = await contract.state.call()
		expect(state.valueOf().toNumber()).to.equal(Ongoing_State)
	})

	it("Funs are contributed", async function () {
		await contract.contribute({
			value: ONE_ETH,
			from: account
		})
		let contributed = await contract.amounts.call(account)
		expect(Number.parseInt(contributed)).to.equal(ONE_ETH)

		let totalCollected = await contract.totalCollected.call()
		expect(Number.parseInt(totalCollected)).to.equal(ONE_ETH)
	})

	it("Cannot contribute after deadline", async function () {
		try {
			await contract.setCurrentTime(601)
			await contract.sendTransaction({
				from: account,
				value: ONE_ETH
			})
			expect.fail()
		} catch (e) {
			expect(e.message).to.include.any.string("VM Exception while processing transaction")
		}
	})
	it("CrowdFunding succeeded", async function () {
		await contract.contribute({
			value: ONE_ETH,
			from: account
		})
		await contract.setCurrentTime(601)
		await contract.finishCrowdFunding()
		let state = await contract.state.call()
		expect(state.valueOf().toNumber()).to.equal(Succeeded_State)
	})
	it("CrowdFunding Failed", async function () {
		await contract.setCurrentTime(601)
		await contract.finishCrowdFunding()
		let state = await contract.state.call()
		expect(state.valueOf().toNumber()).to.equal(Failed_State)
	})
	it("collected money paid out", async function () {
		await contract.contribute({
			value: ONE_ETH,
			from: account
		})
		await contract.setCurrentTime(601)
		await contract.finishCrowdFunding()
		let initAmount = await web3.eth.getBalance(beneficiary)
		await contract.collect({from: account})
		// await contract.collect();
		let newBal = await web3.eth.getBalance(beneficiary)
		expect(newBal - initAmount).to.equal(ONE_ETH)

		let state = await contract.state.call()
		expect(state.valueOf().toNumber()).to.equal(Payout_State)
	})
	it("withdraw funds from the contract", async function () {
		await contract.contribute({
			value: ONE_ETH - 100,
			from: account
		})
		await contract.setCurrentTime(601)
		await contract.finishCrowdFunding()
		await contract.withdraw({
			from: account
		})
		let amount = await contract.amounts.call(account)
		expect(Number.parseInt(amount)).to.equal(0)
	})
	it("event is emitted", async function () {
		await contract.setCurrentTime(601)
		let res = await contract.finishCrowdFunding()
		let eventName = res.logs[0].event
		let eventRes = res.logs[0].args
		expect(Number.parseInt(eventRes.totalCollected)).to.equal(0)
		expect(eventRes.succeeded).to.equal(false)
	})
})

function toNumbers(bigNums) {
	return bigNums.map(function (num) {
		return num.toNumber()
	})
}