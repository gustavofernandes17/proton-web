import React from "react";
import EditorJs from "react-editor-js";
import { useEditorContext } from "../../../contexts/editor.context";

import { EDITOR_JS_TOOLS } from "./tools";

const CustomEditor: React.FC = () => {
  const { setContent } = useEditorContext();
  return <EditorJs tools={EDITOR_JS_TOOLS}></EditorJs>;
};

export default CustomEditor;
