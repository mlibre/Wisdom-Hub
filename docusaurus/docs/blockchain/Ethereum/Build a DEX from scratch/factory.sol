// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.10;

import "./exchange.sol";

// Factory is a contract that creates exchange contracts. and keep track of what it has created.
contract Factory {
    mapping(address => address) public tokenToExchange; // map of token address to exchange address
    int256 public numExchanges; // number of exchanges created
    address[] public tokenList; // list of token addresses

    function createExchange(address _tokenAddress) public returns (address) {
        require(_tokenAddress == address(_tokenAddress), "Not a valid address");
        require(_tokenAddress != address(0), "Zero token address is not valid");
        // tokenToExchange[_tokenAddress] returns "zero address" if _tokenAddress is not in the map
        require(
            tokenToExchange[_tokenAddress] == address(0),
            "Exchange already exists"
        );

        Exchange exchange = new Exchange(_tokenAddress);

        // Tracking
        tokenToExchange[_tokenAddress] = address(exchange);
        numExchanges++;
        tokenList.push(_tokenAddress);

        return address(exchange);
    }

    function getExchange(address _tokenAddress) public view returns (address) {
        return tokenToExchange[_tokenAddress];
    }

    function getTokens() public view returns (address[] memory) {
        return tokenList;
    }
}
