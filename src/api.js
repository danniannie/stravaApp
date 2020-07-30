import axios from "axios";

const baseUrl = "https://www.strava.com";

export const fetchSegments = async (token) => {
  try {
    const { data } = await axios.get(`${baseUrl}/api/v3/segments/starred`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const authenticate = async (code) => {
  try {
    const { data } = await axios.post(`${baseUrl}/oauth/token`, {
      client_id: 51616,
      client_secret: "bd17d2c122df7d91ec9ad514dc35238436259fb5",
      code,
      grant_type: "authorization_code",
    });
    return data;
  } catch (err) {
    console.log("error", err);
  }
};
