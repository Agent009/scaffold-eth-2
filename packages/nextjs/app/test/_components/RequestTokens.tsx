"use client";

import { useState } from "react";
import { getServerUrl } from "@utils/api";
import { constants } from "@utils/constants";

export function RequestTokens(params: { address: string }) {
  const [data, setData] = useState<{ result: boolean }>();
  const [isLoading, setLoading] = useState(false);

  const body = { address: params.address };

  if (isLoading) return <p>Requesting tokens from API...</p>;
  if (!data)
    return (
      <button
        className="btn btn-active btn-neutral"
        onClick={() => {
          setLoading(true);
          fetch(getServerUrl(constants.routes.server.mintTokens), {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          })
            .then(res => res.json())
            .then(data => {
              setData(data);
              setLoading(false);
            });
        }}
      >
        Request tokens
      </button>
    );

  return (
    <div>
      <p>Result from API: {data.result ? "worked" : "failed"}</p>
    </div>
  );
}
