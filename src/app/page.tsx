// "use client";

// import React, { useEffect, useState } from "react";
import { getOneDriveAccessToken } from "../lib/onedrive";

function Page() {

  const { token } = await getOneDriveAccessToken();

  const raw_token = await getOneDriveAccessToken();

  console.log( "/n/n/n/n" , "token :" ,token , "raw responded" ,raw_token)
  // const [token, setToken] = useState("");

  // useEffect(() => {
  //   const fetchToken = async () => {
  //     try {
  //       const { token } = await getOneDriveAccessToken();
  //       setToken(token);
  //     } catch (error) {
  //       console.error("Error fetching token:", error);
  //     }
  //   };

    // fetchToken();
  // }, []);

  return (
    <div>
      <h1>OneDrive Access Token</h1>
      <p>{token}</p>
    </div>
  );
}

export default Page;
