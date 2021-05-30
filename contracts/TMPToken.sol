//// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TMPToken is ERC20 {
  constructor() ERC20("TempToken", "TMP"){
    _mint(msg.sender, 1000000000000000000000000);
  }
}