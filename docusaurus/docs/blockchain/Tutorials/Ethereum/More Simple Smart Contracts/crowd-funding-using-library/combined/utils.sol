// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.9 <=0.9.0;
pragma abicoder v2;

library utils {
    function etherToWei(uint256 sumInEth) public pure returns (uint256) {
        return sumInEth * 1 ether;
    }

    function minToSec(uint256 timeInMin) public pure returns (uint256) {
        return timeInMin * 1 minutes;
    }
}
