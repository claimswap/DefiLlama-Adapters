const sdk = require('@defillama/sdk');
const { sumTokens2 } = require('../helper/unwrapLPs')
const {lendingMarket} = require('../helper/methodologies')

const VaultController = "0x4aaE9823Fb4C70490F1d802fC697F3ffF8D5CbE3"

const vaultSummaryAbi = 'function vaultSummaries(uint96 start, uint96 stop) view returns (tuple(uint96 id, uint192 borrowingPower, uint192 vaultLiability, address[] tokenAddresses, uint256[] tokenBalances)[])'

const cappedTokens = {
  "0x5aC39Ed42e14Cf330A864d7D1B82690B4D1B9E61": {
    address: '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0',
    symbol: 'MATIC',
  },
  "0xfb42f5AFb722d2b01548F77C31AC05bf80e03381": {
    address: '0xc18360217d8f7ab5e7c516566761ea12ce7f9d72',
    symbol: 'ENS',
  },
  "0x05498574BD0Fa99eeCB01e1241661E7eE58F8a85": {
    address: '0xba100000625a3754423978a60c9317c58a424e3d',
    symbol: 'BAL',
  },
  "0xd3bd7a8777c042De830965de1C1BCC9784135DD2": {
    address: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
    symbol: 'AAVE',
  },
  "0x7C1Caa71943Ef43e9b203B02678000755a4eCdE9": {
    address: '0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32',
    symbol: 'LDO',
  },
  "0xDDB3BCFe0304C970E263bf1366db8ed4DE0e357a": {
    address: '0x92d6c1e31e14520e676a687f0a93788b716beff5',
    symbol: 'DYDX',
  },
  "0x9d878eC06F628e883D2F9F1D793adbcfd52822A8": {
    address: '0xD533a949740bb3306d119CC777fa900bA034cd52',
    symbol: 'CRV',
  },
  "0x64eA012919FD9e53bDcCDc0Fc89201F484731f41": {
    address: '0xae78736cd615f374d3085123a210448e74fc6393',
    symbol: 'rETH',
  },
  "0x99bd1f28a5A7feCbE39a53463a916794Be798FC3": {
    address: '0xBe9895146f7AF43049ca1c1AE358B0541Ea49704',
    symbol: 'cbETH',
  },
}

async function tvl(_, _b, _cb, { api, }) {
  const balances = {}
  const count = await api.call({  abi: " function vaultsMinted() view returns (uint96)", target: VaultController })
  const vaults = await api.call({  abi: vaultSummaryAbi, target: VaultController, params: [1, count]})
  vaults.map(vault => {
    vault.tokenAddresses.map((token, i) => {
      token = cappedTokens[token]?.address || token
      sdk.util.sumSingleBalance(balances,token,vault.tokenBalances[i])
    })
  })
  return sumTokens2({ api, balances, owner: '0x2A54bA2964C8Cd459Dc568853F79813a60761B58', tokens: ['0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48']})
}

module.exports = {
  start: 14962974,
  ethereum: {
    tvl,
  },
  methodology: `${lendingMarket}.
  For Interest Protocol, TVL is Reserve + Total Collateral Value
  Reserve is found through calling USDC.getBalances(USDI)
  Balances are found through VaultController.vaultSummaries(1,VaultController.vaultsMinted())
  Capped tokens converted 1:1 to underlying
  `
};
