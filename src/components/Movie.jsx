import React from 'react';

function Movie(props) {
    return (
        <div className='text-center flex flex-col justify-between items-center shadow-md '>
            <img
                className='w-full h-85 object-cover sm:object-center sm:ml-44 md:ml-0 transition transform hover:scale-110'
                src={props.poster}
                alt='movie poster'
            ></img>

            <div className='font-bold text-black-300 w-full'>
                <p className='px-2 text-center mb-1 text-2xl'>{props.title}</p>
                <p className='px-2 text-center mb-2 text-xl'>
                    {' '}
                    ({props.releaseDate}){' '}
                </p>
                <button
                    className='w-full rounded-lg py-2 bg-slate-300 hover:bg-slate-500'
                    type='button'
                >
                    watch
                </button>
            </div>
        </div>
    );
}

export default Movie;
