import React from 'react';
import { SearchIcon } from '@heroicons/react/solid';

function SearchInput(props) {
    return (
        <div className='my-10'>
            <div className='w-full max-w-lg grid plave-items-center mx-auto'>
                <label htmlFor='search' className='sr-only'></label>
                <div className='relative'>
                    <div className='pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center'>
                        <SearchIcon
                            className='h-7 w-6 text-gray-400'
                            aria-hidden='true'
                        />
                    </div>
                    <input
                        data-testid='searchInput'
                        id='search'
                        name='search'
                        className='block w-full bg-white-700 border border-gray-300 rounded-md py-2 pl-10 pr-3 text-base placeholder-black-400 focus:outline-none focus:bg-white focus:border-gray-300 focus:ring-white focus:text-gray-900 focus:placeholder-gray-500 
                        sm:text-3xl'
                        placeholder='Search for a movie'
                        type='search'
                        // value={props.value}
                        onChange={props.onChange}
                    />
                </div>
            </div>
        </div>
    );
}

export default SearchInput;
