"use client";

import { useState } from "react";
import { getServerUrl } from "@utils/api";
import { constants } from "@utils/constants";
import { useAccount } from "wagmi";

export function CheckMinterRole() {
  const { address } = useAccount();
  const [checkAddress, setCheckAddress] = useState<string>("");
  const [isMinter, setIsMinter] = useState<boolean | null>(null);
  const [isLoading, setLoading] = useState(false);
  console.log("CheckMinterRole -> checkAddress", checkAddress, isMinter, isLoading);

  const checkMinterRole = async () => {
    setLoading(true);
    setIsMinter(null);

    fetch(getServerUrl(constants.routes.server.checkMinterRole, { address: checkAddress || address }))
      .then(res => res.json())
      .then(data => {
        setIsMinter(data.result);
        setLoading(false);
      });
  };

  if (isLoading) return <p>Loading data from API...</p>;

  return (
    <div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-primary-content">Check Minter Role</span>
        </label>
        <div className="join w-full">
          <input
            type="text"
            placeholder="Enter address"
            className="input input-bordered join-item w-full text-neutral-content text-white"
            value={checkAddress || address}
            onChange={e => setCheckAddress(e.target.value)}
          />
          <button className="btn btn-secondary join-item" onClick={() => checkMinterRole()} disabled={isLoading}>
            {isLoading ? "Checking..." : "Check Role"}
          </button>
        </div>
        {isMinter !== null && (
          <div className={`mt-2 alert ${isMinter ? "alert-success" : "alert-warning"}`}>
            {checkAddress || address} {isMinter ? "has" : "does not have"} minter role
          </div>
        )}
      </div>
    </div>
  );
}
