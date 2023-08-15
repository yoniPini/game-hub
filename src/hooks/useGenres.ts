import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import useData, { FetchResponse } from "./useData";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// quick way to get all genres as a static data
// const useGenres = () => ({ data: genres, isLoading: false, error: null });

// the common way to fetch data
// const useGenres = () => useData<Genre>("/genres");

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Genre>>("/genres")
        .then((response) => response.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: genres.length, results: genres },
  });
};

export default useGenres;
