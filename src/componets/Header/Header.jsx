import React from "react";
import './header.scss';
import { Search } from "../Search/Search";

const Header = ({ movies, handleValue, btnSearch }) => {
  return (
    <header className="header">
      <div className="contaner">
        <div className="header__wrapper">
          <Search
            value={movies}
            onChange={handleValue}
            onKeyDown={btnSearch}
          />
        </div>
      </div>
    </header>
  );
};

export { Header };
