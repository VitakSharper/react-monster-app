import React from 'react';
import classes from './SearchBox.module.scss';

const SearchBox = props => {
    const {placeholder, handleChange} = props;
    return (
        <input
            className={classes.SearchBox}
            type='text'
            placeholder={placeholder}
            onChange={handleChange}/>
    )
};

export default SearchBox;
