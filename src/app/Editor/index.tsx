import React, { useState } from "react";

import Header from "../../components/Header";
import HeaderTextButton from "../../components/HeaderTextButton";

import {
  Container,
  Cover,
  FileHeaderContainer,
  EditableTitle,
  EditableTopic,
  Properties,
  PropertyWrapper,
  PropertyName,
} from "./styles";

import CustomEditor from "./CustomEditor";

import { MdBookmark, MdCheck } from "react-icons/md";

import UnsplashMenu from "../../components/UnsplashMenu";
import { useEditorContext } from "../../contexts/editor.context";

const EditorPage: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const {
    topic,
    title,
    setTitle,
    setTopic,
    coverUrl,
    isPublished,
    setIsPublished,
  } = useEditorContext();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <UnsplashMenu anchorEl={anchorEl} onClose={handleClose} />
      <Header haveBack title={title} isEditor>
        <HeaderTextButton onClick={handleClick}>Delete</HeaderTextButton>
        <HeaderTextButton onClick={handleClick}>Change cover</HeaderTextButton>
        <HeaderTextButton onClick={() => setIsPublished(!isPublished)}>
          {isPublished ? <MdCheck /> : null}Published
        </HeaderTextButton>
      </Header>
      <Cover src={coverUrl} />

      <FileHeaderContainer>
        <EditableTitle
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Untitled"
        ></EditableTitle>
        <Properties>
          <PropertyWrapper>
            <PropertyName>
              <MdBookmark size={18} style={{ marginRight: 15 }} />
              Topic
            </PropertyName>
            <EditableTopic
              placeholder="without topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            ></EditableTopic>
          </PropertyWrapper>
        </Properties>
      </FileHeaderContainer>
      <CustomEditor />
    </Container>
  );
};

export default EditorPage;
