import React from "react";
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Feather } from "@expo/vector-icons"

const SearchBar = ({term, onTermChange, onTermSearch}) => {
    return <View style={styles.background}>
        <Feather name="search" 
        //size={30}
         style={styles.icon} />
        <TextInput 
            style={styles.input} 
            value={term} 
            onChangeText={onTermChange} 
            placeholder="Start typing to search"
            autoCapitalize="none"
            autoCorrect={false}
            onEndEditing={onTermSearch}
        />
    </View>
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#f0eeee",
        height: 50,
        //marginTop: 15,
        marginHorizontal: 15,
        borderRadius: 5,
        flexDirection: 'row',
        marginBottom: 15
    },
    input: {
        flex: 1,
        fontSize: 18,
    },
    icon: {
        fontSize: 30,
        marginHorizontal: 10,
        alignSelf: 'center'
    }
})

export default SearchBar;