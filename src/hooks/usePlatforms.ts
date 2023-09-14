import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// quick way to get all platfroms as a static data
// const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });

// the common way to fetch data

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });
};

export default usePlatforms;
