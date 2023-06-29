// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.9 <=0.9.0;
pragma abicoder v2;

contract Console {
    // https://gist.github.com/maurelian/4f7402ba5641b96eca56f703fcae37c2
    event LogUint(string, uint256);

    function log(string memory s, uint256 x) public {
        emit LogUint(s, x);
    }

    event LogInt(string, int256);

    function log(string memory s, int256 x) public {
        emit LogInt(s, x);
    }

    event LogBytes(string, bytes);

    function log(string memory s, bytes memory x) public {
        emit LogBytes(s, x);
    }

    event LogBytes32(string, bytes32);

    function log(string memory s, bytes32 x) public {
        emit LogBytes32(s, x);
    }

    event LogAddress(string, address);

    function log(string memory s, address x) public {
        emit LogAddress(s, x);
    }

    event LogBool(string, bool);

    function log(string memory s, bool x) public {
        emit LogBool(s, x);
    }

    event LogString(string);

    function log(string memory s) public {
        emit LogString(s);
    }
}

contract MultiSigWallet is Console {
    uint256 minApprovers;
    address payable beneficiary;
    address payable owner;

    mapping(address => bool) approvedBy;
    mapping(address => bool) isApprover;
    uint256 approvalsNum;

    constructor(
        address payable _beneficiary,
        address[] memory _approvers,
        uint256 _minApprovers
    ) payable {
        require(_minApprovers <= _approvers.length, "more than min approvers");
        minApprovers = _minApprovers;
        beneficiary = _beneficiary;
        approvalsNum = 0;
        owner = payable(msg.sender);
        for (uint256 i = 0; i < _approvers.length; i++) {
            address approver = _approvers[i];
            isApprover[approver] = true;
        }
    }

    function approve() public {
        require(isApprover[msg.sender], "not an approver");
        if (!approvedBy[msg.sender]) {
            approvalsNum++;
            approvedBy[msg.sender] = true;
        }
        if (approvalsNum == minApprovers) {
            log("send", address(this).balance);
            beneficiary.transfer(address(this).balance);
            selfdestruct(owner);
        }
    }

    function remove() public {
        selfdestruct(owner);
    }

    receive() external payable {}
}
