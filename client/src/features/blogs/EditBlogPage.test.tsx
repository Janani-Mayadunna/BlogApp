import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EditBlogPage from './EditBlogPage';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../../store/store';
import '@testing-library/jest-dom';

describe('EditBlogPage', () => {
  test('renders the page title correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <EditBlogPage />
        </MemoryRouter>
      </Provider>
    );
    const heading = screen.getByRole('heading', { name: 'Update blog -' });
    expect(heading).toBeInTheDocument();
  });

  test('renders a form with the correct fields', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <EditBlogPage />
        </MemoryRouter>
      </Provider>
    );
    const titleInput = screen.getByLabelText('Insert title');
    const contentInput = screen.getByLabelText('Insert content');
    const imageInput = screen.getByLabelText('Image URL');

    expect(titleInput).toBeInTheDocument();
    expect(contentInput).toBeInTheDocument();
    expect(imageInput).toBeInTheDocument();
  });

  test("renders the Update Blog button", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <EditBlogPage />
        </MemoryRouter>
      </Provider>
    );
    const updateButton = screen.getByRole("button", { name: "Update Blog" });
    expect(updateButton).toBeInTheDocument();
  });

  test("renders the Delete Blog button", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <EditBlogPage />
        </MemoryRouter>
      </Provider>
    );
    const deleteButton = screen.getByRole("button", { name: "Delete Blog" });
    expect(deleteButton).toBeInTheDocument();
  });

});
