import {Dimensions, Image, ScrollView, StyleSheet, Text} from 'react-native';
import React from 'react';
import {Brand} from '../constants/Brand';
import CustomInput from '../components/CustomInput';
import Toolbar from '../components/Toolbar';
import DetailItem from '../components/recipes/DetailItem';

const AddRecipe = () => {
    return (
        <ScrollView style={styles.parent}>
            <Toolbar />
            <Text style={styles.heading}>Create Recipe</Text>
            <Image
                source={{
                    uri: 'https://picsum.photos/200/300',
                }}
                style={styles.image}
            />
            <CustomInput
                borderColor={Brand.accentColor}
                placeholder={'Chicken pakoras'}
            />
            <DetailItem title="Serves" iconName="people-outline" value="2" />
            <DetailItem
                title="Cook time (mins)"
                iconName="time-outline"
                value="45"
            />
        </ScrollView>
    );
};

export default AddRecipe;

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        padding: 20,
    },
    heading: {...Brand.header, marginVertical: 20},
    image: {
        width: '100%',
        height: Dimensions.get('window')?.width * (9 / 16),
        borderRadius: 10,
        marginBottom: 20,
    },
});
