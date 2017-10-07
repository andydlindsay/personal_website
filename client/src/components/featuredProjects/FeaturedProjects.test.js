import React from 'react';
import ReactDOM from 'react-dom';
import FeaturedProjects from './FeaturedProjects';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FeaturedProjects />, div);
});
