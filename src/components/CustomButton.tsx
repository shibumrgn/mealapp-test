import {
    Text,
    Pressable,
    StyleSheet,
    ViewStyle,
    StyleProp,
    TextStyle,
} from 'react-native';
import React from 'react';
import {Brand} from '../constants/Brand';

interface IProps {
    title: string;
    isHighlighted?: boolean;
    onClick?: () => void;
    containerStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
    isBordered?: boolean;
}

const CustomButton = (props: IProps) => {
    const styles = StyleSheet.create({
        parent: {
            backgroundColor: props.isHighlighted
                ? Brand.accentColor
                : Brand?.primaryColor,
            padding: 10,
            borderRadius: 10,
            borderColor: Brand.accentColor,
            borderWidth: props?.isBordered ? 1 : 0
        },
        title: {
            ...Brand.tiny,
            color: !props.isHighlighted
                ? Brand.accentColor
                : Brand?.primaryColor,
            fontWeight: 'bold',
            textAlign: 'center',
        },
    });
    return (
        <Pressable
            style={{...styles.parent, ...(props.containerStyle as any)}}
            onPress={props.onClick}>
            <Text style={{...styles.title, ...(props.titleStyle as any)}}>
                {props.title}
            </Text>
        </Pressable>
    );
};

export default CustomButton;
