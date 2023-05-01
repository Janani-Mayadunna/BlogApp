import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../../store/store';
import CreateBlogPage from './CreateBlogPage';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

describe('CreateBlogPage', () => {
  it('should render the CreateBlogPage component', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CreateBlogPage />
        </MemoryRouter>
      </Provider>
    );
    const heading = screen.getByRole('heading', { name: 'Create new blog' });
    expect(heading).toBeInTheDocument();
    // expect(screen.getByText('Create new blog')).toBeInTheDocument();
  });

  test('updates title field value when user types in it', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CreateBlogPage />
        </MemoryRouter>
      </Provider>
    );
    const titleInput = screen.getByLabelText('Insert title');
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      userEvent.type(titleInput, 'Test Title');
    });
    expect(titleInput).toHaveValue('Test Title');
  });

  test('updates content field value when user types in it', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CreateBlogPage />
        </MemoryRouter>
      </Provider>
    );
    const contentInput = screen.getByLabelText('Insert content');
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      userEvent.type(contentInput, 'Test Content');
    });
    expect(contentInput).toHaveValue('Test Content');
  });

  test('updates image field value when user types in it', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CreateBlogPage />
        </MemoryRouter>
      </Provider>
    );
    const imageInput = screen.getByLabelText('Image URL');
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      userEvent.type(imageInput, 'https://test.com/image.png');
    });
    expect(imageInput).toHaveValue('https://test.com/image.png');
  });
});
