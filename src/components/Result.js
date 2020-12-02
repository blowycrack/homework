import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const Result = ({movie}) => {
    const {
        addMovieToWatchlist, watchlist
    } = useContext(GlobalContext);

    let storedMovie = watchlist.find(o => o.id === movie.id);
    const watchlistDisabled = storedMovie ? true : false;

    return (
        <div className="result-cont">
            <div className="poster-cont">
                {movie.poster_path ? (
                    <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={`${movie.title} Poster`}
                    />
                ) : (
                    <div className="no-img-content">
                        <img src={`https://london.webformance.hu/hirlevelek/elt/index.php?img=di.bak/unknown.png`}
                        alt={`Unknown Poster`} />
                    </div>
                )}
            </div>
            <div className="info">
                <div className="header">
                    <h3 className="title">{movie.title}</h3>
                    <h4 className="release">
                        {movie.release_date ? movie.release_date.substring(0, 4) : '-'}
                    </h4>
                </div>

                <div className="controls">
                    <button className="btn" disabled={watchlistDisabled} onClick={() => addMovieToWatchlist(movie)}>
                        Add to Watchlist
                    </button>
                </div>
            </div>
        </div>
    )
}