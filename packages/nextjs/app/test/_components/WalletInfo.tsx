"use client";

import { useAccount } from "wagmi";
import { TokenInfo } from "~~/app/test/_components/TokenInfo";
import { WalletAction } from "~~/app/test/_components/WalletAction";
import { WalletBalance } from "~~/app/test/_components/WalletBalance";

export function WalletInfo() {
  const { address, isConnecting, isDisconnected, chain } = useAccount();
  if (address)
    return (
      <div>
        <p>Your account address is {address}</p>
        <p>Connected to the network {chain?.name}</p>
        <WalletAction />
        <WalletBalance address={address as `0x${string}`} />
        <TokenInfo address={address as `0x${string}`}></TokenInfo>
      </div>
    );
  if (isConnecting)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  if (isDisconnected)
    return (
      <div>
        <p>Wallet disconnected. Connect wallet to continue</p>
      </div>
    );
  return (
    <div>
      <p>Connect wallet to continue</p>
    </div>
  );
}
