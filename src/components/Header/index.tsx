
import React from 'react';

import { Header as HeaderC,HeaderOptionsWrapper, } from './styles';
import {IconButton} from '@material-ui/core'

import {MdMenu, MdSettings, MdMoreHoriz, MdBackspace} from 'react-icons/md';

import Avatar from '../Avatar' 
import Searchbar from '../Searchbar';

const Header: React.FC = ({children, back}) => {
  return (
    <HeaderC>
    <IconButton>
      {back ? <MdMenu /> : <MdBackspace />}
    </IconButton>
    <HeaderOptionsWrapper>
      <Searchbar />
      {children}
      <IconButton>
        <Avatar/>
      </IconButton>
      <IconButton>
        <MdMoreHoriz />
      </IconButton>
    </HeaderOptionsWrapper>
  </HeaderC>
  );
}

export default Header;