import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Brand} from '../constants/Brand';
import {useNavigation} from '@react-navigation/native';

interface IProps {
    isBackEnabled?: boolean;
    title: string;
}

const Toolbar = (props: IProps) => {
    const navigate = useNavigation();
    return (
        <View style={styles.parent}>
            {props.isBackEnabled && (
                <Ionicons
                    name="arrow-back-outline"
                    size={20}
                    style={styles.icon}
                    onPress={() => navigate.goBack()}
                />
            )}
            <Text style={Brand.text}>{props.title}</Text>
        </View>
    );
};

export default Toolbar;

const styles = StyleSheet.create({
    parent: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },
    icon: {
        fontSize: 32,
        color: 'black',
        marginRight: 5
    }
});
