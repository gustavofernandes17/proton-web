import React from 'react';
import { MdSearch } from 'react-icons/md';

import { Searchbar as SearchbarC} from './styles';

const Searchbar: React.FC = () => {
  return (
    <>
    
    <SearchbarC 
      placeholder="find an explanation"
    />
    <MdSearch 
      style={{position: 'relative',  left: -30}}
      color="#666"
    />
    </>
  );
}

export default Searchbar;