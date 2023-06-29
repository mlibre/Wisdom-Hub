// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./node_modules/@openzeppelin/contracts/access/Ownable.sol";

contract MLBNft is ERC721, Ownable {
    constructor() ERC721("MLBNft", "MLBn") {
        super._mint(msg.sender, 1);
    }

    function _baseURI() internal pure override returns (string memory) {
        return
            "https://siasky.net/EABmgOTKUkcmmxYebuLZKQYUw6rygnC0SDLJ84pVCEnn_A";
    }

    function safeMint(address to, uint256 tokenId) public onlyOwner {
        _safeMint(to, tokenId);
    }
}
