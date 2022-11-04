import {
    View,
    StyleSheet,
    Animated,
    TouchableOpacity,
    Alert,
    LogBox
} from 'react-native'
import React from 'react'
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Notifications from './src/screens/Notifications';
import Bookmarks from './src/screens/Bookmarks';
import Profile from './src/screens/Profile';
import { Brand } from './src/constants/Brand';
import AddRecipe from './src/screens/AddRecipe';
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
        color={routeName === selectedTab ? 'black' : 'gray'}
      />
    );
  };
  const renderTabBar = ({ routeName, selectedTab, navigate }: any) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  const APP_NAVIGATOR = () => {
    return (
      <CurvedBottomBar.Navigator
          type="DOWN"
          style={styles.bottomBar}
          height={55}
          circleWidth={55}
          bgColor="white"
          initialRouteName="title1"
          borderTopLeftRight
          screenOptions={{
            headerShown: false
          }}
          renderCircle={({ selectedTab, navigate }) => (
            <Animated.View style={styles.btnCircleUp}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'center',
                }}
                onPress={() => navigate('ADD')}>
                <Ionicons name={'add-outline'} color="white" size={25} />
              </TouchableOpacity>
            </Animated.View>
          )}
          tabBar={renderTabBar}>
          <CurvedBottomBar.Screen
            name="HOME"
            position="LEFT"
            component={() => <Home/>}
          />
          <CurvedBottomBar.Screen
            name="BOOKMARKS"
            position="LEFT"
            component={() => <Bookmarks/>}
          />
          <CurvedBottomBar.Screen
            name="NOTIFICATIONS"
            component={() => <Notifications/>}
            position="RIGHT"
          />
          <CurvedBottomBar.Screen
            name="PROFILE"
            component={() => <Profile/>}
            position="RIGHT"
          />
        </CurvedBottomBar.Navigator>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Root.Navigator initialRouteName="Home"
          screenOptions={{
            headerShown: false
          }}
        >
          <Root.Screen name="Home" component={APP_NAVIGATOR} />
          <Root.Screen name="ADD" component={AddRecipe}
            options={{
              cardStyleInterpolator: (props) => {
                return {
                  cardStyle: {
                    transform: [
                      {
                        translateX: props?.current.progress.interpolate({
                          inputRange: [0, 1],
                          outputRange: [props?.layouts.screen.width, 0],
                        }),
                      },
                    ],
                  },
                };
              }
            }}
          />
        </Root.Navigator>
      </NavigationContainer>
    </View>
  )
}

export const styles = StyleSheet.create({
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
});

export default App