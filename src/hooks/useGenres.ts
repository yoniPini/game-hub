import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// quick way to get all genres as a static data
// const useGenres = () => ({ data: genres, isLoading: false, error: null });

// the common way to fetch data
// const useGenres = () => useData<Genre>("/genres");

const apiClient = new APIClient<Genre>("/genres");
const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: genres.length, next: null, results: genres },
  });
};

export default useGenres;
