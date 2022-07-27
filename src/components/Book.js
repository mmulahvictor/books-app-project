import React, {useState} from 'react';
import Card from './Card';
import axios from "axios"

const Book = () => {
    const [ search, setSearch ] = useState( "" );
    const [ bookData, setData ] = useState( [] );
    const searchBook = ( event ) => {
        if ( event.key === "Enter" )
        {
            // eslint-disable-next-line no-useless-concat
            axios.get( 'https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU' + '&maxResults=40' )
                .then( res => setData( res.data.items ) )
                .catch( err => console.log( err ) );
        }
    }
    return (
        <>
            <div className='header'>
                <div className='row'>
                    <h1>Good friends, good books, and a sleepy conscience: <br/> this is the ideal life.</h1>
                </div>
                <div className="row1">
                    <h2>Search for a book</h2>
                    <div className="find">
                        <input type="text" placeholder='Enter the Book name' value={search} onChange={e=>setSearch(e.target.value)} onKeyPress={searchBook} />
                        <button><i className="fas fa-search"></i></button>
                    </div>
                    <img src="./images/download (1).jpeg" alt="" />
                </div>
            </div>
            <div className='container'>
                { <Card book={bookData} /> }
            </div>
        </>
    );
}

export default Book;