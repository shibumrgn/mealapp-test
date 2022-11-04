import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Brand } from '../../constants/Brand'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomInput from '../CustomInput'

interface IProps {
    title: string,
    iconName: string,
    value: string
}

const DetailItem = (props: IProps) => {
  return (
        <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                padding: 10,
                borderRadius: 10,
                marginBottom: 10,
                backgroundColor: Brand?.secondaryColor
            }}
        >
            <View style={{
                padding: 10,
                marginEnd: 10,
                borderRadius: 10,
                backgroundColor: Brand.primaryColor
            }}>
                <Ionicons name={props.iconName} size={20}/>
            </View>

            <Text style={{
                ...Brand.subText,
                flex: 1,
                fontWeight: 'bold',
                color: 'black'
            }}>{props.title}</Text>
            <CustomInput
                containerColor='white'
                placeholder={props.value}
                isDisabled
            />
        </View>
  )
}

export default DetailItem

const styles = StyleSheet.create({})