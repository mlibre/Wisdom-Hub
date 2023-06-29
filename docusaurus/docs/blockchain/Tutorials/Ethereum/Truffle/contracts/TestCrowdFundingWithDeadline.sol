// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.9 <=0.9.0;

import "../contracts/CrowdFundingWithDeadline.sol";

contract TestCrowdFundingWithDeadline is CrowdFundingWithDeadline {
    uint256 time;

    constructor(
        string memory contractName,
        uint256 targetAmountEth,
        uint256 durationInMin,
        address payable beneficiaryAddress
    )
        CrowdFundingWithDeadline(
            contractName,
            targetAmountEth,
            durationInMin,
            beneficiaryAddress
        )
    {}

    function currentTime() internal view override returns (uint256) {
        return time;
    }

    function setCurrentTime(uint256 newTime) public {
        time = newTime;
    }
}
