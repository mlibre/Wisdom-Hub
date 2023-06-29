const Blockchain = require( "./main" ).Blockchain;
const Wallet = require( "./main" ).Wallet;
const crypto = require( "crypto" );

const userKeysPairs = Wallet.createKeyPair();
const minerKeyPairs = Wallet.createKeyPair();
const blockchain = new Blockchain( "blockchain.json", "wallets.json", userKeysPairs );
 
let trx = 
{
	from: userKeysPairs.publicKey,
	to: "user2",
	amount: 1,
	fee: 0,
	transaction_number: 2
}
trx.signature = Wallet.signTransaction( userKeysPairs.privateKey, trx );

blockchain.addTransaction(trx);

let trx2 = {
	from: userKeysPairs.publicKey,
	to: "user3",
	amount: 5,
	fee: 0.3,
	transaction_number: 3
}
trx2.signature = Wallet.signTransaction( userKeysPairs.privateKey, trx2 );
blockchain.addTransaction(trx2);

blockchain.mineBlock( minerKeyPairs );
console.log( blockchain.validateChain() );
console.log( "Latest Block :", blockchain.chain.getLatestBlock() );
console.log( "Wallets : ", blockchain.wallet );
