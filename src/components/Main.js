
import { Documentation } from 'components/Documentation';
import React from 'react';
import { BookList } from './BookList';
import { Footer } from './Footer';
import { Header } from './Header';

export const Main = () => {
  return (
    <section>
      <Header />
      <Documentation />
      <BookList />
      <Footer />
    </section>
  )
}