import React from 'react';


const Search = ({value,onChange,onKeyDown}) => {
    return (
        <input
            type="text"
            className="header__search"
            placeholder='Поиск'
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    );
};

export { Search };
