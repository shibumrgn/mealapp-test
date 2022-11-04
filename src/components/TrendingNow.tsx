import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { IRecipe } from '../interfaces/IRecipe'
import axios from 'axios';
import VideoRecipe from './recipes/VideoRecipe';
import Section from './Section';

const TrendingNow = () => {

    const [recipes, setRecipes] = useState<IRecipe[]>([]);

    const _getTrendingRecipes = async () => {
        const response = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
        if(response?.data?.meals) {
            setRecipes(response.data?.meals);
        }
    }

    useEffect(() => {
      _getTrendingRecipes();
    }, []);
    

    return (
        <Section
            title='Trending Now 🔥'
            marginLeft={20}
        >
            {recipes?.map(recipe => <VideoRecipe key={recipe?.idMeal} recipe={recipe}/>)}
        </Section>
  )
};

export default TrendingNow;

const styles = StyleSheet.create({});