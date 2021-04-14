import { useEffect, useState } from "react";
import * as api from "../api";

export const useSegments = (token: string | null) => {
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<api.Segment>();

  useEffect(() => {
    if (!token) return;

    const getToken = async () => {
      const response = await api.fetchSegments(token);
      if (response !== undefined) {
        setData(response);
      } else {
        setError(true);
      }
    };
    getToken();
  }, [token]);

  return { segmentError: error, segmentData: data };
};
