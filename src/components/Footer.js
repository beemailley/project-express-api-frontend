import React from 'react';
import { Wrapper } from 'globalstyles/Wrapper.styles';
import { CenteredText, Link } from 'globalstyles/Text.styles';

export const Footer = () => {
  return (
    <Wrapper>
      <div>
        <CenteredText>API created and page designed by <Link href="https://bridgetmailley.com/">Bridget</Link>.</CenteredText>
        <CenteredText>Technigo Web Development Bootcamp 2023.</CenteredText>
      </div>
    </Wrapper>
  )
}