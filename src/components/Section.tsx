import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {Brand} from '../constants/Brand';

interface IProps {
    title?: string;
    children: JSX.Element[];
    marginLeft?: number;
}

const Section = (props: IProps) => {
    const styles = StyleSheet.create({
        parent: {
            marginBottom: 30,
        },
        title: {
            ...Brand.header,
            marginLeft: props.marginLeft,
            marginBottom: 20,
        },
        scroll: {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            paddingLeft: 20,
        },
    });
    return (
        <View style={styles.parent}>
            {props.title && <Text style={styles.title}>{props.title}</Text>}
            <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal
                style={styles.scroll}>
                {props.children}
            </ScrollView>
        </View>
    );
};

export default Section;
