import {View, StyleSheet, Image, Text} from 'react-native';
import React, { useState } from 'react';
import Toolbar from '../components/Toolbar';
import CustomButton from '../components/CustomButton';
import Bookmarks from './Bookmarks';
import FilledLayout from '../components/layouts/FilledLayout';
import { IRecipe } from '../interfaces/IRecipe';
import { useSelector } from 'react-redux';
import VideoRecipe from '../components/recipes/VideoRecipe';
import { Brand } from '../constants/Brand';

const Profile = () => {
    const savedRecipes: IRecipe[] = useSelector(
        (state: any) => state?.recipe?.savedRecipes,
    );
    const [index, setIndex] = useState<0 | 1>(0);
    
    return (
        <FilledLayout>
            <Toolbar
                title='My profile'
            />
            <View
                style={styles.container}
            >
                <View
                    style={
                        styles.header
                    }
                >
                    <View
                        style={
                            styles.profilePicContainer
                        }
                    >
                        <Image
                            source={{
                                uri: 'https://picsum.photos/200'
                            }}
                            style={styles.profilePic}
                        />
                    </View>
                    <View style={styles.editProfileContainer}>
                        <CustomButton
                            title='Edit Profile'
                            isBordered
                        />
                    </View>
                </View>

                <View
                    style={styles.subHeader}
                >
                    <Text style={Brand.subTextBold}>Alessandra Blair</Text>
                    <Text style={Brand.tiny}>Hello world I'm Alexandra Blair, I'm from Italy. I Love cooking so much</Text>
                </View>
                <View
                    style={styles.statistics}
                >
                    <View style={styles.statistic}>
                        <Text style={Brand.tiny}>Recipe</Text>
                        <Text style={Brand.subTextBold}>12</Text>
                    </View>
                    <View style={styles.statistic}>
                        <Text style={Brand.tiny}>Videos</Text>
                        <Text style={Brand.subTextBold}>14</Text>
                    </View>
                    <View style={styles.statistic}>
                        <Text style={Brand.tiny}>Followers</Text>
                        <Text style={Brand.subTextBold}>123K</Text>
                    </View>
                    <View style={styles.statistic}>
                        <Text style={Brand.tiny}>Following</Text>
                        <Text style={Brand.subTextBold}>120</Text>
                    </View>
                </View>
                <View style={styles.tab}>
                    <CustomButton
                        title="Videos"
                        containerStyle={styles.buttonContainer}
                        isHighlighted={index === 0}
                        onClick={() => setIndex(0)}
                    />
                    <CustomButton
                        title="Recipes"
                        containerStyle={styles.buttonContainer}
                        isHighlighted={index === 1}
                        onClick={() => setIndex(1)}
                    />
                </View>
                {savedRecipes?.map(savedRecipe => (
                    <VideoRecipe recipe={savedRecipe} />
                ))}
            </View>
        </FilledLayout>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
    profilePic: {
        width: 100,
        height: 100,
        borderRadius: 100
    },
    profilePicContainer: {
        flex: 1
    },
    header: {
        display: 'flex',
        flexDirection: 'row'
    },
    subHeader: {
        marginVertical: 20
    },
    statistics: {
        flexDirection: 'row',
        width: '100%',
        paddingBottom: 10,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey'
    },
    editProfileContainer: {
        justifyContent: 'center'
    },
    tab: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginBottom: 20,
    },
    buttonContainer: {flex: 1},
    statistic: {flex: 1, alignItems: 'center'}
})

