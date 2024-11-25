"use client";

import { useState } from "react";
import { getServerUrl } from "@utils/api";
import { constants } from "@utils/constants";
import { useAccount } from "wagmi";

export function GetTokenBalance() {
  const { address } = useAccount();
  const [checkAddress, setCheckAddress] = useState<string>("");
  const [balance, setBalance] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(false);
  console.log("GetTokenBalance -> checkAddress", checkAddress, balance, isLoading);

  const checkBalance = async () => {
    setLoading(true);
    setBalance(null);

    fetch(getServerUrl(constants.routes.server.tokenBalance, { address: checkAddress || address }))
      .then(res => res.json())
      .then(data => {
        setBalance(data.result);
        setLoading(false);
      });
  };

  if (isLoading) return <p>Loading data from API...</p>;

  return (
    <div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-primary-content">Check Token Balance</span>
        </label>
        <div className="join w-full">
          <input
            type="text"
            placeholder="Enter address"
            className="input input-bordered join-item w-full text-neutral-content text-white"
            value={checkAddress || address}
            onChange={e => setCheckAddress(e.target.value)}
          />
          <button className="btn btn-secondary join-item" onClick={() => checkBalance()} disabled={isLoading}>
            {isLoading ? "Checking..." : "Get Balance"}
          </button>
        </div>
        {balance !== null && (
          <div className={`mt-2 alert ${balance ? "alert-success" : "alert-warning"}`}>
            {checkAddress || address} has {balance}
          </div>
        )}
      </div>
    </div>
  );
}
