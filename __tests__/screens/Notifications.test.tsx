import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Notifications from '../../src/screens/Notifications';
jest.useFakeTimers();
jest.mock('axios');

it('renders correctly', () => {
    const render = renderer.create(<Notifications />)?.toJSON();
    expect(render).toMatchSnapshot();
});
