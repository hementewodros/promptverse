// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
    uint256 public counter;

    event CounterIncremented(uint256 newCount, address indexed sender);

    constructor() {
        counter = 0;
    }

    function increment() public {
        counter += 1;
        emit CounterIncremented(counter, msg.sender);
    }

    function getCounter() public view returns (uint256) {
        return counter;
    }
}
