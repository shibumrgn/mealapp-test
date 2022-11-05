import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {Brand} from '../constants/Brand';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IProps {
    title?: string;
    children: JSX.Element[];
    marginLeft?: number;
}

const Section = (props: IProps) => {
    const styles = StyleSheet.create({
        parent: {
            marginBottom: 30,
        },
        header: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        },
        title: {
            ...Brand.header as {},
            marginLeft: props.marginLeft,
            marginVertical: 10,
            flex: 1,
            textAlignVertical: 'center'
        },
        scroll: {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            paddingLeft: 20,
        },
        seeAllContainer: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10
        },
        seeAll: {
            textAlign: 'center',
            marginRight: 10,
            color: Brand.accentColor
        }
    });
    return (
        <View style={styles.parent}>
            {
                props.title && <View
                    style={styles.header}
                >
                    <Text style={styles.title}>{props.title}</Text>
                    <View style={styles.seeAllContainer}>
                        <Text style={styles.seeAll}>See all</Text>
                        <Ionicons name='arrow-forward-outline'
                            color={Brand.accentColor}
                        />
                    </View>
                </View>
            }
            <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal
                style={styles.scroll}>
                {props.children}
            </ScrollView>
        </View>
    );
};

export default Section;
