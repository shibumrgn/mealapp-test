import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useMemo} from 'react';
import {IRecipe} from '../../interfaces/IRecipe';
import {Brand} from '../../constants/Brand';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {RecipeActions} from '../../redux/reducers/recipeReducer';

interface IProps {
    recipe: IRecipe;
    width?: number | string;
}

const VideoRecipe = (props: IProps) => {
    const dispatch = useDispatch();
    const savedRecipes: IRecipe[] = useSelector(
        (state: any) => state.recipe?.savedRecipes,
    );

    const _saveRecipe = () => {
        dispatch(RecipeActions.saveRecipe(props.recipe));
    };

    const _removeRecipe = () => {
        dispatch(RecipeActions.removeRecipe(props.recipe));
    };

    const _isBookMarked = useMemo(
        () =>
            savedRecipes?.find(
                (sr: IRecipe) => props?.recipe?.idMeal === sr?.idMeal,
            ),
        [props.recipe, savedRecipes],
    );

    const styles = StyleSheet.create({
        parent: {
            width: props?.width || '100%',
            marginEnd: 10,
            marginBottom: 20,
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
        title: {...Brand.subText, marginBottom: 10},
    });

    return (
        <View style={styles.parent}>
            <Image
                source={{
                    uri: props?.recipe?.strMealThumb,
                }}
                style={styles.image}
            />
            <View
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    margin: 10,
                    borderRadius: 32,
                    height: 32,
                    width: 32,
                }}>
                <Ionicons
                    name="bookmark-outline"
                    size={18}
                    color={_isBookMarked ? Brand.accentColor : Brand.black}
                    onPress={!_isBookMarked ? _saveRecipe : _removeRecipe}
                />
            </View>
            <View>
                <Text style={styles.title}>{props.recipe?.strMeal}</Text>
                <View style={styles.profile}>
                    <Image
                        source={{
                            uri: 'https://picsum.photos/200/300',
                        }}
                        style={styles.profileImage}
                    />
                    <Text style={Brand.tiny}>By Shibu Murugan</Text>
                </View>
            </View>
        </View>
    );
};

export default VideoRecipe;
