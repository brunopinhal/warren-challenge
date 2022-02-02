import React from 'react';
import { Container } from './Header.styles';
import Logo from '../../assets/logo.svg';

const Header = (): JSX.Element => {
  return (
    <Container>
      <Logo aria-label="Warren Logo" />
    </Container>
  );
};

export default Header;
