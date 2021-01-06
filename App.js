import { StatusBar } from 'expo-status-bar';
import React, {useContext} from 'react';
import { StyleSheet, View } from 'react-native';
import VerseHeader from './Components/VerseHeader';
import VerseList from './Components/VerseList';
import BookSelector from './Components/BookSelector';
import Retriever from './BibleHandler';
const {book, length} = Retriever('Genesis');
import {BibleProvider, BibleContext} from './BibleContext';

export default function App() {

  //const {viewState} = useContext(BibleContext);
  //const [VerseToggle, VerseToggler] = viewState;
  const {viewState, bookState, chapterState } = useContext(BibleContext);

  return (
    <BibleProvider>

      <View style={styles.container}>
        <VerseHeader chapterLength={length}></VerseHeader>
        {!VerseToggle && <BookSelector></BookSelector>}
        {VerseToggle  && <VerseList book={book}></VerseList>}
        <StatusBar style="auto" hidden={true} />
      </View>

    </BibleProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
