# Crowd Funding With Deadline Contract

Simple `Crowd Funding` Contract. Allows to create and manage a crowdfunding campaign.

# Installation and running

Open `ganache`

```bash
npm i
node main.js
```

## Compiling SCs using solcjs

```bash
solcjs crowd-funding-with-deadline.sol -o ./bin/ --pretty-json --optimize  --abi --bin
```
