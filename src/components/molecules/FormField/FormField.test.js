import React from 'react';
import FormField from './FormField';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('Form Field', () => {
  it('Renders the component', () => {
    renderWithProviders(<FormField label="label" name="name" id="id"></FormField>);
  });
});
