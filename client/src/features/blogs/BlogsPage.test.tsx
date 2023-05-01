import React from 'react';
import '@testing-library/jest-dom';
import { render  } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import { MemoryRouter } from 'react-router-dom';
import BlogsPage from './BlogsPage';
import CarouselF from '../../components/global/Carousel';
import FloatingActionButtons from '../../components/global/FloatingActionButtons';

describe('BlogsPage', () => {
  it('renders BlogsPage', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <BlogsPage />
        </MemoryRouter>
      </Provider>
    );
  });

  it('renders the carousel', () => {
    render(<CarouselF />);
  });

  it('renders floating action button', () => {
    render(
      <MemoryRouter>
        <FloatingActionButtons />
      </MemoryRouter>
    );
  });
});
