import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import SingleBlogPage from './SingleBlogPage';
import store from '../../store/store';
import '@testing-library/jest-dom';

describe('SingleBlogPage', () => {
//   const singleBlog = {
//     _id: '123',
//     title: 'Test Blog',
//     image: 'https://testblogimage.com',
//     content: 'Test blog content',
//   };

//   test('renders the single blog page correctly', () => {
//     render(
//       <Provider store={store}>
//         <MemoryRouter>
//           <SingleBlogPage />
//         </MemoryRouter>
//       </Provider>
//     );
//     const heading = screen.getByRole('heading', { name: singleBlog.title });
//     expect(heading).toBeInTheDocument();
//     const image = screen.getByAltText('blog_image');
//     expect(image).toBeInTheDocument();
//     const content = screen.getByText(singleBlog.content);
//     expect(content).toBeInTheDocument();
//   });

  test('renders the edit blog button correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <SingleBlogPage />
        </MemoryRouter>
      </Provider>
    );
    const editButton = screen.getByRole('button', { name: 'Edit' });
    expect(editButton).toBeInTheDocument();
  });
});
