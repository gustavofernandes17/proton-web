import React from "react";

import { ListItemText, ListItemIcon, ListItem } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export interface DrawerListItemProps {
  path: string;
  title: string;
  size: number;
  action?: Function;
}

const DrawerListItem: React.FC<DrawerListItemProps> = ({
  children,
  path,
  title,
  size,
  action,
}) => {
  const history = useHistory();

  const itemAction = action ? action : () => history.push(path);

  return (
    <ListItem style={{ width: size }} button onClick={() => itemAction()}>
      <ListItemIcon>{children}</ListItemIcon>
      <ListItemText>
        <span
          style={{
            fontWeight: 500,
            fontFamily: "Roboto",
            color: "#898989",
          }}
        >
          {title}
        </span>
      </ListItemText>
    </ListItem>
  );
};

export default DrawerListItem;
