import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IRecipe} from '../../interfaces/IRecipe';
import {Brand} from '../../constants/Brand';
const width = Dimensions.get('window').width / 2.5;
interface IProps {
    recipe: IRecipe;
}

const SquareRecipe = (props: IProps) => {
    return (
        <View style={styles?.parent}>
            <View
                style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={2}>
                    {props?.recipe?.strMeal}
                </Text>
                <View>
                    <Text>Time</Text>
                    <Text>10 Mins</Text>
                </View>
            </View>
            <Image
                source={{
                    uri: props.recipe?.strMealThumb,
                }}
                style={styles.image}
            />
        </View>
    );
};

export default SquareRecipe;

const styles = StyleSheet.create({
    parent: {
        width: width,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 5,
    },
    image: {
        width: width / 1.25,
        height: width / 1.25,
        borderRadius: width,
        borderColor: '#e5e5e5',
        borderWidth: 10,
        position: 'absolute',
    },
    title: {
        ...(Brand.tinyBold as Object),
        textAlign: 'center',
        marginBottom: 20,
        height: 40,
    },
    titleContainer: {
        backgroundColor: '#c4edec',
        width: '100%',
        borderRadius: 15,
        marginTop: width / 2,
        paddingTop: width / 3,
        paddingHorizontal: 10,
        paddingBottom: 10,
    }
});
