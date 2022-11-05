import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../components/CustomButton';
import { Brand } from '../constants/Brand';
import { useNavigation } from '@react-navigation/native';
import { Route } from '../constants/Route';

const SplashScreen = () => {

    const navigation = useNavigation();

    const _guestEnter = () => {
        navigation.navigate(Route.HOME, {});
    }

  return (
    <View style={styles.parent}>
        <LinearGradient colors={['#00000000', '#00000000', '#000000']} style={styles.gradientOverlay}/>
        <Image
            style={styles.backgroundImage}
            source={{
                uri: "https://loremflickr.com/512/512/dish"
            }}
        />
        <LinearGradient colors={['#00000000', '#00000000', '#000000']} style={styles.gradientOverlay}/>
        <View style={styles.content}>
            <CustomButton
                onClick={_guestEnter}
                title='Start Cooking'
                containerStyle={styles.buttonContainer}
            />
            <CustomButton
                title="Sign Up"
                isHighlighted
                containerStyle={styles.buttonContainer}
            />
            <Text style={styles.subText}>Find best recipes for cooking</Text>
            <Text style={styles.header}>Yumm</Text>
        </View>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    parent: {
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        height: '100%',
        width: '100%',
        position: 'absolute'
    },
    gradientOverlay: {
        flex: 1,
        position: 'relative'
    },
    content: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column-reverse',
        alignItems: 'center',
        paddingVertical: 50,
        position: 'absolute'
    },
    buttonContainer: {
        width: '60%',
        paddingVertical: 20,
        marginBottom: 20
    },
    subText: {
        ...Brand.subText as Object,
        color: 'white',
        marginBottom: 20
    },
    header: {
        fontSize: 64,
        fontWeight: 'bold',
        color: 'white'
    }
})