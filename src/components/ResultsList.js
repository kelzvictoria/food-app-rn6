import React from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';
import ResultDetail from "./ResultDetail";
import { useNavigation } from '@react-navigation/native'

const ResultsList = ({businesses, title}) => {
    const navigation = useNavigation()

    if(!businesses.length){
        return null
    }
    return <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
            horizontal
            data={businesses}
            keyExtractor={(result) => result.id }
            renderItem={({item}) => <TouchableOpacity
                onPress={() => navigation.navigate("ResultShow", {
                    id: item.id
                })}
            >
                <ResultDetail business={item} />
            </TouchableOpacity> }
            showsHorizontalScrollIndicator={false}
        />
    </View>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10,
    }
})

export default ResultsList