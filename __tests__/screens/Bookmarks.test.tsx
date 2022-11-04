import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Bookmarks from '../../src/screens/Bookmarks';
jest.useFakeTimers();
jest.mock('axios');

it('renders correctly', () => {
    const render = renderer.create(<Bookmarks />)?.toJSON();
    expect(render).toMatchSnapshot();
});
