
import 'react-native';
import React from 'react'; 
import renderer from 'react-test-renderer';
import CustomButton from '../../src/components/CustomButton';
 
 it('renders correctly', () => {
   const render = renderer.create(<CustomButton title='Test' isHighlighted/>)?.toJSON();
   expect(render).toMatchSnapshot();
 });
 