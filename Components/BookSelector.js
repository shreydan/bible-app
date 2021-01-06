import { StyleSheet, 
         Text, 
         View, 
         SafeAreaView, 
         ScrollView,
         TouchableOpacity } from 'react-native';
import React from 'react';
import Bible from '../Bibles/kjv/Books.json';
const ot = Bible[0]['old-testament'];
const nt = Bible[0]['new-testament'];

export default function BookSelector() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.Headtext}>Old Testament</Text>
                <View style={styles.buttonView}>
                    {
                        ot.map((book, key)=>{
                            return(
                                    <TouchableOpacity  key={key} style={styles.button}>
                                        <Text style={styles.text}>{book}</Text>
                                    </TouchableOpacity>
                                );
                        })
                    }
                </View>
                <Text style={styles.Headtext}>New Testament</Text>
                <View style={styles.buttonView}>
                    {
                        nt.map((book, key)=>{
                            return(
                                    <TouchableOpacity  key={key} style={styles.button}>
                                        <Text style={styles.text}>{book}</Text>
                                    </TouchableOpacity>
                                  );
                        })
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    Headtext: {
        alignSelf: 'flex-start',
        color: 'black',
        fontSize: 26,
        padding: 15
    },
    buttonView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    button: {
        backgroundColor: '#06349e',
        paddingVertical: 5,
        paddingHorizontal: 20,
        margin: 5,
        borderRadius: 25
    },
    text: {
        
        fontSize: 18,
        color: 'white'
    }
});