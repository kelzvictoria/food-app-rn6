import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
    const [ term, setSearchTerm ] = useState("");
    const [ searchApi, results, error ] = useResults();

    const filterResultsByPrice = (price) => {
        //price === "$" || "$$" || "$$$"
        if (!price){
            return []
        }
        return results.filter(r => r.price === price)
    }

    return <
        View style={styles.background}
        >
        <SearchBar 
            term={term} 
            onTermChange = {setSearchTerm}
            onTermSearch = {() => searchApi(term)}
        />
         {
            !error ? <ScrollView>
                <ResultsList title="Cost Effective" businesses = {filterResultsByPrice("$")} />
                <ResultsList title="Bit Pricier" businesses = {filterResultsByPrice("$$")} />
                <ResultsList title="Big Spender" businesses = {filterResultsByPrice("$$$")} />
            </ScrollView> 
            : <Text> {error} </Text>
         } 
    </View>
}

const styles = StyleSheet.create({
    background: {
        //display: 'flex',
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 15,
    }
})

export default SearchScreen;