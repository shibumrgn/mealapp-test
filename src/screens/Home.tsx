import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Brand } from '../constants/Brand';
import CustomInput from '../components/CustomInput';
import TrendingNow from '../components/TrendingNow';
import PopularCategory from '../components/PopularCategory';

const Home = () => {
  return (
    <ScrollView style={{
        flex: 1,
        paddingBottom: 100,
        marginBottom: 60
    }}>
        <View
            style={{
                padding: 20
            }}
        >
            <Text
                style={{
                    ...Brand.header,
                    marginBottom: 20
                }}
            >
                    Good afternoon,{"\n"}Guest!
            </Text>
            <CustomInput
                iconName='search-outline'
                placeholder='Search Recipes'
            />
        </View>
        <TrendingNow/>
        <PopularCategory/>
    </ScrollView>
  )
}

export default Home;