import { StyleProp, TextStyle } from "react-native";


export interface IBrand {
    header: StyleProp<TextStyle> & any,
    text: StyleProp<TextStyle> & any,
    subText: StyleProp<TextStyle>,
    accentColor: string,
    primaryColor: string;
}

export const Brand: IBrand = {
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    subText: {
        fontSize: 14
    },
    accentColor: '#11e0c4',
    primaryColor: '#ffffff'
}