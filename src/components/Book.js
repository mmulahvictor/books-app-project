import React, { useState } from 'react';

const Book = () => {
    const [ searchItem, setSearchItem ] = useState( "" );
    const onInputChange = ( e ) => {
        setSearchItem( e.target.value );
    };
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