import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useMemo } from 'react'
import { Brand } from '../constants/Brand'
import Ionicons from 'react-native-vector-icons/Ionicons'

interface IProps {
    iconName?: string;
    placeholder?: string;
    borderColor?: string;
    containerColor?: string;
    isDisabled?: boolean;
}


const CustomInput = (props: IProps) => {


    const _renderIcon = useMemo(() => {
        if(!props.iconName) return null;
        return (<Ionicons
            name={props.iconName}
            size={24}
        />)
    }, [props.iconName])

    return (
        <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                borderColor: props.borderColor || 'lightgrey',
                borderRadius: 10,
                borderWidth: 1,
                paddingHorizontal: 10,
                marginBottom: 10,
                backgroundColor: props.containerColor
            }}
        >
            {_renderIcon}
            <TextInput
                placeholder={props.placeholder}
                editable={!props.isDisabled}
            />
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({})