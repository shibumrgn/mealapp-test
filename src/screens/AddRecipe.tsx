import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Brand } from '../Brand'
import VideoRecipe from '../components/recipes/VideoRecipe'
import { IRecipe } from '../interfaces/IRecipe'
import CustomInput from '../components/CustomInput'
import { useNavigation } from '@react-navigation/native'

const AddRecipe = () => {
    const navigate = useNavigation();
  return (
    <ScrollView
        style={{
            flex: 1,
            padding: 20
        }}
    >
        <View style={{
            flexDirection: 'row'
        }}>
            <Ionicons name='arrow-back-outline' size={32} style={Brand.header}
                onPress={() => navigate.goBack()}
            />
        </View>
        <Text
            style={{...Brand.header, marginVertical: 20}}
        >
            Create Recipe
        </Text>
        <Image
            source={{
                uri: 'https://picsum.photos/200/300',
            }}
            style={{
                width: '100%',
                height: Dimensions.get('window')?.width * (9/16),
                borderRadius: 10,
                marginBottom: 20,
            }}
        />
        <CustomInput
            borderColor={Brand.accentColor}
            placeholder={'Chicken pakoras'}
        />
    </ScrollView>
  )
}

export default AddRecipe

const styles = StyleSheet.create({})