import React, {useEffect, useState} from 'react';
import {IRecipe} from '../interfaces/IRecipe';
import axios from 'axios';
import VideoRecipe from './recipes/VideoRecipe';
import Section from './Section';
import {Dimensions} from 'react-native';

const TrendingNow = () => {
    const [recipes, setRecipes] = useState<IRecipe[]>([]);

    const _getTrendingRecipes = async () => {
        const response = await axios.get(
            'https://www.themealdb.com/api/json/v1/1/search.php?f=a',
        );
        if (response?.data?.meals) {
            setRecipes(response.data?.meals);
        }
    };

    useEffect(() => {
        _getTrendingRecipes();
    }, []);

    return (
        <Section title="Trending Now 🔥" marginLeft={20}>
            {recipes?.map(recipe => (
                <VideoRecipe
                    key={recipe?.idMeal}
                    recipe={recipe}
                    width={Dimensions.get('window').width * 0.75}
                />
            ))}
        </Section>
    );
};

export default TrendingNow;
