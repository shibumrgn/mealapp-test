
import 'react-native';
import React from 'react'; 
import renderer from 'react-test-renderer';
import TrendingNow from '../../src/components/TrendingNow';
jest.useFakeTimers();
jest.mock("axios");
 
it('renders correctly', () => {
    const render = renderer.create(<TrendingNow/>)?.toJSON();
    expect(render).toMatchSnapshot();
});
 