import React, { useState } from "react";

import { Header as HeaderC, HeaderOptionsWrapper } from "./styles";
import { IconButton } from "@material-ui/core";

import { MdMenu, MdMoreHoriz, MdKeyboardBackspace } from "react-icons/md";

import Avatar from "../Avatar";
import Searchbar from "../Searchbar";

import Drawer from "../Drawer";
import { useAuth } from "../../contexts/auth.context";

import { useHistory } from "react-router-dom";
import CustomDrawer from "../Drawer";

export interface HeaderProps {
  title?: string;
  haveBack?: boolean;
  isEditor?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  children,
  title,
  haveBack,
  isEditor,
}) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const { userProfile } = useAuth();
  const history = useHistory();

  return (
    <>
      <CustomDrawer open={openDrawer} setOpen={setOpenDrawer} />
      <HeaderC>
        <div style={{ display: "flex", alignItems: "center" }}>
          {!haveBack ? (
            <IconButton
              onClick={() => setOpenDrawer(true)}
              onKeyDown={() => setOpenDrawer(false)}
            >
              <MdMenu />
            </IconButton>
          ) : (
            <IconButton onClick={() => history.goBack()}>
              <MdKeyboardBackspace />
            </IconButton>
          )}

          {isEditor ? (
            title ? (
              <span
                style={{
                  fontWeight: 500,
                  color: "#111",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  width: 100,
                }}
              >
                {title}
              </span>
            ) : (
              <span
                style={{
                  fontWeight: 500,
                  color: "#ccc",
                }}
              >
                Untitled
              </span>
            )
          ) : null}
        </div>
        <HeaderOptionsWrapper>
          {!haveBack ? (
            <>
              <Searchbar />

              <IconButton>
                <Avatar src={userProfile?.image_url} alt="user profile image" />
              </IconButton>
            </>
          ) : null}
          {children}
          <IconButton>
            <MdMoreHoriz />
          </IconButton>
        </HeaderOptionsWrapper>
      </HeaderC>
    </>
  );
};

export default Header;
