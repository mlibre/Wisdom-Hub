# Cryptography

`Cryptography` is Study of secure communication techniques.

`Cryptography` plays a vital role in securing communication and data in the digital world. In the context of `blockchain` technology, it provides the foundation for secure `transactions`, `digital signatures`, and `distributed consensus mechanisms`

## Cryptography In Blockchain

`Cryptography` is an essential component of `blockchain` technology. It ensures the security and integrity of data stored on a blockchain. Here is some key aspects of cryptography in blockchain:

### Hash Functions

A `hash function` is a one-way function that takes an input and produces a fixed-size output, typically a bit string. In the context of `blockchain`, hash functions are used to create `unique identifiers` for `blocks` and `transactions`. The most commonly used hash function in blockchain is `SHA-256`, which produces a 256-bit output.

### Digital Signatures

Digital signatures play a crucial role in securing transactions on a blockchain. They are used to prove the `authenticity` and `integrity` of the data. In blockchain technology, digital signatures are created using public-key cryptography. A user `signs` a transaction with their `private key`, and anyone can verify the signature using the corresponding public key.

### Consensus Mechanisms

Cryptography is also at the heart of consensus mechanisms used in blockchain networks. These mechanisms ensure that only valid transactions are added to the blockchain and help maintain the security and integrity of the network. Some common consensus mechanisms include Proof of Work (PoW), Proof of Stake (PoS).

## Simple Encryption & Decryption with Openssl

```bash
echo HelloWorld > message.txt
openssl enc -aes-256-cbc -in message.txt -out message.bin
openssl enc -d -aes-256-cbc -in message.bin -out message.dec
cat message.dec
HelloWorld
# Using base64
openssl enc -base64 -in message.bin -out message.b64
openssl enc -d -base64 -in message.b64 -out message.ptx
```

## Generate Key-Pairs with openssl - RSA

```bash
openssl genpkey -algorithm RSA -out privatekey.pem -pkeyopt rsa_keygen_bits:1024
openssl rsa -pubout -in privatekey.pem -out publickey.pem
```

## Encrypt and Decrypt using RSA Key-Pairs

```bash
openssl rsautl -encrypt -inkey publickey.pem -pubin -in message.txt -out message.rsa
openssl rsautl -decrypt -inkey privatekey.pem -in message.rsa -out message.dec
```
