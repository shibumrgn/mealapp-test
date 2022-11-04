import { View, Text, Dimensions, Image } from 'react-native'
import React from 'react'
import { IRecipe } from '../../interfaces/IRecipe'
import { Brand } from '../../constants/Brand';

interface IProps {
    recipe: IRecipe;
}

const VideoRecipe = (props: IProps) => {
  return (
    <View
        style={{
            width: Dimensions.get('window').width * 0.75,
            marginEnd: 10
        }}
    >
        <Image source={{
            uri: props?.recipe?.strMealThumb
        }}
            style={{
                width: '100%',
                height: 200,
                marginBottom: 10,
                position: 'relative',
                borderRadius: 10,
                resizeMode: 'contain',
            }}
        />
        <View>
            <Text style={{...Brand.text, marginBottom: 10}}>{props.recipe?.strMeal}</Text>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
            >
                <Image
                    source={{
                        uri: 'https://picsum.photos/200/300'
                    }}
                    style={{
                        borderRadius: 32,
                        marginEnd: 5,
                        width: 32,
                        height: 32
                    }}
                />
                <Text style={Brand.subText}>By Shibu Murugan</Text>
            </View>
        </View>
        
    </View>
  )
}

export default VideoRecipe