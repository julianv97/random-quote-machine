import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log("Error fetching data: ", error);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);

  return { data, isLoading, isError };
};

export default useFetch