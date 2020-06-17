import React from 'react';
import BookContextProvider from './contexts/BookContext';
import Navbar from './conponents/Navbar';
import Booklist from './conponents/Booklist';
import BookForm from './conponents/BookForm';


function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <Booklist />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
