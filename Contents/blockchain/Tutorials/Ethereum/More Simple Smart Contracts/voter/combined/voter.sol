// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.9 <=0.9.0;
pragma abicoder v2;

contract Voter {
    uint256[] public votes;
    string[] public options;
    mapping(address => bool) hasVoted;
    bool vottingStarted;
    address public owner;

    // with experimental
    constructor(string[] memory _options) {
        options = _options;
        owner = msg.sender;
    }

    function vote(uint256 option) public {
        require(vottingStarted);
        require(option >= 0 && option < options.length, "invalid option");
        require(!hasVoted[msg.sender], "Already voted");
        votes[option] = votes[option] + 1;
        hasVoted[msg.sender] = true;
    }

    function getOptions() public view returns (string[] memory) {
        return options;
    }

    function getVotes() public view returns (uint256[] memory) {
        return votes;
    }

    function remove() public {
        require(msg.sender == owner, "Only the owner can refill.");
        selfdestruct(payable(0x14c6814d103db28ea5aE0086552051f21e3790e3));
    }

    function addOption(string memory option) public {
        require(!vottingStarted);
        options.push(option);
    }

    function startVoting() public {
        require(!vottingStarted);
        votes = new uint256[](options.length);
        vottingStarted = true;
    }
}
