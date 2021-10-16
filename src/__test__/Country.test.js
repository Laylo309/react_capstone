import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Country from '../components/Country';

describe('Country test', () => {
  test('The spinner appears in the Country view', () => {
    const { container } = render(<Country />);
    const linkElement = container.querySelector('.spinner');
    expect(linkElement).toBeInTheDocument();
  });

  test('Test of Snapshot', () => {
    const tree = renderer.create(<Country />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
