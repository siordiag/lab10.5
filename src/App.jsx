import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const books = [
  { id: 1, title: 'The Secret History', author: 'Donna Tartt', isRead: false },
  { id: 2, title: 'Ninth House', author: 'Leigh Bardugo', isRead: true },
  { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isRead: true },
  { id: 4, title: 'Little Women', author: 'Louisa May Alcott', isRead: true }
];

function Header() {
  return <h1>Gabby's Reading List</h1>;
}


function BookButton() {
  function visitPage() {
    window.location.href='https://www.goodreads.com/choiceawards/best-books-2024';
  }

  return (
    <button onClick={visitPage}>Visit Goodreads</button>
  );
}

function BookList() {
  const listBooks = books.map(book =>
    <li
      key={book.id}
      style={{
        color: book.isRead ? 'green' : 'red'
      }}
    >
      {book.title}
    </li>
  );
  return (
    <ul>{listBooks}</ul>
  )
}



function App() {
  return (
    <>
      <div>
      <Header />
      <BookList />
      <BookButton />
      </div>
    </>
  )
}

export default App
