import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Brand} from '../constants/Brand';
import CustomInput from '../components/CustomInput';
import TrendingNow from '../components/TrendingNow';
import PopularCategory from '../components/PopularCategory';
import FilledLayout from '../components/layouts/FilledLayout';

const Home = () => {
    return (
        <FilledLayout>
            <View style={styles.view}>
                <Text style={styles.heading}>Good afternoon,{'\n'}Guest!</Text>
                <CustomInput
                    iconName="search-outline"
                    placeholder="Search Recipes"
                />
            </View>
            <TrendingNow />
            <PopularCategory />
        </FilledLayout>
    );
};

export default Home;

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        paddingBottom: 100,
        marginBottom: 0,
    },
    view: {
        padding: 20,
    },
    heading: {
        ...Brand.text,
        marginBottom: 20,
    },
});
