import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import FilledLayout from '../components/layouts/FilledLayout';
import Toolbar from '../components/Toolbar';

const Notifications = () => {
    return (
        <FilledLayout>
            <Toolbar title="Notifications" />
            <View
                style={styles.container}>
                <Text> No New Notifications </Text>
            </View>
        </FilledLayout>
    );
};

export default Notifications;

const styles = StyleSheet.create({
    container: {
        padding: 20,
    }
})

