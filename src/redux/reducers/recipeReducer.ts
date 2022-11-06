import {createSlice} from '@reduxjs/toolkit';
import {IRecipe} from '../../interfaces/IRecipe';

interface RecipeState {
    savedRecipes: IRecipe[];
}

export const recipeSlice = createSlice({
    name: 'recipe',
    initialState: {
        savedRecipes: [],
    } as RecipeState,
    reducers: {
        saveRecipe: (state, action) => {
            state.savedRecipes.push(action.payload);
        },
        removeRecipe: (state, action) => {
            state.savedRecipes = state?.savedRecipes?.filter(
                sr => sr?.idMeal !== action?.payload?.idMeal,
            );
        },
    },
});

export const RecipeActions = recipeSlice.actions;
export default recipeSlice.reducer;
