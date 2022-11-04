import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Brand } from '../constants/Brand'
import { TouchableOpacity } from 'react-native-gesture-handler';

interface IProps {
    title: string;
    isHighlighted: boolean;
    onClick?: () => void;
}

const CustomButton = (props: IProps) => {
  return (
    <Pressable style={{
        marginEnd: 5
    }}
        onPress={props.onClick}
    >
      <Text
        style={{
            backgroundColor: props.isHighlighted ? Brand.accentColor : Brand?.primaryColor,
            padding: 10,
            borderRadius: 10,
            color:  !props.isHighlighted ? Brand.accentColor : Brand?.primaryColor,
            fontWeight: 'bold'
        }}
      >{props.title}</Text>
    </Pressable>
  )
}

export default CustomButton