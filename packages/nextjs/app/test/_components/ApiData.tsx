import { CheckMinterRole } from "@app/test/_components/CheckMinterRole";
import { GetTokenBalance } from "@app/test/_components/GetTokenBalance";
import { TokenInfoFromApi } from "@app/test/_components/TokenInfoFromApi";
import { RequestTokens } from "~~/app/test/_components/RequestTokens";

export function ApiData(params: { address: `0x${string}` }) {
  return (
    <div className="card w-96 bg-primary text-primary-content mt-4">
      <div className="card-body">
        <h2 className="card-title">API Token Data</h2>
        <TokenInfoFromApi type={"token"}></TokenInfoFromApi>
        <TokenInfoFromApi type={"ballot"}></TokenInfoFromApi>
        <CheckMinterRole />
        <GetTokenBalance />
        <RequestTokens address={params.address}></RequestTokens>
      </div>
    </div>
  );
}
