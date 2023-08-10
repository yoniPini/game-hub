import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// quick way to get all genres as a static data
const useGenres = () => ({ data: genres, isLoafin: false, error: null });

// the common way to fetch data
// const useGenres = () => useData<Genre>("/genres");

export default useGenres;
