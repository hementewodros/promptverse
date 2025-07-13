// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
    uint256 public counter;

    function count() public returns (uint) {
        counter = 1000;
        return counter;
    }
}
