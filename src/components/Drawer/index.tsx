import React from "react";

import { Drawer, List, IconButton } from "@material-ui/core";
import {
  MdExplore,
  MdFolderShared,
  MdKeyboardArrowLeft,
  MdStyle,
} from "react-icons/md";

import { BiLogOut } from "react-icons/bi";

import DrawerListItem from "../DrawerListItem";
import { Container, Name, NameWrapper, Email, Header } from "./styles";
import { useAuth } from "../../contexts/auth.context";

import Logo from "../../static/logo.svg";

export interface DrawerProps {
  open: boolean;
  setOpen: Function;
}

const LIST_ITEM_SIZE = 320;

const CustomDrawer: React.FC<DrawerProps> = ({ open, setOpen }) => {
  const toggleDrawer = (open: any) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  const { userProfile, handleLogout } = useAuth();
  if (!userProfile) return <div></div>;

  return (
    <Drawer
      anchor="left"
      onClose={toggleDrawer(false)}
      open={open}
      style={{ width: 500 }}
    >
      <Container>
        <div>
          <Header>
            <NameWrapper>
              <Name>{userProfile.name}</Name>
              <Email>{userProfile.email}</Email>
            </NameWrapper>
            <IconButton onClick={() => setOpen(false)}>
              <MdKeyboardArrowLeft size={24} />
            </IconButton>
          </Header>

          <List>
            <DrawerListItem
              title="Explore"
              path="/explorer"
              size={LIST_ITEM_SIZE}
            >
              <MdExplore size={24} />
            </DrawerListItem>
            <DrawerListItem title="Explanations" path="/" size={LIST_ITEM_SIZE}>
              <MdFolderShared size={24} />
            </DrawerListItem>
            <DrawerListItem
              title="Flashcards"
              path="/flashcards"
              size={LIST_ITEM_SIZE}
            >
              <MdStyle size={24} />
            </DrawerListItem>

            <DrawerListItem
              title="Log out"
              path="/"
              size={LIST_ITEM_SIZE}
              action={handleLogout}
            >
              <BiLogOut size={24} />
            </DrawerListItem>
          </List>
        </div>
        <img
          src={Logo}
          alt=""
          style={{
            height: 40,
            margin: 20,
          }}
        />
      </Container>
    </Drawer>
  );
};

export default CustomDrawer;
