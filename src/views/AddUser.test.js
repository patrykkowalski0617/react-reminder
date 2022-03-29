import React from 'react';
import AddUser from './AddUser';
import Dashboard from './Dashboard';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('AddUser', () => {
  it('Renders the component', () => {
    renderWithProviders(
      <>
        <Dashboard />
        <AddUser />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Grażka' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '50%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '3.5' } });
    fireEvent.click(screen.getByText('Add'));
    screen.getAllByText('Grażka');
  });
});
