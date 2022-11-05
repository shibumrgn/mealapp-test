import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface IProps {
    children?: JSX.Element | JSX.Element[]
}

const FilledLayout = (props: IProps) => {
  return (
    <View
        style={styles.container}
    >
        {props.children}
    </View>
  )
}

export default FilledLayout

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
    }
})