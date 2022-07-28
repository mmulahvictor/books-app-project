import React from 'react';

const Book = () => {
    return (
        <section>
            <form>
                <label>
                    <span>Search for books</span>
                    <input type="search" placeholder="Search for your book.,"/>
                    <button type="submit">Search</button>
                </label>
            </form>
        </section>
    );
};

export default Book;