import platforms from "../data/platforms";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

// quick way to get all platfroms as a static data
const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });

// the common way to fetch data
// const usePlatforms = () => useData<Platform>('/platforms/lists/parents')

export default usePlatforms;
