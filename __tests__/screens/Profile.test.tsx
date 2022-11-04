import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Profile from '../../src/screens/Profile';
jest.useFakeTimers();
jest.mock('axios');

it('renders correctly', () => {
    const render = renderer.create(<Profile />)?.toJSON();
    expect(render).toMatchSnapshot();
});
