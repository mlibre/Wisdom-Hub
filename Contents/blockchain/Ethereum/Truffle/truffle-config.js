module.exports = {
	networks: {
		ganache:
		{
			host: "127.0.0.1",     // Localhost (default: none)
			port: 7545,            // Standard Ethereum port (default: none)
			gas: 5000000,           // Gas sent with each transaction (default: ~6700000)
			network_id: "*",       // Any network (default: none)
		}
	},
	mocha: {
		// timeout: 100000
	},
	compilers: {
		solc: {
			version: "0.8.9",    // Fetch exact version from solc-bin (default: truffle's version)
		},
	},
	db: {
		enabled: false
	}
}
