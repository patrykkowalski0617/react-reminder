import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { render } from '@testing-library/react';
import UsersProvider from 'providers/UsersProvider';

export const renderWithProviders = (children) =>
  render(
    <ThemeProvider theme={theme}>
      <UsersProvider>{children}</UsersProvider>
    </ThemeProvider>
  );
