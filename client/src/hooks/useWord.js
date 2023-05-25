import axios from "axios";
import useSWR from "swr";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export function useWord(word) {
  const { data, error, isLoading } = useSWR(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
  };
}
