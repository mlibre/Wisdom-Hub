import 'regenerator-runtime/runtime'
import React from 'react'
import { login, logout } from './utils'
import './global.css'

import getConfig from './config'
const { networkId } = getConfig()

export default function App() {
  const [token_address, set_token_address] = React.useState()
  const [showNotification, setShowNotification] = React.useState(false)

  React.useEffect(
    async () => {
      if (window.walletConnection.isSignedIn()) {
        try {
          let token_address = await window.contract.get_token_address();
          set_token_address(token_address)
        } catch (error) {
          console.log(error);
        }
      }
    },
    []
  )

  if (!window.walletConnection.isSignedIn()) {
    return (
      <main>
        <h1>Welcome to Swap Token DApp</h1>
        <p>
          To make use of the NEAR blockchain, you need to sign in. The button
          below will sign you in using NEAR Wallet.
        </p>
        <p>
          It connects to a test network ("testnet") wallet. And the contract address you
           provided in the config.js
        </p>
        <p>
          Go ahead and click the button below to try it out:
        </p>
        <p style={{ textAlign: 'center', marginTop: '2.5em' }}>
          <button onClick={login}>Sign in</button>
        </p>
      </main>
    )
  }

  return (
    <>
      <button className="link" style={{ float: 'right' }} onClick={logout}>
        Sign out
      </button>
      <main>
        <h1> Token Address: {' '}
          <label
            htmlFor="token_address"
            style={{
              color: 'var(--secondary)',
              borderBottom: '2px solid var(--secondary)'
            }}
          >
            {token_address}
          </label>
          {' '}
        </h1>
        <h2>Account ID: {window.accountId}!</h2>
          
        <form onSubmit={async event => {
          event.preventDefault()

          // get elements from the form using their id attribute
          const { fieldset, token_address } = event.target.elements

          fieldset.disabled = false

          try {
            // make an update call to the smart contract
            await window.contract.near_to_token({},
              300000000000000, // attached GAS (optional)
              token_address.value // attached deposit in yoctoNEAR (optional)
            )
          } catch (e) {
            console.log(e, token_address.value);
            alert(
              'Something went wrong! ' +
              'Maybe you need to sign out and back in? ' +
              'Check your browser console for more info.'
            )
            throw e
          } finally {
            // re-enable the form, whether the call succeeded or failed
            fieldset.disabled = false
          }

          setShowNotification(true)

          // remove Notification again after css animation completes
          // this allows it to be shown again next time the form is submitted
          setTimeout(() => {
            setShowNotification(false)
          }, 11000)
        }}>
          <fieldset id="fieldset">
            <label
              htmlFor="token_address"
              style={{
                display: 'block',
                color: 'var(--gray)',
                marginBottom: '0.5em'
              }}
            >
              Swap Token
            </label>
            <div style={{ display: 'flex' }}>
              <input
                autoComplete="off"
                defaultValue={2}
                id="token_address"
                style={{ flex: 1 }}
              />
              <button
                style={{ borderRadius: '0 5px 5px 0' }}
              >
                Send
              </button>
            </div>
          </fieldset>
        </form>
        <ol>
          <li>
            Look in <code>src/App.js</code> and <code>src/utils.js</code> – you'll see <code>get_token_address</code> and <code>near_to_token</code> being called on <code>contract</code>. What's this?
          </li>
        </ol>
        <hr />
        <p>
          To keep learning, check out <a target="_blank" rel="noreferrer" href="https://docs.near.org">the NEAR docs</a> or look through some <a target="_blank" rel="noreferrer" href="https://examples.near.org">example apps</a>.
        </p>
      </main>
      {showNotification && <Notification />}
    </>
  )
}

// this component gets rendered by App after the form is submitted
function Notification() {
  const urlPrefix = `https://explorer.${networkId}.near.org/accounts`
  return (
    <aside>
      <a target="_blank" rel="noreferrer" href={`${urlPrefix}/${window.accountId}`}>
        {window.accountId}
      </a>
      {' '/* React trims whitespace around tags; insert literal space character when needed */}
      called method: 'set_greeting' in contract:
      {' '}
      <a target="_blank" rel="noreferrer" href={`${urlPrefix}/${window.contract.contractId}`}>
        {window.contract.contractId}
      </a>
      <footer>
        <div>✔ Succeeded</div>
        <div>Just now</div>
      </footer>
    </aside>
  )
}
