import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Brand} from '../../constants/Brand';

interface IProps {
    children?: JSX.Element | JSX.Element[];
}

const FilledLayout = (props: IProps) => {
    return (
        <ScrollView style={styles.container}>
            {props.children}
            <View
                style={{
                    height: 100,
                }}
            />
        </ScrollView>
    );
};

export default FilledLayout;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: Brand.primaryColor,
        flex: 1,
    },
});
