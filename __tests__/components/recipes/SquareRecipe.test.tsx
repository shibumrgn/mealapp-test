
import 'react-native';
import React from 'react'; 
import renderer from 'react-test-renderer';
import SquareRecipe from '../../../src/components/recipes/SquareRecipe';
import SampleRecipes from '../../SampleRecipes.json'
import { IRecipe } from '../../../src/interfaces/IRecipe';
 
 it('renders correctly', () => {
   const render = renderer.create(<SquareRecipe recipe={SampleRecipes[0] as any as IRecipe}/>)?.toJSON();
   expect(render).toMatchSnapshot();
 });
 