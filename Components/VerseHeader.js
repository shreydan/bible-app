import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, {useContext} from 'react';
import Constants from 'expo-constants';
import ChapterStrip from '../Components/ChapterStrip';
import {BibleContext} from '../BibleContext';

export default function VerseHeader(props) {
    //const {viewState, bookState, chapterState} = useContext(BibleContext);

    //const [VerseToggle, VerseToggler] = viewState;
    //const [book, setBook] = bookState;
    //const [chapter, setChapter] = chapterState;

    const [VerseToggle, VerseToggler] = useContext(BibleContext);
    const changeView = () => {
        VerseToggler(!VerseToggle);
    }

    var currentBook = book;
    var currentChapter = chapter;
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.verse} onPress={changeView()}>
                <Text style={styles.text}>{currentBook} {currentChapter}</Text>
            </TouchableOpacity>
            <ChapterStrip chapterLength = {props.chapterLength}></ChapterStrip>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {

        paddingTop: Constants.statusBarHeight + 10,
        backgroundColor: '#06349e',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 25,
        color: '#fff',
        paddingBottom: 15
    }
});
  