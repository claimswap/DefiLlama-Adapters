const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000"

const ADDRESS_PROVIDER_ADDRESS = "0x5a0ad8337E5C6895b3893E80c8333859DAcf7c01"
const KGL_ADDRESS = "0x257f1a047948f73158DaDd03eB84b34498bCDc60"
const VOTING_ESCROW_ADDRESS = "0x432c8199F548425F7d5746416D98126E521e8174"

const transformTokenAddress = (address) => TOKENS[address]

const TOKEN_INFO = {
  ausd: { key: "acala-dollar", decimals: 12 }
}

const TOKENS = {
  // KGL
  [KGL_ADDRESS]: "kagla-finance",
  // muKGL: staked KGL by Muuu Finance
  "0x5eaAe8435B178d4677904430BAc5079e73aFa56e": "kagla-finance",
  // USDC
  "0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  // Starlay lUSDC -> USDC
  "0xC404E12D3466acCB625c67dbAb2E1a8a457DEf3c": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  // USDT
  "0x3795C36e7D12A8c252A20C5a7B455f7c57b60283": "0xdac17f958d2ee523a2206206994597c13d831ec7",
  // Starlay lUSDT -> USDT
  "0x430D50963d9635bBef5a2fF27BD0bDDc26ed691F": "0xdac17f958d2ee523a2206206994597c13d831ec7",
  // DAI
  "0x6De33698e9e9b787e09d3Bd7771ef63557E148bb": "0x6b175474e89094c44da98b954eedeac495271d0f",
  // Starlay lDAI -> DAI
  "0x4dd9c468A44F3FEF662c35c1E9a6108B70415C2c": "0x6b175474e89094c44da98b954eedeac495271d0f",
  // BUSD
  "0x4Bf769b05E832FCdc9053fFFBC78Ca889aCb5E1E": "binance-usd",
  // BAI
  "0x733ebcC6DF85f8266349DEFD0980f8Ced9B45f35": "bai-stablecoin",
  // aUSD
  "0xfFFFFfFF00000000000000010000000000000001": TOKEN_INFO.ausd.key,
  // ASTR
  "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE" : "astar",
  // nASTR: staked ASTR by Algem
  "0xE511ED88575C57767BAfb72BfD10775413E3F2b0": "astar",
  // LAY
  "0xc4335B1b76fA6d52877b3046ECA68F6E708a27dd": "starlay-finance",
  // muLAY: staked LAY by Muuu Finance
  "0xDDF2ad1d9bFA208228166311FC22e76Ea7a4C44D": "starlay-finance",
};


module.exports = {
  ZERO_ADDRESS,
  ADDRESS_PROVIDER_ADDRESS,
  VOTING_ESCROW_ADDRESS,
  KGL_ADDRESS,
  TOKEN_INFO,
  transformTokenAddress
}