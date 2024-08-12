// lib/onedrive.js
export async function getOneDriveAccessToken() {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("client_id", process.env.ONEDRIVE_CLIENT_ID);
  urlencoded.append("scope", "https://graph.microsoft.com/.default");
  urlencoded.append("refresh_token", process.env.ONEDRIVE_REFRESH_TOKEN);
  urlencoded.append("grant_type", "refresh_token");
  urlencoded.append("client_secret", process.env.ONEDRIVE_CLIENT_SECRET);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
    timeout: 10000 
  };

  try {
    console.log("Requesting OneDrive access token...");
    const response = await fetch("https://login.microsoftonline.com/common/oauth2/v2.0/token", requestOptions);
    console.log("Response received:", response);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    console.log("Access token received:", result.access_token);
    return {
      token: result.access_token,
      expires_in: result.expires_in 
    };
  } catch (error) {
    console.error("Error fetching OneDrive access token:", error);
    throw error;
  }
}