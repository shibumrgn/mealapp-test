
import 'react-native';
import React from 'react'; 
import renderer from 'react-test-renderer';
import SampleRecipes from '../../SampleRecipes.json'
import { IRecipe } from '../../../src/interfaces/IRecipe';
import VideoRecipe from '../../../src/components/recipes/VideoRecipe';
 
 it('renders correctly', () => {
   const render = renderer.create(<VideoRecipe recipe={SampleRecipes[0] as any as IRecipe}/>)?.toJSON();
   expect(render).toMatchSnapshot();
 });
 