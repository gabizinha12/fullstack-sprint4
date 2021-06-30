import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const jsonResult = await res.json();
        setResult(jsonResult);
        setLoading(false);
        setError(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
        setError(e);
      }
    };
    fetchData();
  }, [url]);

  return [result, loading, error];
};
