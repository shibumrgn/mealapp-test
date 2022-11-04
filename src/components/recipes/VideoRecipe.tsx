import {View, Text, Dimensions, Image, StyleSheet} from 'react-native';
import React from 'react';
import {IRecipe} from '../../interfaces/IRecipe';
import {Brand} from '../../constants/Brand';

interface IProps {
    recipe: IRecipe;
}

const VideoRecipe = (props: IProps) => {
    return (
        <View style={styles.parent}>
            <Image
                source={{
                    uri: props?.recipe?.strMealThumb,
                }}
                style={styles.image}
            />
            <View>
                <Text style={styles.title}>{props.recipe?.strMeal}</Text>
                <View style={styles.profile}>
                    <Image
                        source={{
                            uri: 'https://picsum.photos/200/300',
                        }}
                        style={styles.profileImage}
                    />
                    <Text style={Brand.subText}>By Shibu Murugan</Text>
                </View>
            </View>
        </View>
    );
};

export default VideoRecipe;

const styles = StyleSheet.create({
    parent: {
        width: Dimensions.get('window').width * 0.75,
        marginEnd: 10,
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        position: 'relative',
        borderRadius: 10,
        resizeMode: 'contain',
    },
    profile: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        borderRadius: 32,
        marginEnd: 5,
        width: 32,
        height: 32,
    },
    title: {...Brand.text, marginBottom: 10},
});
