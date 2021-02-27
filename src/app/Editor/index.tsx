import React from 'react';

import Header from '../../components/Header'; 
import { MdDelete, MdPublic, MdImage } from 'react-icons/md'
import { IconButton } from '@material-ui/core';

import {Container,
    Cover,
    FileHeaderContainer,
    EditableTitle,
    Editor as EditorC,
    EditableTopic
} from './styles';


const Editor: React.FC = () => {
    return (
        <Container>
            <Header>
                <IconButton>
                    <MdDelete/>
                </IconButton>
                <IconButton>
                    <MdPublic />
                </IconButton>
                <IconButton>
                    <MdImage />
                </IconButton>
            </Header>
            <Cover 
                src="https://images.unsplash.com/photo-1614186981972-8aff75a55306?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
            
            <FileHeaderContainer>
                <EditableTitle
                    placeholder="Untitled"
                >

                </EditableTitle>
                <EditableTopic
                    placeholder="without topic"
                >
                </EditableTopic>
            </FileHeaderContainer>
            <EditorC
                placeholder="start typing..."
            />

            
        </Container>
    )
}

export default Editor; 
