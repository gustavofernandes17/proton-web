import React, { createContext, useContext, useState } from "react";

export interface EditorContextData {
  content: any;
  setContent: Function;
  title: string;
  setTitle: Function;
  topic: string;
  setTopic: Function;
  coverUrl: string;
  setCoverUrl: Function;
  isPublished: boolean;
  setIsPublished: Function;
}

const editorContext = createContext<EditorContextData>({} as EditorContextData);

export const useEditorContext = () => {
  const context = useContext(editorContext);

  return context;
};

const EditorContextProvider: React.FC = ({ children }) => {
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [content, setContent] = useState([]);
  const [isPublished, setIsPublished] = useState(true);

  return (
    <editorContext.Provider
      value={{
        title,
        content,
        topic,
        setContent,
        setTopic,
        setCoverUrl,
        coverUrl,
        setTitle,
        isPublished,
        setIsPublished,
      }}
    >
      {children}
    </editorContext.Provider>
  );
};

export default EditorContextProvider;
