pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";


//Need to create NFT's
//Need to be able to sell NFT to an address
//Need to be able to buy an NFT from an address
//Need to be able to randomly generate a winner in raffle


contract Raffle is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    //Needs to be updated with oracle for random number generation
    uint256 private seed;
    mapping(uint => address) public nftAddress;

    function inspectOwners() view public{
        for(uint i = 0; i < _tokenIds.current(); i++){
            console.log("Inspecting owners, %s", nftAddress[i]);
        }
    }

    //Array of NFT ID's with a map to owner

    // Function to receive Ether. msg.data must be empty
    receive() external payable {}

    // Fallback function is called when msg.data is not empty
    fallback() external payable {}

    // We need to pass the name of our NFTs token and its symbol.
    constructor() ERC721 ("RaffleNFT", "RAFFLE") payable {
        
    }

    //Make an NFT
    function makeNFT() public {
        //TODO Check to make sure that we aren't out of bounds for how many NFT's we have

        //When using safemint, If the target address is a contract, it must implement onERC721Received
        uint256 newItemId = _tokenIds.current();

        _safeMint(msg.sender, newItemId);

        //For testing, use a hosting website, for prod would need to use IPFS
        _setTokenURI(newItemId, "data:application/json;base64,ewogICAgIm5hbWUiOiAiRXBpY0xvcmRIYW1idXJnZXIiLAogICAgImRlc2NyaXB0aW9uIjogIkFuIE5GVCBmcm9tIHRoZSBoaWdobHkgYWNjbGFpbWVkIHNxdWFyZSBjb2xsZWN0aW9uIiwKICAgICJpbWFnZSI6ICJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSEJ5WlhObGNuWmxRWE53WldOMFVtRjBhVzg5SW5oTmFXNVpUV2x1SUcxbFpYUWlJSFpwWlhkQ2IzZzlJakFnTUNBek5UQWdNelV3SWo0TkNpQWdJQ0E4YzNSNWJHVStMbUpoYzJVZ2V5Qm1hV3hzT2lCM2FHbDBaVHNnWm05dWRDMW1ZVzFwYkhrNklITmxjbWxtT3lCbWIyNTBMWE5wZW1VNklERTBjSGc3SUgwOEwzTjBlV3hsUGcwS0lDQWdJRHh5WldOMElIZHBaSFJvUFNJeE1EQWxJaUJvWldsbmFIUTlJakV3TUNVaUlHWnBiR3c5SW1Kc1lXTnJJaUF2UGcwS0lDQWdJRHgwWlhoMElIZzlJalV3SlNJZ2VUMGlOVEFsSWlCamJHRnpjejBpWW1GelpTSWdaRzl0YVc1aGJuUXRZbUZ6Wld4cGJtVTlJbTFwWkdSc1pTSWdkR1Y0ZEMxaGJtTm9iM0k5SW0xcFpHUnNaU0krUlhCcFkweHZjbVJJWVcxaWRYSm5aWEk4TDNSbGVIUStEUW84TDNOMlp6ND0iCn0=");
        console.log("An NFT w/ ID %s has been minted to %s", newItemId, msg.sender);

        nftAddress[newItemId] = msg.sender;
        console.log("nftAddresses, %s", nftAddress[newItemId]);
        
        _tokenIds.increment();
    }

    //Purchase a raffle ticket back from customer
    function buyBackNFT(address NFTaddress) public {
        
    }

    //Sell a raffle ticket to a customer
    function sellNFT(uint256 amount, uint nftId, address buyerAddress) public{
        //Receive funds        
        //Increment counter for how many NFT's are left
        require(
                    amount <= address(this).balance,
                    "Trying to withdraw more money than they contract has."
                );
                (bool success, ) = (msg.sender).call{value: amount}("");
                require(success, "Failed to withdraw money from contract.");

        //Transfer ownership of NFT
        nftAddress[nftId] = buyerAddress;
    }

    //Buying back an NFT
    function sendViaCall(address payable _to) public payable {
            // Call returns a boolean value indicating success or failure.
            // This is the current recommended method to use.
            (bool sent, bytes memory data) = _to.call{value: msg.value}("");
            require(sent, "Failed to send Ether");
        }

  

    //TEST NFT JSON DATA
    //https://jsonkeeper.com/b/OD3Z


    //NOTE: NFT data should be stored as an SVG.

}