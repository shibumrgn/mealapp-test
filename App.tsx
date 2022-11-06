import {
    View,
    StyleSheet,
    Animated,
    TouchableOpacity,
    LogBox,
} from 'react-native';
import React from 'react';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import Notifications from './src/screens/Notifications';
import Bookmarks from './src/screens/Bookmarks';
import Profile from './src/screens/Profile';
import {Brand} from './src/constants/Brand';
import AddRecipe from './src/screens/AddRecipe';
import SplashScreen from './src/screens/SplashScreen';
import {Route} from './src/constants/Route';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

const App = () => {
    const Root = createStackNavigator();

    const _renderIcon = (routeName: string, selectedTab: string) => {
        let icon: string = 'home-outline';

        switch (routeName) {
            case 'HOME':
                icon = 'home-outline';
                break;
            case 'BOOKMARKS':
                icon = 'bookmarks-outline';
                break;
            case 'NOTIFICATIONS':
                icon = 'notifications-outline';
                break;
            case 'PROFILE':
                icon = 'person-outline';
                break;
            case 'ADD':
                icon = 'plus-outline';
                break;
        }

        return (
            <Ionicons
                name={icon}
                size={25}
                color={routeName != selectedTab ? 'lightgrey' : Brand.accentColor}
            />
        );
    };
    const renderTabBar = ({routeName, selectedTab, navigate}: any) => {
        return (
            <TouchableOpacity
                onPress={() => navigate(routeName)}
                style={styles.icon}>
                {_renderIcon(routeName, selectedTab)}
            </TouchableOpacity>
        );
    };

    const APP_NAVIGATOR = () => {
        return (
            <CurvedBottomBar.Navigator
                type="DOWN"
                style={styles.bottomBar}
                height={75}
                circleWidth={60}
                bgColor="white"
                initialRouteName="title1"
                borderTopLeftRight
                screenOptions={{
                    headerShown: false,
                }}
                renderCircle={({navigate}) => (
                    <Animated.View style={styles.btnCircleUp}>
                        <TouchableOpacity
                            style={styles.floating}
                            onPress={() => navigate(Route.ADD_RECIPE)}>
                            <Ionicons
                                name={'add-outline'}
                                color="white"
                                size={25}
                            />
                        </TouchableOpacity>
                    </Animated.View>
                )}
                tabBar={renderTabBar}>
                <CurvedBottomBar.Screen
                    name={Route.HOME}
                    position="LEFT"
                    component={() => <Home />}
                />
                <CurvedBottomBar.Screen
                    name={Route.BOOKMARKS}
                    position="LEFT"
                    component={() => <Bookmarks />}
                />
                <CurvedBottomBar.Screen
                    name={Route.NOTIFICATIONS}
                    component={() => <Notifications />}
                    position="RIGHT"
                />
                <CurvedBottomBar.Screen
                    name={Route.PROFILE}
                    component={() => <Profile />}
                    position="RIGHT"
                />
            </CurvedBottomBar.Navigator>
        );
    };

    return (
        <View style={styles.parent}>
            <NavigationContainer>
                <Root.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                        headerShown: false,
                    }}>
                    <Root.Screen
                        name={Route.SPLASHSCREEN}
                        component={SplashScreen}
                    />
                    <Root.Screen name={Route.HOME} component={APP_NAVIGATOR} />
                    <Root.Screen
                        name={Route.ADD_RECIPE}
                        component={AddRecipe}
                        options={{
                            cardStyleInterpolator: props => {
                                return {
                                    cardStyle: {
                                        transform: [
                                            {
                                                translateX:
                                                    props?.current.progress.interpolate(
                                                        {
                                                            inputRange: [0, 1],
                                                            outputRange: [
                                                                props?.layouts
                                                                    .screen
                                                                    .width,
                                                                0,
                                                            ],
                                                        },
                                                    ),
                                            },
                                        ],
                                    },
                                };
                            },
                        }}
                    />
                </Root.Navigator>
            </NavigationContainer>
        </View>
    );
};

export const styles = StyleSheet.create({
    parent: {flex: 1},
    container: {
        flex: 1,
        padding: 20,
    },
    button: {
        marginVertical: 5,
    },
    bottomBar: {},
    btnCircleUp: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Brand.accentColor,
        bottom: 18,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 1,
    },
    imgCircle: {
        width: 30,
        height: 30,
        tintColor: 'gray',
    },
    img: {
        width: 30,
        height: 30,
    },
    floating: {
        flex: 1,
        justifyContent: 'center',
    },
    icon: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;
