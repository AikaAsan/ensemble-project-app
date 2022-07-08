import React from 'react';
import Movie from './Movie';

function MovieList(props) {
    return (
        props.movies?.length > 0 && (
            <div className='grid lg:grid-cols-5 md:grid-cols-3 gap-8 '>
                {props.movies.map((movie) => (
                    <Movie
                        key={movie.imdbID}
                        poster={movie.Poster}
                        title={movie.Title}
                        releaseDate={movie.Year}
                    />
                ))}
            </div>
        )
    );
}

export default MovieList;
