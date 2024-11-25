"use client";

import { useEffect, useState } from "react";
import { getServerUrl } from "@utils/api";
import { constants } from "@utils/constants";

export function TokenInfoFromApi(params: { type: "token" | "ballot" }) {
  const [data, setData] = useState<{ result: string }>();
  const [tokenName, setTokenName] = useState<{ result: string } | null>(null);
  const [totalSupply, setTotalSupply] = useState<{ result: string } | null>(null);
  const [isLoading, setLoading] = useState(true);
  const isToken = params.type === "token";
  console.log("TokenInfoFromApi -> type", params.type, data, tokenName, totalSupply, isLoading);

  useEffect(() => {
    fetch(getServerUrl(constants.routes.server.contractAddress, { type: params.type }))
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });

    fetch(getServerUrl(constants.routes.server.tokenName))
      .then(res => res.json())
      .then(data => {
        setTokenName(data);
      });

    fetch(getServerUrl(constants.routes.server.totalSupply))
      .then(res => res.json())
      .then(data => {
        setTotalSupply(data);
      });
  }, [params.type]);

  if (isLoading) return <p>Loading token data from API...</p>;
  if (!data) return <p>No token data information</p>;

  return (
    <div>
      <p>
        {params.type}: {data.result}
      </p>
      {isToken && (
        <p>
          Name: {tokenName?.result}, Supply: {totalSupply?.result}
        </p>
      )}
    </div>
  );
}
