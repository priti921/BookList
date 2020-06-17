import React, { useContext } from 'react';
import { BookContext } from "../contexts/BookContext";
import Bookdetail from './Bookdetail'


const Booklist = () => {
    const { books } = useContext(BookContext);
    return books.length ? (
        <div className="book-list">
            <ul>
                {books.map(book => {
                    return <Bookdetail book={book} key={book.id} />
                })}
            </ul>
        </div>
    ) : <div className="empty">You finished all books</div >

}

export default Booklist;
