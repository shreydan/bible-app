import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';


export default function ChapterStrip(props) {
    let chapters = [];
    for(var i=1;i<=props.chapterLength;i++) {
        chapters.push(i);
    }
    return (
        <FlatList 
            style={styles.chapters}
            horizontal={true}
            showsHorizontalScrollIndicator = {false}
            data = {chapters}
            renderItem = {({item}) => (
                <TouchableOpacity style={styles.tappable}>
                    <Text style={styles.text}>{item}</Text>
                </TouchableOpacity>
            )}
            keyExtractor = {(item) => item.toString()}
        />
    );
}

const styles = StyleSheet.create({
    chapters: {
        backgroundColor: '#032061',
    },
    tappable: {
        alignSelf: 'flex-start',
        marginHorizontal: 20,
        paddingVertical: 8,
        borderBottomColor: 'black',
        borderBottomWidth: 3
    },
    text: {
        color: 'white',
        fontSize: 20,
    }
});