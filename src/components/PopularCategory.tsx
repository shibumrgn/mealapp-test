import React, {useEffect, useState} from 'react';
import Section from './Section';
import axios from 'axios';
import {ICategory} from '../interfaces/ICategory';
import CustomButton from './CustomButton';
import {IRecipe} from '../interfaces/IRecipe';
import SquareRecipe from './recipes/SquareRecipe';
import {StyleSheet} from 'react-native';

const PopularCategory = () => {
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<ICategory>();
    const [categoryRecipes, setCategoryRecipes] = useState<IRecipe[]>([]);

    const _getPopularCategories = async () => {
        const response = await axios.get(
            'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
        );
        if (response?.data?.meals) {
            setCategories(response.data?.meals);
        }
    };

    const _getCategoryRecipes = async () => {
        const response = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory?.strCategory}`,
        );
        if (response?.data?.meals) {
            setCategoryRecipes(response.data?.meals);
        }
    };

    useEffect(() => {
        _getPopularCategories();
    }, []);

    useEffect(() => {
        if (categories?.length > 0) {
            setSelectedCategory(categories[0]);
        }
    }, [categories?.length]);

    useEffect(() => {
        _getCategoryRecipes();
    }, [selectedCategory]);

    return (
        <>
            <Section title="Popular Category" marginLeft={20}>
                {categories?.map(category => (
                    <CustomButton
                        key={category?.strCategory}
                        title={category?.strCategory}
                        isHighlighted={
                            category?.strCategory ===
                            selectedCategory?.strCategory
                        }
                        containerStyle={styles.buttons}
                        onClick={() => setSelectedCategory(category)}
                    />
                ))}
            </Section>
            <Section>
                {categoryRecipes?.map(recipe => (
                    <SquareRecipe key={recipe?.idMeal} recipe={recipe} />
                ))}
            </Section>
        </>
    );
};

export default PopularCategory;

const styles = StyleSheet.create({
    buttons: {
        marginEnd: 5,
        minWidth: 100,
    },
});
