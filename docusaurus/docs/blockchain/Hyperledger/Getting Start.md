# Getting Started

## Dependencies

```bash
sudo pacman -S git curl docker docker-compose go jq -y
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

## Run the test network

```bash
cd fabric-samples/test-network
./network.sh down
./network.sh up
docker ps -a
```

## Reference

* <https://github.com/hyperledger/fabric-samples>
* <https://github.com/hyperledger/fabric-gateway>
* <https://github.com/hyperledger/fabric-sdk-node>
* <https://github.com/hyperledger/fabric-sdk-go>
* <https://github.com/hyperledger/fabric-contract-api-go>
* <https://github.com/hyperledger/fabric-chaincode-node>
