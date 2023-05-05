
import { Documentation } from 'components/Documentation';
import React from 'react';
import { BookList } from './BookList';

export const Main = () => {
  return (
    <section>
      <Documentation />
      <BookList />
    </section>
  )
}