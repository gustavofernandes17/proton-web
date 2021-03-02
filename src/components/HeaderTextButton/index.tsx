import React from "react";

import { HeaderButton } from "./styles";

export interface HeaderTextButtonProps {
  onClick:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}

const HeaderTextButton: React.FC<HeaderTextButtonProps> = ({
  children,
  onClick,
}) => {
  return <HeaderButton onClick={onClick}>{children}</HeaderButton>;
};

export default HeaderTextButton;
