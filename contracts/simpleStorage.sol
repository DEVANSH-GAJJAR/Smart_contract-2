// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title SimpleStorage
/// @notice A minimal contract to store and retrieve a uint256 value
contract SimpleStorage {
    uint256 private storedValue;
    address public owner;

    event ValueChanged(address indexed changedBy, uint256 newValue);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    constructor(uint256 _initialValue) {
        owner = msg.sender;
        storedValue = _initialValue;
    }

    function set(uint256 _value) external onlyOwner {
        storedValue = _value;
        emit ValueChanged(msg.sender, _value);
    }

    function get() external view returns (uint256) {
        return storedValue;
    }
}