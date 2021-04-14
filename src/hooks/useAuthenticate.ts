import { useEffect, useState } from "react";
import * as api from "../api";

export const useAuthenticate = (code: string) => {
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<api.ResponseObject>();

  useEffect(() => {
    if (!code) return;

    const getToken = async () => {
      const response = await api.authenticate(code);
      if (response !== undefined) {
        setData(response);
      } else {
        setError(true);
      }
    };
    getToken();
  }, [code]);

  return { error, data };
};
