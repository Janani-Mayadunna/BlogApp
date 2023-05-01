import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import LoginPage from './LoginPage';
import store from '../../store/store';
import { BrowserRouter } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';

test('renders login form', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    </Provider>
  );
  const emailInput = screen.getByLabelText('E-mail');
  const passwordInput = screen.getByLabelText('Password');
  const loginButton = screen.getByRole('button', { name: 'Login' });
  const signUpLink = screen.getByText('New here? Sign Up');

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
  expect(signUpLink).toBeInTheDocument();

  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });
  fireEvent.click(loginButton);

  // You can add more assertions here to test the behavior of your component after clicking the login button
});
