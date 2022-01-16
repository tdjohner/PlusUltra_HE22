//SPDX-License-Identifier: UNLICENSED

// Solidity files have to start with this pragma.
// It will be used by the Solidity compiler to validate its version.
pragma solidity >=0.8.0;

// We import this library to be able to use console.log
import "hardhat/console.sol";
import "./ownable.sol";
import "./erc721.sol";


// This is the main building block for smart contracts.
contract Token is Ownable, ERC721 {
    // Some string type variables to identify the token.
    string public name = "Ticket Decentral";
    string public symbol = "TDCT";
    string public authors = "Teagan, Benji, McKenzy";

    // The fixed amount of tokens stored in an unsigned integer type variable.
    uint256 public totalSupply = 1000000;


    // A mapping is a key/value map. Here we store each account balance.
    mapping(address => uint256) balances;

    /**
     * Contract initialization.
     *
     * The `constructor` is executed only once when the contract is created.
     * The `public` modifier makes a function callable from outside the contract.
     */
    constructor() {
        // The totalSupply is assigned to transaction sender, which is the account
        // that is deploying the contract.
        balances[msg.sender] = totalSupply;
    }

    /**
     * A function to transfer tokens.
     *
     * The `external` modifier makes a function *only* callable from outside
     * the contract.
     */
    function transfer(address to, uint256 amount) external {
        // Check if the transaction sender has enough tokens.
        // If `require`'s first argument evaluates to `false` then the
        // transaction will revert.
        require(balances[msg.sender] >= amount, "Not enough tokens");

        // We can print messages and values using console.log
        console.log(
            "Transferring from %s to %s %s tokens",
            msg.sender,
            to,
            amount
        );

        // Transfer the amount.
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }

    /**
     * Read only function to retrieve the token balance of a given account.
     *
     * The `view` modifier indicates that it doesn't modify the contract's
     * state, which allows us to call it without executing a transaction.
     */
    function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }

    /**
     *  
     */
    function approve(address _approved, uint256 _tokenId) external payable {
        
    }

    /**
     *  
     */
    function transferFrom(address _from, address _to, uint256 _tokenId) external payable {

    }

    /**
     *  
     */
    function ownerOf(uint256 _tokenId) external view returns (address) {
        address box;
        return box;
    }

}
