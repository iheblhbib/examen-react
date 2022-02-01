import React from 'react';

const SearchBox = (props) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 br3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='Recherche un personne'
        onChange={props.searchChange}
      />
    </div>
  );
}

export default SearchBox;