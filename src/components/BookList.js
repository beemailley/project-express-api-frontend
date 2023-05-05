import { Card } from 'globalstyles/Card.styles';
import { CenteredText, SecondaryHeader } from 'globalstyles/Text.styles';
import { Wrapper } from 'globalstyles/Wrapper.styles';
import React, { useState, useEffect } from 'react';

export const BookList = () => {
  const [booklist, setBooklist] = useState([])
  const [loading, setLoading] = useState(false)
  const [readStatus, setReadStatus] = useState('currently-reading')

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
    <Wrapper>
      {loading && (<p>loading</p>)}
      {!loading && (
        <>
          <SecondaryHeader>Book List</SecondaryHeader>
          <CenteredText>Select the read-status for the books you want to see:</CenteredText>
          <select onChange={handleListSelection}>
            <option value="">Please Select One:</option>
            <option value="">All Books</option>
            <option value="currently-reading">Currently Reading</option>
            <option value="read">Read</option>
            <option value="to-read">To Read</option>
            <option value="did-not-finish">DNFed</option>
          </select>
          <CenteredText>There are {booklist.length} books in this category.</CenteredText>
          <>
            {booklist.map((book) => {
              return (
                <Card key={book.ISBN}>
                  <p>{book.Title}</p>
                  <p>By: {book.Author}</p>
                </Card>
              )
            })}
          </>
        </>
      )}
    </Wrapper>
  )
}