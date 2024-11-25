"use client";

import { useAccount } from "wagmi";
import { ApiData } from "~~/app/test/_components/ApiData";
import { WalletBalance } from "~~/app/test/_components/WalletBalance";

export function WalletInfo() {
  const { address, isConnecting, isDisconnected, chain } = useAccount();
  if (address)
    return (
      <div>
        <div className="flex flex-row justify-between items-center w-full">
          <code className="flex-1 block whitespace-pre overflow-none text-left">{address}</code>
          <span className="flex-none px-2">on</span>
          <code className="flex-1 block whitespace-pre overflow-none text-right">{chain?.name}</code>
        </div>
        {/*<WalletAction />*/}
        <WalletBalance address={address as `0x${string}`} />
        {/*<TokenInfo address={address as `0x${string}`}></TokenInfo>*/}
        <ApiData address={address as `0x${string}`}></ApiData>
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
