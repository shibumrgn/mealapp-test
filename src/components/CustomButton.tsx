import {Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {Brand} from '../constants/Brand';

interface IProps {
    title: string;
    isHighlighted: boolean;
    onClick?: () => void;
}

const CustomButton = (props: IProps) => {
    const styles = StyleSheet.create({
        parent: {
            marginEnd: 5,
        },
        title: {
            backgroundColor: props.isHighlighted
                ? Brand.accentColor
                : Brand?.primaryColor,
            padding: 10,
            borderRadius: 10,
            color: !props.isHighlighted
                ? Brand.accentColor
                : Brand?.primaryColor,
            fontWeight: 'bold',
        },
    });
    return (
        <Pressable style={styles.parent} onPress={props.onClick}>
            <Text style={styles.title}>{props.title}</Text>
        </Pressable>
    );
};

export default CustomButton;
