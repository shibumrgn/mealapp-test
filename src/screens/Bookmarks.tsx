import {View, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {IRecipe} from '../interfaces/IRecipe';
import FilledLayout from '../components/layouts/FilledLayout';
import VideoRecipe from '../components/recipes/VideoRecipe';
import CustomButton from '../components/CustomButton';
import Toolbar from '../components/Toolbar';

const Bookmarks = () => {
    const savedRecipes: IRecipe[] = useSelector(
        (state: any) => state?.recipe?.savedRecipes,
    );

    const [index, setIndex] = useState<0 | 1>(0);

    useEffect(() => {
        console.log('saved', savedRecipes);
    }, [savedRecipes]);

    return (
        <FilledLayout>
            <Toolbar title="Saved Recipes" />
            <View style={styles.container}>
                <View style={styles.tab}>
                    <CustomButton
                        title="Videos"
                        containerStyle={styles.buttonContainer}
                        isHighlighted={index === 0}
                        onClick={() => setIndex(0)}
                    />
                    <CustomButton
                        title="Recipes"
                        containerStyle={styles.buttonContainer}
                        isHighlighted={index === 1}
                        onClick={() => setIndex(1)}
                    />
                </View>
                {savedRecipes?.map(savedRecipe => (
                    <VideoRecipe recipe={savedRecipe} />
                ))}
            </View>
        </FilledLayout>
    );
};

export default Bookmarks;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    tab: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginBottom: 20,
    },
    buttonContainer: {flex: 1, margin: 5},
});
