// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    struct Proposal {
        string name;
        uint voteCount;
    }

    Proposal[] public proposals;
    mapping(address => bool) public hasVoted;

    function addProposal(string memory name) public {
        proposals.push(Proposal(name, 0));
    }

    function vote(uint index) public {
        require(index < proposals.length, "Invalid proposal index");
        require(!hasVoted[msg.sender], "Already voted");
        hasVoted[msg.sender] = true;
        proposals[index].voteCount++;
    }

    function getWinningProposal() public view returns (string memory winnerName) {
        uint winningVoteCount = 0;
        for (uint i = 0; i < proposals.length; i++) {
            if (proposals[i].voteCount > winningVoteCount) {
                winningVoteCount = proposals[i].voteCount;
                winnerName = proposals[i].name;
            }
        }
        return winnerName;
    }
}
