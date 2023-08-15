import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient, { FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// quick way to get all platfroms as a static data
// const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });

// the common way to fetch data
// const usePlatforms = () => useData<Platform>('/platforms/lists/parents')

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    // apiClient
    //   .get<FetchResponse<Platform>>("/platforms/lists/parents")
    //   .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
