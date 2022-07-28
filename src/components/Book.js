import React, { useState } from 'react';
import axios from 'axios';

const Book = () => {
    const [ searchItem, setSearchItem ] = useState( "" );
    const [books, setBooks]=useState({items: []})
    const onInputChange = ( e ) => {
        setSearchItem( e.target.value );
    };

    const url = `https://www.googleapis.com/books/v1/volumes`;
    const fetchBooks = async () => {
        const result = await axios.get( `${ url }?q=${ searchItem }` );
        setBooks( result.data );
    }

    function onSubmitHandle ( e ) {
        e.preventDefault()
        fetchBooks()
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
            <ul>
                {
                    books.items.map( ( book, index ) => {
                        return (
                            <li key={index}>
                                <div>
                                    <img src="{`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}" alt="{`${book.volumeInfo.title} book`}" />
                                    <div>
                                        <h3>{ book.volumeInfo.title }</h3>
                                        <p>{ book.volumeInfo.publishedDate }</p>
                                    </div>
                                </div><hr />
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    );
};

export default Book;