// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Migrations {
  address public owner = msg.sender;
  uint public last_completed_migration;

  modifier restricted() {
    require(
      msg.sender == owner,
<<<<<<< HEAD
      "This function is restricted to the contracts owner"
=======
      "This function is restricted to the contract's owner"
>>>>>>> 8f3b4800cdb0ff22852af18f5e7c974d26642ac3
    );
    _;
  }

  function setCompleted(uint completed) public restricted {
    last_completed_migration = completed;
  }
}
