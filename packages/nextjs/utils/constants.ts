// App
const name = "EVM SE2";
const caption = "Let's ETH!";
// Environment
const environment = process.env.NODE_ENV || "development";
const prodEnv = ["production", "prod"].includes(environment);
const devEnv = !prodEnv || environment === "development";
const localEnv = !prodEnv && !devEnv;
const devOrLocalEnv = devEnv || localEnv;
// BCS
const bcsServerHost = process.env.BCS_SERVER_HOST || "http://localhost";
const bcsServerPort = process.env.BCS_SERVER_PORT || 8051;
const bcsServerUrl = process.env.BCS_SERVER_URL || `${bcsServerHost}:${bcsServerPort}`;
// Core Web App (CWA)
const cwaServerHost = process.env.CWA_SERVER_HOST || "http://localhost";
const cwaServerPort = process.env.CWA_SERVER_PORT || 3000;
const cwaServerUrl = process.env.NEXT_PUBLIC_CWA_SERVER_URL || `${cwaServerHost}:${cwaServerPort}`;

export const constants = Object.freeze({
  // Environment
  env: {
    dev: devEnv,
    local: localEnv,
    devOrLocal: devOrLocalEnv,
    prod: prodEnv,
  },
  // BCS
  bcs: {
    host: bcsServerHost,
    port: bcsServerPort,
    url: bcsServerUrl,
  },
  // CWA
  cwa: {
    host: cwaServerHost,
    port: cwaServerPort,
    url: cwaServerUrl,
  },
  app: {
    id: "evm-se2",
    name: name,
    caption: caption,
    productionUrl: "https://connextar.com",
    repoUrl: "https://github.com/Agent009/scaffold-eth-2",
  },
  routes: {
    home: "/",
    debug: "debug",
    test: "test",
    api: {
      base: cwaServerUrl + (cwaServerUrl?.charAt(cwaServerUrl?.length - 1) !== "/" ? "/" : "") + "api/",
    },
    server: {
      base: bcsServerUrl + (bcsServerUrl?.charAt(bcsServerUrl?.length - 1) !== "/" ? "/" : ""),
      contractAddress: "contract-address/:type",
      tokenName: "token-name",
      totalSupply: "total-supply",
      tokenBalance: "token-balance/:address",
      checkMinterRole: "check-minter-role",
      mintTokens: "mint-tokens",
    },
  },
  // Smart contracts
  account: {
    deployerMemonic: process.env.MNEMONIC || "",
    deployerAddress: process.env.DEPLOYER_ADDRESS || "",
    deployerPrivateKey: process.env.PRIVATE_KEY || "",
  },
  contracts: {
    ballotToken: {
      sepolia: process.env.BALLOT_TOKEN_SEPOLIA || "",
    },
    ballot: {
      sepolia: process.env.BALLOT_SEPOLIA || "",
    },
  },
  integrations: {
    alchemy: {
      apiKey: process.env.ALCHEMY_API_KEY || "",
      sepolia: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY || ""}`,
    },
    etherscan: {
      apiKey: process.env.ETHERSCAN_API_KEY || "",
    },
    infura: {
      apiKey: process.env.INFURA_API_KEY || "",
      apiSecret: process.env.INFURA_API_SECRET || "",
    },
    pokt: {
      apiKey: process.env.POKT_API_KEY || "",
    },
  },
  // Shared keys
  jwtKey: process.env.JWT_KEY || "T#k!^2PmQ!3@5wS8rYp",
  jwtRefreshKey: process.env.JWT_REFRESH_KEY || "PoP0zOLUt2ln8tE16tp1V+HRm3eoBnUNSfuYXX+4QzB3ICTImhYbQSmKlp1",
  jwtExpires: process.env.JWT_EXPIRES || "12h",
  jwtRefreshExpires: process.env.JWT_REFRESH_EXPIRES || "7d",
  // Misc
  ymdDateFormat: "y-MM-dd",
});
