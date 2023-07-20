import useGenres, { Genre } from "../hooks/useGenres";

const GenresList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((gen) => (
        <li key={gen.id}>{gen.name}</li>
      ))}
    </ul>
  );
};

export default GenresList;
