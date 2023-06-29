## Geth

> Official implementation of the Ethereum protocol in [Go](https://geth.ethereum.org/)

`Geth` is a command-line interface for the Ethereum blockchain. It is a full node, meaning that it is capable of maintaining the entire blockchain, including all transactions and state. It is also capable of running a light client, which is a subset of the full node that only contains the state of the chain and the current block.  

### Installation

```bash
# Ubuntu
sudo add-apt-repository -y ppa:ethereum/ethereum

sudo pacman -Syyuu geth nodejs
sudo npm install -g solc@latest
```

### Features

1. Running an Ethereum node
2. Communicating with Ethereum network
3. Sending transactions
4. Interacting with Smart Contracts
5. Creating accounts
6. Wallet Functionality
7. Mining and ...

### Starting

```bash
eth --goerli --ws --ws.api="eth,net,web3,personal,txpool,,admin" --ws.origins '*' --syncmode=light --http --http.port 3334 --http.corsdomain "*" --http.api="eth,net,web3,personal,txpool,admin" --allow-insecure-unlock
# make sure you 30311 and 37608 ports are open
sudo iptables -I INPUT -p tcp --dport 30311 -j ACCEPT
sudo iptables -I INPUT -p udp --dport 30311 -j ACCEPT
sudo iptables -I INPUT -p tcp --dport 37608 -j ACCEPT
sudo  iptables -I INPUT -p udp --dport 37608 -j ACCEPT
```

* Data folder: `~/.ethereum/`.  
* IPC file is: `~/.ethereum/geth.ipc`.
* Accounts and Private Keys are stored: `~/.ethereum/keystore/`.  
* For Testnet it: `~/.ethereum/testnet/`.

```bash
cd ~/.ethereum/rinkeby/
rm PRIVATE_KEYS, Account
```

### Importing accounts

```bash
geth account import ~/Data/myself/cryptocurrency-info-recovery/metamask/mforgood/D8_private_key
```

### Interacting with Ethereum

```bash
geth attach http://127.0.0.1:3334
web3.personal.importRawKey("111111111PRIVATEKEY1111111111", "password")
personal.unlockAccount("0xD8f24D419153E5D03d614C5155f900f4B5C8A65C")
personal.listAccounts
eth.getBalance("0xD8f24D419153E5D03d614C5155f900f4B5C8A65C")
eth.getBalance(eth.accounts[1])
net.peerCount
eth.getCode("0xE683007C5BfB5BEBA5481C3e938dD4DC47cddbFC")
var voter = eth.contract([{"inputs":[{"internalType":"string","name":"option","type":"string"}],"name":"addOption","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getOptions","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getVotes","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"options","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"remove","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startVoting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"option","type":"uint256"}],"name":"vote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"optionName","type":"string"}],"name":"vote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"votes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]).at("0xE683007C5BfB5BEBA5481C3e938dD4DC47cddbFC");
voter
voter.addOption("mlibre" , {from: "0xD8f24D419153E5D03d614C5155f900f4B5C8A65C"})
```

### Block info

```js
geth console
```