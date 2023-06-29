// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.9;

import "./node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./node_modules/@openzeppelin/contracts/access/Ownable.sol";

contract MlibreToken is ERC20, Ownable {
    constructor(uint256 initialSupply) ERC20("Mlibre", "MLB") {
        _mint(msg.sender, initialSupply * (10 ** uint256(decimals())));
    }
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}