import React, { useState } from 'react';
import axios from 'axios';

const Book = () => {
    const [ searchItem, setSearchItem ] = useState( "" );
    const onInputChange = ( e ) => {
        setSearchItem( e.target.value );
    };

    const url = `https://www.googleapis.com/books/v1/volumes`;
    const fetchBooks = async () => {
        const result = await axios.get( `${ API_URL }?q=${ searchTerm }` );
        console.log( result.data );
    }

    return (
        <section>
            <form onSubmit={ onSubmitHandle }>
                <label>
                    <span>Search for books</span>
                    <input type="search" placeholder="Search for your book" value={ searchItem } onChange={onInputChange} />
                    <button type="submit">Search</button>
                </label>
            </form>
        </section>
    );
};

export default Book;