import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultDetail = ({business}) => {
    return <View style={styles.container}>
        <Image 
            source={{uri: business.image_url}} 
            style={ styles.image } />
        <Text style={styles.name}>{business.name}</Text>
        <Text >{business.rating} Stars, {business.review_count} Reviews </Text>
    </View>
}

const styles = StyleSheet.create({
    image: {
        height: 120,
        width: 250,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
    },
    container: {
        marginLeft: 15
    }
})

export default ResultDetail