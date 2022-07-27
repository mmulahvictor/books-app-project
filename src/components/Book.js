import React from 'react';
import Card from './Card';

function Book () {
    return (
        <>
            <div className='header'>
                <div className='row'>
                    <h1>Good friends, good books, and a sleepy conscience: <br/> this is the ideal life.</h1>
                </div>
                <div className="row1">
                    <h2>Search for a book</h2>
                    <div className="find">
                        <input type="text" placeholder='Enter the Book name' />
                        <button><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    <img src="../images/download (1).jpeg" alt="" />
                </div>
            </div>
            <div>
                { <Card /> }
            </div>
        </>
    );
}

export default Book;