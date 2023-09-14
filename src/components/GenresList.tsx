import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenresList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((gen) => (
          <ListItem key={gen.id} paddingY="5px">
            <HStack>
              <Image
                objectFit={"cover"}
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(gen.image_background)}
              ></Image>
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                fontWeight={gen.id === selectedGenreId ? "bold" : "normal"}
                variant={"link"}
                fontSize="lg"
                onClick={() => onSelectGenre(gen)}
              >
                {gen.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
