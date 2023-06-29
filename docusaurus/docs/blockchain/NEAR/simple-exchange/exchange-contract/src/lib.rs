use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::{env, log, near_bindgen, ext_contract, AccountId, Balance, PanicOnDefault, PromiseOrValue};

near_sdk::setup_alloc!();

#[ext_contract(mlb1)]
trait FungibleToken {
    fn ft_transfer(&mut self, receiver_id: String, amount: String, memo: Option<String>);
    fn ft_total_supply(&self) -> String;
    fn ft_balance_of(&self, account_id: String) -> String;
}

#[near_bindgen]
#[derive(Default, BorshDeserialize, BorshSerialize)]
pub struct Exchange {
    token_address: AccountId,
    logo_url: String
}

#[near_bindgen]
impl Exchange {
    #[init]
    pub fn new(_token_address: AccountId) -> Self {
        assert!(!env::state_exists(), "Already initialized");
        assert!(&env::signer_account_id() == &env::current_account_id(), "Owner's method");
        Self {
            token_address: _token_address,
            logo_url: "".to_string()
        }
    }

    #[payable]
    pub fn near_to_token(&mut self) {
        let near = env::attached_deposit();
        let account = &env::signer_account_id();
        env::log(near.to_string().as_bytes());
        env::log(account.to_string().as_bytes());

        mlb1::ft_transfer(
            account.to_string(),
            near.to_string(),
            None,
            &self.token_address.to_string(), // mlb1 account id
            1, // yocto NEAR to attach
            5_000_000_000_000 // gas to attach
        );
    }

    pub fn get_token_address(self) -> AccountId {
        self.token_address
    }

    pub fn set_token_address(&mut self, _token_address: AccountId) {
        assert!(&env::signer_account_id() == &env::current_account_id(), "Owner's method");
        self.token_address = _token_address
    }

    pub fn set_logo_url(&mut self, url: String) {
        assert!(&env::signer_account_id() == &env::current_account_id(), "Owner's method");
        self.logo_url = url
    }

    pub fn get_logo_url(self) -> String {
        self.logo_url
    }
}