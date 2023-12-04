// Implementation.sol
// This is the contract with the actual implementation or logic.

// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

contract Implementation {
    uint256 public value;

    function setValue(uint256 _value) external {
        value = _value;
    }
}