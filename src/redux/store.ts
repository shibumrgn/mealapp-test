import {configureStore} from '@reduxjs/toolkit';
import recipeReducer from './reducers/recipeReducer';
import sessionReducer from './reducers/sessionReducer';

export default configureStore({
    reducer: {
        session: sessionReducer,
        recipe: recipeReducer,
    },
});
