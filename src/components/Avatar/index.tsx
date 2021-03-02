import React from "react";

import { Avatar as AvatarS } from "./styles";

export interface AvatarProps {
  src?: string;
  alt?: string;
}

const Avatar: React.FC<AvatarProps> = ({ alt, src }) => {
  return <AvatarS src={src || ""} alt={alt || "image"} />;
};

export default Avatar;
