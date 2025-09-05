// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RealEstate {
  struct Property {
    uint id;
    string name;
    address owner;
    uint256 price;
  }

  mapping(uint => Property) public properties;
  uint public propertyCount;

  function createProperty(string memory _name, uint256 _price) public {
    propertyCount++;
    properties[propertyCount] = Property(propertyCount, _name, msg.sender, _price);
  }

  function transferProperty(uint _id, address _newOwner) public {
    require(msg.sender == properties[_id].owner, "Only the owner can transfer this property");
    properties[_id].owner = _newOwner;
  }
}