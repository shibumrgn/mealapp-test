import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IRecipe } from '../../interfaces/IRecipe'
import { Brand } from '../../constants/Brand';

interface IProps {
    recipe: IRecipe;
}

const SquareRecipe = (props: IProps) => {
    const width = Dimensions.get('window').width / 2.5;
  return (
    <View
        style={{
            width: width,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}
    >
        <Image
            source={{
                uri: props.recipe?.strMealThumb
            }}
            style={{
                width: width - 20,
                height: width - 20,
                borderRadius: width - 10
            }}
        />
        <Text style={{...Brand.text, textAlign: 'center'}} numberOfLines={2}>{props.recipe?.strMeal}</Text>
    </View>
  )
}

export default SquareRecipe

const styles = StyleSheet.create({})