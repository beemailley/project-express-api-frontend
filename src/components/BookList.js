import React, { useState, useEffect } from 'react';

export const BookList = () => {
  const [booklist, setBooklist] = useState([])
  const [loading, setLoading] = useState(false)
  const [readStatus, setReadStatus] = useState('')

  const handleListSelection = (event) => {
    setReadStatus(event.target.value)
  }

  useEffect(() => {
    setLoading(true);

    fetch(`https://project-express-api-jonj3fewvq-lz.a.run.app/bridgetsbooks?readstatus=${readStatus}`)
      .then((response) => response.json())
      .then((data) => setBooklist(data.body.bridgetsBooks))
      .catch((error) => console.log(error))
      .finally(() => { setLoading(false) })
  }, [readStatus])
  return (
    <div>
      {loading && (<p>loading</p>)}
      {!loading && (
        <>
          <h1>Book List</h1>
          <p>Select the read-status for the books you want to see:</p>
          <select onChange={handleListSelection}>
            <option value="">Please Select One:</option>
            <option value="">All Books</option>
            <option value="currently-reading">Currently Reading</option>
            <option value="read">Read</option>
            <option value="to-read">To Read</option>
            <option value="did-not-finish">DNFed</option>
          </select>
          <p>There are {booklist.length} books in this category.</p>
          <section>
            {booklist.map((book) => {
              return (
                <div key={book.ISBN}>
                  <p>{book.Title}</p>
                  <p>By: {book.Author}</p>
                  <p>-----------------</p>
                </div>
              )
            })}
          </section>
        </>
      )}
    </div>
  )
}