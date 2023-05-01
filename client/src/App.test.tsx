import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';
import '@testing-library/jest-dom';

describe('App', () => {
  test('renders the primary search app bar', () => {
    render(
      <Provider store={store}>
          <App />
      </Provider>
    );
    const primarySearchAppBar = screen.getByRole('banner');
    expect(primarySearchAppBar).toBeInTheDocument();
  });

});
