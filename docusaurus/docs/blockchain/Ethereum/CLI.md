# CLI

:::info

it is not possible to run an execution client on its own anymore. After The Merge, **both execution and consensus clients** must be run together in order for a user to gain access to the Ethereum network.

:::

## Table of content

* [Table of content](#table-of-content)
* [Online Providers](#online-providers)
  * [getblock.io](#getblockio)
  * [Infura](#infura)
* [Testnet Node](#testnet-node)
  * [Geth, Clef, Consensus client](#geth-clef-consensus-client)
  * [Sync modes](#sync-modes)
  * [Installation \& Requirements](#installation--requirements)
  * [Clef](#clef)
  * [Geth](#geth)
  * [Consensus clients](#consensus-clients)
  * [Testing the network](#testing-the-network)
  * [Useful commands](#useful-commands)
* [References](#references)

You can either run your `own` ethereum `layers` (node) or use `free providers`.

## Online Providers

### getblock.io

```bash
geth attach https://eth.getblock.io/token/mainnet/
```

### Infura

```bash
curl -X POST \
-H "Content-Type: application/json" \
--data '{"jsonrpc": "2.0", "id": 1, "method": "eth_blockNumber", "params": []}' \
"https://sepolia.infura.io/v3/api-key"
```

## Testnet Node

### Geth, Clef, Consensus client

> `Geth` is Official implementation of the Ethereum execution layer in [Go](https://geth.ethereum.org/)

`Geth` is a command-line interface for the Ethereum blockchain. `Geth` is an Ethereum client written in Go. This means running `Geth` turns a computer into an `Ethereum node`. Ethereum is a `peer-to-peer` network where information is shared directly between nodes rather than being managed by a central server. Every 12 seconds one node is randomly selected to generate a new block containing a list of transactions that nodes receiving the block should execute. This `block proposer` node sends the new block to its peers. On receiving a new block, each node checks that it is `valid` and adds it to their database. The sequence of discrete blocks is called a `blockchain`. The information provided in each block is used by Geth to `update` its `state`.  
`Clef` is an account management tool external to `Geth` itself that allows users to sign transactions.  
`Geth` also needs to be connected to a `Consensus client` in order to function as an Ethereum node.  

![Clef](./assets/clef.png)

### Sync modes

* Snap (default): Snap sync starts from a relatively recent block and syncs from there to the head of the chain,.
* Full: An archive node is a node that retains all historical data right back to genesis
* Light: A light node syncs very quickly and stores the bare minimum of blockchain data

> `Light` nodes are not currently working on `proof-of-stake` Ethereum

### Installation & Requirements

These commands will intall `geth`, `clef`, `devp2p`, `abigen`, `bootnode`, `evm`, `rlpdump` and `puppeth`

```bash
# Ubuntu
sudo apt-get install -y software-properties-common
sudo add-apt-repository -y ppa:ethereum/ethereum
sudo apt-get update
sudo apt-get install ethereum

# Arch
sudo pacman -Syyuu geth nodejs
pamac install lighthouse-ethereum-bin
```

An accurate clock is required to participate in the Ethereum network

```bash
sudo ntpdate -s time.nist.gov
```

Make sure you have the following ports open

```bash
sudo iptables -I INPUT -p tcp --dport 30311 -j ACCEPT
sudo iptables -I INPUT -p udp --dport 30311 -j ACCEPT
sudo iptables -I INPUT -p tcp --dport 30303 -j ACCEPT
sudo iptables -I INPUT -p udp --dport 30303 -j ACCEPT
sudo iptables -I INPUT -p tcp --dport 30304 -j ACCEPT
sudo iptables -I INPUT -p udp --dport 30304 -j ACCEPT
sudo iptables -I INPUT -p tcp --dport 37608 -j ACCEPT
sudo iptables -I INPUT -p udp --dport 37608 -j ACCEPT
sudo iptables -I INPUT -p tcp --dport 8546 -j ACCEPT
sudo iptables -I INPUT -p udp --dport 8546 -j ACCEPT
sudo iptables -I INPUT -p tcp --dport 8551 -j ACCEPT
sudo iptables -I INPUT -p udp --dport 8551 -j ACCEPT
sudo iptables -I INPUT -p tcp --dport 8545 -j ACCEPT
sudo iptables -I INPUT -p udp --dport 8545 -j ACCEPT
sudo iptables -I INPUT -p tcp --dport 3334 -j ACCEPT
sudo iptables -I INPUT -p udp --dport 3334 -j ACCEPT
sudo iptables -I INPUT -p tcp --dport 9000 -j ACCEPT
sudo iptables -I INPUT -p udp --dport 9000 -j ACCEPT
sudo iptables -I INPUT -p tcp --dport 9001 -j ACCEPT
sudo iptables -I INPUT -p udp --dport 9001 -j ACCEPT
sudo iptables -I INPUT -p tcp --dport 5052 -j ACCEPT
sudo iptables -I INPUT -p udp --dport 5052 -j ACCEPT
sudo iptables -I INPUT 1 -i lo -j ACCEPT
sudo iptables -A INPUT -i ens3 -p udp -m multiport --dports 1900,5351,5353 -j ACCEPT
sudo iptables -A INPUT -i ens3 -p tcp -m multiport --dports 49152 -j ACCEPT
```

### Clef

`Clef` is the `Accounts Management` and has the responsibility of generating and storing keys, and signing transactions.

Create a new account with `Clef`:

```bash
mkdir enode
clef newaccount --keystore enode/keystore
```

To start `Clef`, run the `Clef` executable passing as arguments the `keystore` file location, config directory location and a `chain ID`. The config directory was automatically created inside the geth-tutorial directory during the previous step. The chain ID is an integer that defines which Ethereum network to connect to. Ethereum mainnet has `chain ID 1`. In this tutorial `Chain ID 11155111` is used which is that of the `Sepolia` testnet

```bash
clef --keystore enode/keystore --configdir enode/clef --chainid 11155111
```

### Geth

`Geth` is responsible for running the Ethereum node. Communicating with the network, `sending and validating transactions`, and interacting with `Smart Contracts`. `Geth` also keep the `state` of the blockchain.

By default, `Geth` uses `snap-sync` which download blocks sequentially from a `relatively recent block`, not the genesis block.  
Your `ISP` must also allow `UDP` and `TCP` traffics to pass through.

```bash
geth --sepolia --datadir enode --authrpc.addr 0.0.0.0 --authrpc.port 8551 --authrpc.vhosts "*" --authrpc.jwtsecret enode/jwtsecret --http --http.api eth,net,admin --signer enode/clef/clef.ipc --verbosity 5 --maxpeers 100 --allow-insecure-unlock --discv5 --bootnodes "enode://ec66ddcf1a974950bd4c782789a7e04f8aa7110a72569b6e65fcd51e937e74eed303b1ea734e4d19cfaec9fbff9b6ee65bf31dcb50ba79acce9dd63a6aca61c7@52.14.151.177:30303","enode://9246d00bc8fd1742e5ad2428b80fc4dc45d786283e05ef6edbd9002cbc335d40998444732fbe921cb88e1d2c73d1b1de53bae6a2237996e9bfe14f871baf7066@18.168.182.86:30303"
# --nat=none --maxpendpeers 10 --nodiscover
```

Get some Sepolia ETH from `https://www.infura.io/faucet/sepolia`.  
Connet to your `geth` node

```bash
geth attach http://127.0.0.1:8545
```

Check if `geth` has connected to the network

```bash
admin.peers
```

To manullay add static peers to the netwrok, first find the `enode` address of the peer you want to connect to. for example, for `sepolia` you can find some [here](https://github.com/eth-clients/sepolia), and for mainnet you can find [here](https://etherscan.io/nodetracker/nodes)

```bash
admin.addPeer("enode://ec66ddcf1a974950bd4c782789a7e04f8aa7110a72569b6e65fcd51e937e74eed303b1ea734e4d19cfaec9fbff9b6ee65bf31dcb50ba79acce9dd63a6aca61c7@52.14.151.177:30303")
admin.addPeer("enode://9246d00bc8fd1742e5ad2428b80fc4dc45d786283e05ef6edbd9002cbc335d40998444732fbe921cb88e1d2c73d1b1de53bae6a2237996e9bfe14f871baf7066@18.168.182.86:30303")
```

Get connected accounts

```bash
eth.accounts;
```

The console will hang, because `Clef` is waiting for approval. approve it.  

### Consensus clients

`Consensus client` is responsible for `Block Proposals`, `Agreement Process` and `Final Decision`.  
A `Consensus client` alongside `geth` is required to function as an Ethereum node and start syncing the blockchain.  
One of the famous `Consensus clients` is `Lighthouse`. To use `checkpoint syncing` you need to have a `Beacon Node` running. There is list [here](https://eth-clients.github.io/checkpoint-sync-endpoints/).  
`Lighthouse` needs to be publicly accessible to the network, otherwise it will not be able to sync the blockchain.  
You can check it you are connected to the network by running `curl http://localhost:5052/lighthouse/nat`

```bash
rm -r enode/lighthouse
mkdir -p enode/lighthouse

lighthouse bn \
    --network sepolia \
    --datadir enode/lighthouse \
    --http \
    --execution-endpoint http://127.0.0.1:8551 \
    --metrics \
    --validator-monitor-auto \
    --checkpoint-sync-url https://sepolia.beaconstate.info \
    --execution-jwt enode/jwtsecret --disable-deposit-contract-sync
```

### Testing the network

Get latest block number:

```bash
eth.blockNumber
```

### Useful commands

```bash
geth account import ~/Data/myself/cryptocurrency-info-recovery/metamask/mforgood/D8_private_key

geth attach http://127.0.0.1:3334
web3.fromWei(eth.getBalance('0x7e932ab056a3dce4bcdd73092430c3f967e1bea3'), 'ether');

web3.personal.importRawKey("111111111PRIVATEKEY1111111111", "password")
personal.unlockAccount("0xD8f24D419153E5D03d614C5155f900f4B5C8A65C")
personal.listAccounts
eth.getBalance("0xD8f24D419153E5D03d614C5155f900f4B5C8A65C")
eth.getBalance(eth.accounts[1])
net.peerCount
eth.getCode("0xE683007C5BfB5BEBA5481C3e938dD4DC47cddbFC")
var voter = eth.contract([{"inputs":[{"internalType":"string","name":"option","type":"string"}],"name":"addOption","outputs":[],"name":"votes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]).at("0xE683007C5BfB5BEBA5481C3e938dD4DC47cddbFC");
voter
voter.addOption("mlibre" , {from: "0xD8f24D419153E5D03d614C5155f900f4B5C8A65C"})
```

## References

* <https://geth.ethereum.org/docs/>
* <https://github.com/eth-educators/ethstaker-guides/blob/main/merge-goerli-prater.md>
* <https://consensys.io/quorum/developers>
* <https://docs.goquorum.consensys.io/>
* <https://docs.goquorum.consensys.io/deploy/install/overview>
* <https://docs.goquorum.consensys.io/concepts/blockchain-basics>
* https://www.npmjs.com/package/quorum-genesis-tool
