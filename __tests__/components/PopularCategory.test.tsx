import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import PopularCategory from '../../src/components/PopularCategory';
jest.useFakeTimers();
jest.mock('axios');

it('renders correctly', () => {
    const render = renderer.create(<PopularCategory />)?.toJSON();
    expect(render).toMatchSnapshot();
});
