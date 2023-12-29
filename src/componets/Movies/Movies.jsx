import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./Movies.scss";
import { Prelolder } from "../Prelolder";

const Movies = ({ value }) => {
  const [movieData, setMovieData] = useState(null);
  const apiKey = "341c710c";

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${value}&apikey=${apiKey}`
      );

      setMovieData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [value]);

  useEffect(() => {
    if (value.length >= 4) {
      fetchData();
    } else {
      setMovieData(null);
    }
  }, [value, fetchData]);

  return (
    <div className="cart">
      {movieData && movieData.Search ? (
        <div className="container">
          <h2 className="cart__title">Результаты поиска: {value}</h2>
          <div className="cart__items">
            {movieData.Search.map((movie) => (
              <div className="cart__item" key={movie.imdbID}>
                <div className="cart__item-name">
                  <p className="cart__item-genre">Жанр: {movie.Type}</p>
                  <p className="cart__item-title">Название: {movie.Title}</p>
                  <p className="cart__item-year">Год выпуска: {movie.Year}</p>
                </div>
                <a
                  data-fancybox="gallery"
                  href="https://www.youtube.com/watch?v=0yHx5VWTFTM&ab_channel=Fanclan"
                >
                  <img
                    className="cart__item-img"
                    src={movie.Poster}
                    alt={movie.Title}
                    onError={(e) => {
                      
                      e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA9NI10CpsjHizlDH0kHaNPhRztI7L85AJ_g&usqp=CAU";
                    }}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          {value.length >= 5 ? (
            <p className="progress__title">
              По вашему запросу ничего не найдено: видите текст поиск латинецей 
            </p>
          ) : (
            <p className="progress__title">
              Введите не менее 5 символов для начала поиска латинецей 
            </p>
          )}
          <Prelolder />
        </>
      )}
    </div>
  );
};

export { Movies };
