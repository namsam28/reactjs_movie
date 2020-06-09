import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";

function Movie({year, title, summary, poster,genres}){
    return (
        <div className="movie">
            <img className="movie__poster" src={poster} alt={title}/>
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <p className="movie__year">{year}</p>
                <p className="movie__summary">{summary.slice(0,140)}...</p>
                <ul className="movie__genres">
                    {
                        genres.map((item,index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        </div>
        );
}

Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;