import { Dimensions, Image, ScrollView, StyleSheet, Text } from 'react-native'
import React, { useState } from 'react'
import { Brand } from '../constants/Brand'
import { IRecipe } from '../interfaces/IRecipe'
import CustomInput from '../components/CustomInput'
import { useNavigation } from '@react-navigation/native'
import Toolbar from '../components/Toolbar'
import DetailItem from '../components/recipes/DetailItem'
import Section from '../components/Section'

const AddRecipe = () => {
    const navigate = useNavigation();
    const [recipe, setRecipe] = useState<IRecipe>();
    return (
        <ScrollView
            style={{
                flex: 1,
                padding: 20
            }}
        >
            <Toolbar/>
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
            <DetailItem
                title='Serves'
                iconName='people-outline'
                value='2'
            />
            <DetailItem
                title='Cook time (mins)'
                iconName='time-outline'
                value='45'
            />
            <Section
                title='Ingredients'
            >

            </Section>
        </ScrollView>
    )
}

export default AddRecipe

const styles = StyleSheet.create({})