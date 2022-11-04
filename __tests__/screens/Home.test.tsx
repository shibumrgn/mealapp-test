import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../src/screens/Home';
jest.useFakeTimers();
jest.mock('axios');

it('renders correctly', () => {
    const render = renderer.create(<Home />)?.toJSON();
    expect(render).toMatchSnapshot();
});
