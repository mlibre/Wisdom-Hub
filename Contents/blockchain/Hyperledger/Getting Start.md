# Getting Started

## Dependencies

```bash
sudo pacman -S git curl docker docker-compose go jq tree -y
sudo systemctl enable docker.service
sudo systemctl enable docker.socket
sudo systemctl restart docker.service
sudo systemctl restart docker.socket

sudo usermod -a -G docker ${USER}
sudo usermod -a -G docker $USER

# sudo chown ${USER}:docker /var/run/docker.sock

sudo reboot
```

## Install Fabric

```bash
# git clone https://github.com/hyperledger/fabric-samples.git
curl -sSLO https://raw.githubusercontent.com/hyperledger/fabric/main/scripts/install-fabric.sh && chmod +x install-fabric.sh
./install-fabric.sh
```

## What’s happening behind the scenes?

If you are interested in learning more about the sample network, you can investigate the files and scripts in the test-network directory. The steps below provide a guided tour of what happens when you issue the command of ./network.sh up.

* `./network.sh` creates the certificates and keys for two peer organizations and the orderer organization. By default, the script uses the cryptogen tool using the configuration files located in the `organizations/cryptogen` folder. If you use the `-ca` flag to create Certificate Authorities, the script uses Fabric CA server configuration files and registerEnroll.sh script located in the `organizations/fabric-ca` folder. Both cryptogen and the Fabric CAs create the crypto material and MSP folders for all three organizations in the organizations folder.
* Once the organization crypto material has been generated, the `network.sh` can bring up the nodes of the network. The script uses the `docker-compose-test-net.yaml` file in the docker folder to create the peer and orderer nodes. The docker folder also contains the `docker-compose-e2e.yaml` file that brings up the nodes of the network alongside three Fabric CAs.
* If you use the createChannel subcommand, `./network.sh` runs the createChannel.sh script in the scripts folder to create a channel using the supplied channel name. The script uses the configtxgen tool to create the channel genesis block based on the TwoOrgsApplicationGenesis channel profile in the `configtx/configtx.yaml` file. After creating the channel, the script uses the peer cli to join `peer0.org1.example.com` and `peer0.org2.example.com` to the channel, and make both of the peers anchor peers.
* If you issue the `deployCC` command, `./network.sh` runs the `deployCC.sh` script to install the asset-transfer (basic) chaincode on both peers and then define then chaincode on the channel. Once the chaincode definition is committed to the channel, the peer cli initializes the chaincode using the Init and invokes the chaincode to put initial data on the ledger.

## Running the test network with cryptogen tool

### Run the test network

```bash
cd fabric-samples/test-network
./network.sh down
./network.sh up
docker ps -a
```

### Create a channel

```bash
./network.sh createChannel
```

### Deploy the chaincode

The `deployCC` subcommand will install the `asset-transfer (basic)` chaincode on `peer0.org1.example.com` and `peer0.org2.example.com` and then deploy the chaincode on the channel specified using the channel flag (or mychannel if no channel is specified)

```bash
./network.sh deployCC -ccn basic -ccp ../asset-transfer-basic/chaincode-go -ccl go
```

### Interact with the chaincode

Because the endorsement policy for the asset-transfer (basic) chaincode requires the transaction to be `signed by Org1 and Org2`, the chaincode invoke command needs to target both `peer0.org1.example.com` and `peer0.org2.example.com` using the --peerAddresses flag

```bash
export PATH=${PWD}/../bin:$PATH
export FABRIC_CFG_PATH=$PWD/../config/

export CORE_PEER_TLS_ENABLED=true
export CORE_PEER_LOCALMSPID="Org1MSP"
export CORE_PEER_TLS_ROOTCERT_FILE=${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt
export CORE_PEER_MSPCONFIGPATH=${PWD}/organizations/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp
export CORE_PEER_ADDRESS=localhost:7051

peer chaincode invoke -o localhost:7050 --ordererTLSHostnameOverride orderer.example.com --tls --cafile "${PWD}/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem" -C mychannel -n basic --peerAddresses localhost:7051 --tlsRootCertFiles "${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt" --peerAddresses localhost:9051 --tlsRootCertFiles "${PWD}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt" -c '{"function":"InitLedger","Args":[]}'

peer chaincode query -C mychannel -n basic -c '{"Args":["GetAllAssets"]}' | jq

peer chaincode invoke -o localhost:7050 --ordererTLSHostnameOverride orderer.example.com --tls --cafile "${PWD}/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem" -C mychannel -n basic --peerAddresses localhost:7051 --tlsRootCertFiles "${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt" --peerAddresses localhost:9051 --tlsRootCertFiles "${PWD}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt" -c '{"function":"TransferAsset","Args":["asset6","Christopher"]}'

export CORE_PEER_TLS_ENABLED=true
export CORE_PEER_LOCALMSPID="Org2MSP"
export CORE_PEER_TLS_ROOTCERT_FILE=${PWD}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt
export CORE_PEER_MSPCONFIGPATH=${PWD}/organizations/peerOrganizations/org2.example.com/users/Admin@org2.example.com/msp
export CORE_PEER_ADDRESS=localhost:9051

peer chaincode query -C mychannel -n basic -c '{"Args":["ReadAsset","asset6"]}' | jq

./network.sh down
```

## Running the test network with Certificate Authorities (CAs)

```bash
./network.sh down
./network.sh up -ca
docker ps -a
```

## Bring up the test network using BFT ordering service

```bash
./network.sh down
./network.sh up -bft
./network.sh createChannel -bft
docker ps -a
```

## Reference

* <https://github.com/hyperledger/fabric-samples>
* <https://github.com/hyperledger/fabric-gateway>
* <https://github.com/hyperledger/fabric-sdk-node>
* <https://github.com/hyperledger/fabric-sdk-go>
* <https://github.com/hyperledger/fabric-contract-api-go>
* <https://github.com/hyperledger/fabric-chaincode-node>
