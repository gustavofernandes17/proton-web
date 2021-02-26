import React from 'react';

import Header from '../../components/Header'; 
import { MdDelete, MdPublic } from 'react-icons/md'
import { IconButton } from '@material-ui/core';

import {Container} from './styles';


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
            </Header>
        </Container>
    )
}

export default Editor; 
