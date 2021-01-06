import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text} from 'react-native';


// import Genesis from '../Bibles/kjv/Genesis.json';
// const chapter = Genesis.chapters[0].verses;
function VerseList(props)  {

    const chapter = props.book.chapters[0].verses;
    
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={chapter}
                renderItem={({item}) => (
                  <View style={styles.item}>
                    <Text style={styles.text} selectable={true} selectionColor='#00000060'>
                      <Text style={styles.verse}>{item.verse}.</Text> {item.text}
                    </Text>
                  </View>
                )}
                keyExtractor={(item) => item.verse}
            />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    item: {
      padding: 20,
      paddingBottom: 40,
      borderBottomColor: '#aeaeae',
      borderBottomWidth: 0.5,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    text: {
      fontSize: 24
    },
    verse: {
      color: '#032061'
    }
  });

export default VerseList;