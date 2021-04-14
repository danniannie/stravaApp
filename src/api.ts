import axios from "axios";

const baseUrl = "https://www.strava.com";

export interface Segment {
  id: number;
  resource_state: number;
  name: string;
  activity_type: string;
  distance: number;
  average_grade: number;
  maximum_grade: number;
  elevation_high: number;
  elevation_low: number;
  start_latlng: number[];
  end_latlng: number[];
  climb_category: number;
  city: string;
  state: string;
  country: string;
  private: boolean;
  hazardous: boolean;
  starred: boolean;
  created_at: Date;
  updated_at: Date;
  total_elevation_gain: number;
  map: any;
  effort_count: number;
  athlete_count: number;
  star_count: number;
  athlete_segment_stats: any;
}

export const fetchSegments = async (
  token: string | undefined
): Promise<Segment | undefined> => {
  try {
    const { data } = await axios.get(`${baseUrl}/api/v3/segments/starred`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (err) {
    return err;
  }
};

export interface ResponseObject {
  token_type: string;
  expires_at: number;
  expires_in: number;
  refresh_token: string;
  access_token: string;
  athlete: any;
}

export const authenticate = async (
  code: string
): Promise<ResponseObject | undefined> => {
  try {
    const { data } = await axios.post(`${baseUrl}/oauth/token`, {
      client_id: 51616,
      client_secret: "bd17d2c122df7d91ec9ad514dc35238436259fb5",
      code,
      grant_type: "authorization_code",
    });
    return data;
  } catch (err) {
    return err;
  }
};
