import React from 'react';
import { render } from '@testing-library/react-native';
//import { Title } from '../src/components/Title';
import {categories, recentMenu} from '../src/assets/data/data.json';
import { Home } from '../src/screens/Home';

describe('App', () => {
  test('should show the number of titles that exist in categories', () => {
    const {getAllByTestId} = render(<Home/>);
    expect( getAllByTestId('title').length ).toBe(categories.length);
  });

  test('Should show a Menu with recentMenu items', () => {
    const {getAllByTestId} = render(<Home/>);
    expect( getAllByTestId('menuScrollView').length ).toBe(2);
  });

});
