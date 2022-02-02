import React from 'react';

import { GlobalStyle } from './styles/global.styles';
import Header from './components/Header';

export default function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  );
}
