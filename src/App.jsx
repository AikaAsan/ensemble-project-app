import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import SearchInput from './components/SearchInput';
import ReactPaginate from 'react-paginate';
import Header from './components/Header';

function App() {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [pages, setPages] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const fetchMoviesHandler = async (searchValue, pages) => {
        setIsLoading(true);
        setError(null);

        try {
            const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=${
                import.meta.env.VITE_API_KEY
            }&type=movie&page=${pages}`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Something went wrong');
            }

            const data = await response.json();
            if (data.Search) {
                setMovies(data.Search);
                setTotalPages(Math.ceil(data.totalResults / 10));
                setPages(page);
            }
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    };

    const searchInputChangeHandler = (event) => {
        setSearchValue(event.target.value);
    };

    const PageClickHandler = (e) => {
        fetchMoviesHandler(searchValue, e.selected + 1);
    };

    useEffect(() => {
        fetchMoviesHandler(searchValue);
    }, [searchValue, pages]);

    let content = <p>Start typing to find a movie</p>;

    if (error) {
        content = <p>{error}</p>;
    }
    if (movies.length > 0) {
        content = <MovieList movies={movies} />;
    }

    if (isLoading) {
        content = <p>Loading...</p>;
    }
    return (
        <div className='container mx-auto'>
            <Header />
            <main>
                <SearchInput onChange={searchInputChangeHandler} />
                <section className='text-center text-3xl'>{content}</section>

                {movies.length > 0 && (
                    <ReactPaginate
                        previousLabel={'Back'}
                        nextLabel={'Next'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={totalPages}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={4}
                        onPageChange={PageClickHandler}
                        containerClassName={
                            'flex items-center justify-center mt-10 text-3xl gap-1'
                        }
                        pageClassName={
                            'px-4 py-4 cursor-pointer hover:bg-slate-500 rounded-lg'
                        }
                        activeLinkClassName={
                            'bg-slate-500 px-4 py-4 rounded-lg'
                        }
                        nextClassName={
                            'px-4 py-4 cursor-pointer hover:bg-slate-500 rounded-lg'
                        }
                        previousClassName={
                            'px-4 py-4 cursor-pointer hover:bg-slate-500 rounded-lg'
                        }
                    />
                )}
            </main>
        </div>
    );
}

export default App;
