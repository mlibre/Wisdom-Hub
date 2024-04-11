import { connect, Contract, keyStores, WalletConnection } from 'near-api-js'
import getConfig from './config'

const nearConfig = getConfig()

// Initialize contract & set global variables
export async function initContract() {
  // Initialize connection to the NEAR testnet
  const near = await connect(Object.assign({ deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } }, nearConfig))

  // Initializing Wallet based Account. It can work with NEAR testnet wallet that
  // is hosted at https://wallet.testnet.near.org
  window.walletConnection = new WalletConnection(near)

  // Getting the Account ID. If still unauthorized, it's just empty string
  window.accountId = window.walletConnection.getAccountId()
  window.account = await window.walletConnection.account();

  // Initializing our contract APIs by contract name and configuration
  window.contract = await new Contract(window.account, nearConfig.contractName, {
    // View methods are read only. They don't modify the state, but usually return some value.
    viewMethods: ['get_token_address'],
    // Change methods can modify the state. But you don't receive the returned value when called.
    changeMethods: ['near_to_token'],
    sender: window.account
  })
}

export function logout() {
  window.walletConnection.signOut()
  window.location.replace(window.location.origin + window.location.pathname)
}

export function login() {
  window.walletConnection.requestSignIn(nearConfig.contractName)
}
