import React, { createContext, useReducer, useEffect } from 'react';
import BookReducer from '../reducers/bookReducer';


export const BookContext = createContext();

const BookContextProvider = (props) => {

    const [books, dispatch] = useReducer(BookReducer, [], () => {
        const localDat = localStorage.getItem('books');
        return localDat ? JSON.parse(localDat) : [];
    });

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])

    console.log(books);
    return (

        <BookContext.Provider value={{ books, dispatch }} >
            {props.children}
        </BookContext.Provider >

    );
}

export default BookContextProvider;