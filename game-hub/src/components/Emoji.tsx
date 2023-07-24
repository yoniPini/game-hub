import React from "react";
import bullsEye from "../assets/GameHub Resources/Emojis/bulls-eye.webp";
import thumsUp from "../assets/GameHub Resources/Emojis/bulls-eye.webp";
import meh from "../assets/GameHub Resources/Emojis/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";
interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumsUp, alt: "recommended", boxSize: "25px" },
    5: { src: meh, alt: "execptional", boxSize: "25px" },
  };
  return <Image marginTop={1} {...emojiMap[rating]} />;
};

export default Emoji;
