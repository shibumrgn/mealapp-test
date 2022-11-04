import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IRecipe} from '../../interfaces/IRecipe';
import {Brand} from '../../constants/Brand';

interface IProps {
    recipe: IRecipe;
}

const SquareRecipe = (props: IProps) => {
    return (
        <View style={styles?.parent}>
            <Image
                source={{
                    uri: props.recipe?.strMealThumb,
                }}
                style={styles.image}
            />
            <Text style={styles.title} numberOfLines={2}>
                {props.recipe?.strMeal}
            </Text>
        </View>
    );
};

export default SquareRecipe;

const width = Dimensions.get('window').width / 2.5;
const styles = StyleSheet.create({
    parent: {
        width: width,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        width: width - 20,
        height: width - 20,
        borderRadius: width - 10,
    },
    title: {...Brand.text, textAlign: 'center'},
});
