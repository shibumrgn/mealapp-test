import {StyleSheet, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Brand} from '../constants/Brand';
import {useNavigation} from '@react-navigation/native';

const Toolbar = () => {
    const navigate = useNavigation();
    return (
        <View style={styles.parent}>
            <Ionicons
                name="arrow-back-outline"
                size={32}
                style={Brand.header}
                onPress={() => navigate.goBack()}
            />
        </View>
    );
};

export default Toolbar;

const styles = StyleSheet.create({
    parent: {
        flexDirection: 'row',
    },
});
