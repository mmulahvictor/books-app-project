import React, { useState } from 'react';
import axios from 'axios';
import './Style.css'

const Book = () => {
    const [ searchItem, setSearchItem ] = useState( "" );
    const [ books, setBooks ] = useState( { items: [] } );
    const onInputChange = e => {
        setSearchItem( e.target.value );
    };

    let url = `https://www.googleapis.com/books/v1/volumes`;

    const fetchBooks = async () => {
        const result = await axios.get( `${ url }?q=${ searchItem }` );
        setBooks( result.data );
    };

    const onSubmitHandler = e => {
        e.preventDefault();
        fetchBooks();
    };

    const bookAuthors = authors => {
        if ( authors.length <= 2 )
        {
            authors = authors.join( " and " );
        } else if ( authors.length > 2 )
        {
            let lastAuthor = " and " + authors.slice( -1 );
            authors.pop();
            authors = authors.join( ", " );
            authors += lastAuthor;
        }
        return authors;
    };

    return (
        <section>
            <div>
                <h2>Welcome to the book library!</h2>
                <img src="https://sbooks.net/wp-content/uploads/2021/10/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.jpg" alt="" className='image' />
                
            </div>
            
            
            <form onSubmit={ onSubmitHandler }>
                <label>
                    <span className='lable'>Search for books:</span><br />
                    <input
                        type="search"
                        placeholder="Search for your book"
                        value={ searchItem }
                        onChange={ onInputChange }
                    />
                    <button type="submit" className='btn'>Search</button>
                </label>
            </form>
            <ul>
                { books.items.map( ( book, index ) => {
                    return (
                        <li key={ index }>
                            <div>
                                <img
                                    alt={ `${ book.volumeInfo.title } book` }
                                    src={ `http://books.google.com/books/content?id=${ book.id
                                        }&printsec=frontcover&img=1&zoom=1&source=gbs_api` }
                                />
                                <div>
                                    <h3>{ book.volumeInfo.title }</h3>
                                    <p>{ bookAuthors( book.volumeInfo.authors ) }</p>
                                    <p>{ book.volumeInfo.publishedDate }</p>
                                </div>
                            </div>
                            <hr />
                        </li>
                    );
                } ) }
            </ul>
        </section>
    );
};

export default Book;