import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Brand } from '../Brand'

interface IProps {
    title?: string;
    children: JSX.Element[];
}

const Section = (props: IProps) => {
  return (
    <View
        style={{
            marginBottom: 30
        }}
    >
        {
            props.title && <Text style={{
                ...Brand.header,
                marginLeft: 20,
                marginBottom: 20
            }}>
                {props.title}
            </Text>
        }
        <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                paddingLeft: 20
            }}
        >
            {props.children}
        </ScrollView>
    </View>
  )
}

export default Section