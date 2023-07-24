import { Heading } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";

interface Props {
  genre?: string;
  platform?: string;
}

const GameHeading = ({ genre, platform }: Props) => {
  return (
    <Heading fontSize={"5xl"} marginY={5} as="h1">
      {platform || ""} {genre || ""} Games
    </Heading>
  );
};

export default GameHeading;
