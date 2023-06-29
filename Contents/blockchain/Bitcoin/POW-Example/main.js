const crypto = require( "crypto" );
const fs = require( "fs" );

class Block
{
	constructor ({
		blockNumber,
		timestamp,
		transactions,
		previousHash,
		miner,
		hash,
		nonce
	})
	{
		this.blockNumber = blockNumber;
		this.timestamp = timestamp;
		this.transactions = transactions;
		this.previousHash = previousHash;
		this.hash = hash || "";
		this.nonce = nonce || 0;
		this.miner = miner;
		this.signature = "";
	}
	calculateHash ()
	{
		const transactionsString = JSON.stringify( this.transactions );
		const blockData = `${this.blockNumber}${this.previousHash}${this.timestamp}${transactionsString}${this.nonce}${this.miner}`;
		return crypto
		.createHash( "sha256" )
		.update( blockData )
		.digest( "hex" );
	}
	updateTransactions ( transactions )
	{
		this.transactions = transactions ;
	}
	mine ( difficulty )
	{
		const target = "0".repeat( difficulty );
		while ( this.hash.substring( 0, difficulty ) !== target )
		{
			this.nonce++;
			this.hash = this.calculateHash();
		}
		console.log( `Block mined: ${this.hash}` );
	}
	signBlock ( privateKey ){
		const key = crypto.createPrivateKey( privateKey );
		const transactionsString = JSON.stringify( this.transactions );
		const blockString = `${this.blockNumber}${this.previousHash}${this.timestamp}${transactionsString}${this.nonce}${this.miner}`;
		return crypto.sign( "sha256", Buffer.from( blockString ), key );
	}
	static verifySignature ( publicKey, signature, block )
	{
		const key = crypto.createPublicKey( publicKey );
		const transactionsString = JSON.stringify( block.transactions );
		const blockString = `${block.blockNumber}${block.previousHash}${block.timestamp}${transactionsString}${block.nonce}${block.miner}`;
		return crypto.verify( "sha256", Buffer.from( blockString ), key, signature );
	}
}

class Chain
{
	constructor ( filePath )
	{
		this.difficulty = 1;
		this.filePath = filePath;
		this.chain = [];
		if ( fs.existsSync ( filePath ) )
		{
			this.chain = JSON.parse( fs.readFileSync( filePath ) );
		}
		else
		{
			this.update()
		}
	}

	getBlock ( blockNumber )
	{
		return this.chain[blockNumber]
	}

	addBlock ( block )
	{
		this.chain.push( block )
	}

	getLatestBlock ()
	{
		return this.chain[this.chain.length - 1] || 0
	}

	getBlockChainLength ()
	{
		return this.chain.length
	}

	isBlockChainEmpty ()
	{
		return this.chain.length === 0
	}

	update ()
	{
		fs.writeFileSync( this.filePath, JSON.stringify( this.chain, null, "\t" ) );
	}
}

class Wallet
{
	constructor ( filePath )
	{
		this.filePath = filePath;
		if ( fs.existsSync( filePath ) )
		{
			this.wallets = JSON.parse( fs.readFileSync( filePath ) );
		}
		else
		{
			this.wallets = {};
			this.update()
		}
	}

	static createKeyPair (){
		const keyPair = crypto.generateKeyPairSync("rsa", { modulusLength: 512 });
		const publicKey = keyPair.publicKey.export( { type: "pkcs1", format: "pem" } );
		const privateKey = keyPair.privateKey.export( { type: "pkcs1", format: "pem" } );
		// // convert public key to easy to read format
		let publicKeyString = publicKey.replace( /-----BEGIN RSA PUBLIC KEY-----/, "" ); // remove header
		publicKeyString = publicKeyString.replace( /-----END RSA PUBLIC KEY-----/, "" ); // remove footer
		publicKeyString = publicKeyString.replace( /\n/g, "" ); // remove newlines
		return { publicKey, privateKey, publicKeyString };
	}

	static signTransaction( privateKey, transaction )
	{
		const key = crypto.createPrivateKey( privateKey );
		const transactionString = JSON.stringify( transaction );
		return crypto.sign( "sha256", Buffer.from( transactionString ), key );
	}
	static verifySignature ( publicKey, signature, data )
	{
		const key = crypto.createPublicKey( publicKey );
		// cone the data to avoid modifying the original data, and remove the signature
		const { signature: _, ...dataWithoutSignature } = data;
		const transactionString = JSON.stringify( dataWithoutSignature );
		return crypto.verify( "sha256", Buffer.from( transactionString ), key, signature );
	}
	get ( address )
	{
		return this.wallets[address];
	}

	incrementTN ( address )
	{
		return ++this.wallets[address].transaction_number;
	}

	balance ( address )
	{
		return this.wallets[address].balance
	}

	addBalance ( address, amount )
	{
		return this.wallets[address].balance += amount;
	}

	minusBalance ( address, amount )
	{
		return this.wallets[address].balance -= amount;
	}

	transactionNumber ( address )
	{
		return this.wallets[address].transaction_number;
	}

	checkWalletAddresses ( address )
	{
		this.wallets[address] = this.wallets[address] || { balance: 0, transaction_number: 0 };
	}

	update ()
	{
		fs.writeFileSync( this.filePath, JSON.stringify( this.wallets, null, "\t" ) );
	}

}

class Blockchain
{
	constructor ( chainFilePath, walletFilePath, genesisBlockMiner )
	{
		this.miningReward = 100;
		this.transactionPool = [];
		this.transactionPoolSize = 100;
		this.maxTransactionsPerBlock = 10;
		this.chain = new Chain( chainFilePath );
		this.wallet = new Wallet( walletFilePath );
		if ( this.chain.isBlockChainEmpty() )
		{
			this.createGenesisBlock( genesisBlockMiner );
		}
	}

	createGenesisBlock ( miner )
	{
		if ( !miner )
		{
			throw new Error( "Invalid miner address" );
		}

		this.mineBlock( miner )
	}

	addTransaction ( transaction )
	{
		this.wallet.checkWalletAddresses( transaction.from );
		this.wallet.checkWalletAddresses( transaction.to );

		this.validateTransaction( transaction ) 

		if ( this.transactionPool.length >= this.transactionPoolSize )
		{
			console.log( "Transaction pool is full" );
			return;
		}

		this.transactionPool.push( transaction );
		this.transactionPool.sort( ( a, b ) => { return b.fee - a.fee });
	}

	createAndSignCoinbaseTransaction ( transactionsToAdd, minerKeyPairs ){
		const transaction = {
			from: null,
			to: minerKeyPairs.publicKey,
			amount: this.miningReward + transactionsToAdd.map( t => { return t.fee }).reduce( ( a, b ) => { return a + b }, 0 ),
			fee: 0,
			transaction_number: this.wallet.incrementTN( minerKeyPairs.publicKey )
		};
		transaction.signature = Wallet.signTransaction( minerKeyPairs.privateKey, transaction );
		return transaction;
	}

	mineBlock ( minerKeyPairs )
	{
		this.wallet.checkWalletAddresses( minerKeyPairs.publicKey )

		const transactionsToAdd = this.transactionPool.slice( 0, this.maxTransactionsPerBlock )
		// coinbase transaction
		transactionsToAdd.push(this.createAndSignCoinbaseTransaction( transactionsToAdd, minerKeyPairs ));

		this.transactionPool = this.transactionPool.slice( transactionsToAdd.length );

		const block = new Block({
			blockNumber: this.chain.getBlockChainLength(),
			timestamp: Date.now(),
			transactions: transactionsToAdd,
			previousHash: this.chain.getLatestBlock().hash,
			miner: minerKeyPairs.publicKey
		});		
		block.mine( this.chain.difficulty );
		const blockSign = block.signBlock( minerKeyPairs.privateKey );
		block.signature = blockSign;
		if ( !Block.verifySignature( minerKeyPairs.publicKey, blockSign, block ) )
		{
			throw new Error( "Invalid block signature" );
		}
		this.validateBlock( block );
		this.chain.addBlock( block );

		for ( const transaction of transactionsToAdd ) {
			if ( !this.isCoinBase( transaction ) ) {
				this.wallet.minusBalance( transaction.from, transaction.amount );
				this.wallet.incrementTN( transaction.from )
			}
			this.wallet.addBalance( transaction.to, transaction.amount );
		}

		this.chain.update()

		this.wallet.update()

		return true;
	}


	isCoinBase ( transaction )
	{
		if ( !transaction.from && transaction.to && transaction.amount && transaction.transaction_number )
		{
			// this is a coinbase transaction
			return true;
		}
	}

	validateTransaction ( transaction )
	{
		if ( this.isCoinBase( transaction ) ) {
			return true;
		}
		if ( this.chain.getBlockChainLength() === 0 ) {
			return true;
		}
		// Ensure that the transaction has "from" and "to" addresses
		if ( !transaction.from || !transaction.to ) {
			throw new Error( "Invalid transaction" );
		}
		// Ensure that the transaction amount is positive
		if ( transaction.amount < 0 ) {
			throw new Error( "Invalid amount" )
		}
		// Ensure that the transaction number is higher than the last one
		if ( transaction.transaction_number <= this.wallet.transactionNumber( transaction.from ) ) {
			throw new Error( "Invalid transaction number" );
		}
		// Ensure that the sender has enough funds
		if ( this.wallet.balance( transaction.from ) < transaction.amount + transaction.fee ) {
			throw new Error( "Insufficient funds" );
		}
		// Ensure that the sender's signature is valid
		if ( !Wallet.verifySignature( transaction.from, transaction.signature,  transaction ) ) {
			throw new Error( "Invalid signature" );
		}
		return true;
	}

	validateBlock ( block )
	{
		const previousBlock = this.chain.getBlock( block.blockNumber - 1 );
		// Check that the hash of the block is correct
		if ( block.hash !== block.calculateHash() )
		{
			throw new Error( "Invalid block hash" );
		}
		// Check that the previous hash of the block is correct
		if ( block.blockNumber !== 0 && previousBlock.hash !== block.previousHash )
		{
			throw new Error( "Invalid previous hash" );
		}
		// Check that the block timestamp is greater than the previous block timestamp
		if ( block.blockNumber !== 0 && block.timestamp <= previousBlock.timestamp )
		{
			throw new Error( "Block timestamp must be greater than previous block timestamp" );
		}
		// verify the block signature
		if ( block.blockNumber !== 0 && !Block.verifySignature( block.miner, block.signature, block ) )
		{
			throw new Error( "Invalid block signature" );
		}
	}

	validateChain ()
	{
		for ( let i = 1; i < this.chain.getBlockChainLength(); i++ )
		{
			this.validateBlock( this.chain.getBlock( i ) );
		}
		return true
	}
}

module.exports.Blockchain = Blockchain
module.exports.Wallet = Wallet