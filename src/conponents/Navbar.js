import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
    const { books } = useContext(BookContext)
    return (
        <nav className='navbar'>
            <h3>Book reading list</h3>
            <p>You have {books.length} books to read</p>
        </nav>
    );
}

export default Navbar;