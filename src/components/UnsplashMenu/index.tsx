import React, { useState, useEffect } from "react";

import { ApiResponse } from "unsplash-js/dist/helpers/response";
import { Photos } from "unsplash-js/dist/methods/search/types/response";

import {
  ImageContainer,
  ImageHeader,
  Image,
  ImageWrapper,
  Link,
  Searchbar,
} from "./styles";
import { Menu } from "@material-ui/core";

import unsplash from "../../services/unsplash";
import { useEditorContext } from "../../contexts/editor.context";
import HeaderTextButton from "../HeaderTextButton";

export interface UnsplashMenuProps {
  anchorEl: HTMLElement | null;
  onClose: any;
}

const UnsplashMenu: React.FC<UnsplashMenuProps> = ({ anchorEl, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const [images, setImages] = useState<Photos>();

  const { setCoverUrl } = useEditorContext();

  useEffect(() => {
    async function fetchInitialData() {
      try {
        const images = await unsplash.search.getPhotos({
          query: "science",
          perPage: 30,
        });
        setImages(images.response);
        console.log(images);
      } catch (err) {
        console.log(err);
      }
    }
    fetchInitialData();
  }, []);

  async function handleSearch(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key !== "Enter") return;

    try {
      const images = await unsplash.search.getPhotos({
        query: searchQuery,
        perPage: 30,
      });
      setImages(images.response);
      console.log(images);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Menu
      keepMounted
      anchorEl={anchorEl}
      onClose={onClose}
      open={Boolean(anchorEl)}
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          outline: "none",
          height: "100%",
        }}
      >
        <ImageHeader>
          <HeaderTextButton
            onClick={() => {
              setCoverUrl("");
              onClose();
            }}
          >
            Remove
          </HeaderTextButton>
        </ImageHeader>
        <Searchbar
          placeholder="search for an image on unsplash"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleSearch}
        />
        <ImageContainer>
          {images?.results.map((image) => {
            return (
              <ImageWrapper>
                <Image
                  src={image.urls.small}
                  alt="image"
                  key={image.created_at}
                  onClick={() => {
                    setCoverUrl(image.urls.full);
                    onClose();
                  }}
                ></Image>
                <span
                  style={{
                    width: 100,
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  By{" "}
                  <Link href={image.user.portfolio_url || ""}>
                    {image.user.name}
                  </Link>
                </span>
              </ImageWrapper>
            );
          })}
        </ImageContainer>
      </div>
    </Menu>
  );
};

export default UnsplashMenu;
