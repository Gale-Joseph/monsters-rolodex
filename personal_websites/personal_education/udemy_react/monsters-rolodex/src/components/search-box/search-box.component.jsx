import React from 'react';
import './search-box.styles.css';

/*What's going on? 
    1. You can destructure props by using {} in leiu of props var
    2. You must supply a placeholder/onChange props to run this fx
    3. OnChange uses an event object that must be drilled down in 
        order to get the value of input. e.target.value
*/

export const SearchBox = ({ placeholder,handleChange })=>(
    <input 
        className='search'
        type='search' 
        placeholder={placeholder}
        onChange= {handleChange}
    />
);