import {StyleProp, TextStyle} from 'react-native';

export interface IBrand {
    header: StyleProp<TextStyle> & any;
    text: StyleProp<TextStyle> & any;
    subText: StyleProp<TextStyle> & any;
    subTextBold: StyleProp<TextStyle> & any;
    tiny: StyleProp<TextStyle> & any;
    tinyBold: StyleProp<TextStyle> & any;
    accentColor: string;
    primaryColor: string;
    secondaryColor: string;
    black: string;
}

export const Brand: IBrand = {
    header: {
        fontSize: 64,
        // fontWeight: 'bold',
        color: 'black',
        fontFamily: 'Montserrat-SemiBold'
    },
    text: {
        fontSize: 24,
        color: 'black',
        fontFamily: 'Montserrat-Medium'
    },
    subText: {
        fontSize: 18,
        fontFamily: 'Montserrat-Medium'
    },
    subTextBold: {
        fontSize: 18,
        fontFamily: 'Montserrat-Bold'
    },
    tiny: {
        fontSize: 14,
        fontFamily: 'Montserrat-Medium'
    },
    tinyBold: {
        fontSize: 14,
        fontFamily: 'Montserrat-Bold'
    },
    accentColor: '#11e0c4',
    primaryColor: '#f9f9f9',
    secondaryColor: 'lightgrey',
    black: '#000000',
};
