// MinimalProxy.sol
// This is the minimal proxy contract that delegates all calls to the implementation contract.

// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

contract MinimalProxy {
    address public implementation;

    constructor(address _implementation) {
        implementation = _implementation;
    }

    fallback() external {
        // Delegate call to the implementation contract
        (bool success, ) = implementation.delegatecall(msg.data);
        require(success, "Delegate call failed");
    }
}
