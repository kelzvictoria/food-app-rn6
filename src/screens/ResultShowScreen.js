import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from "../api/yelp";

const ResultShowScreen = ({ route }) => {
    const [ result, setResult ] = useState(null)
    const [error, setError] = useState("") 

    const getResult = async (id) => {
        try {
            const result = await yelp.get("/"+ id)
            console.log(result.data);
            setResult(result.data)
        } catch(error){
            console.log(error);
            setError(error)
        }
    }

    useEffect(() => {
        getResult(route.params.id)
    }, [])

    if(!result){
        return null;
    }

    return <View style={{backgroundColor: "#fff"}}>
        <View style={styles.mainSection}>
           
            <Image source = {{uri: result.photos[0]}} style={styles.mainImage} />
            <Text style={styles.title}>
                {result.name}
            </Text>
            <Text style={styles.text} >{result.rating} Stars, {result.review_count} Reviews </Text>
            <Text style={styles.text}>{result.location.display_address}</Text>
            {/* <Text>{result.phone}</Text> */}
        </View>
       
        <Text style={{...styles.title, ...styles.otherPhotoTitle}}>Other Photos</Text>
        <FlatList 
            style={styles.otherPhotos}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={result.photos}
            keyExtractor={(photo_url) => photo_url}
            renderItem={({item}) => (
                <Image source = {{uri: item}} style={styles.otherImage} />
            )}
        />
    </View>
}

const styles = StyleSheet.create({
    mainSection: {
        margin: 15
    },
    mainImage: {
        height: 250,
        width: 350,
        borderRadius: 5,
        marginBottom: 5
    },
    otherImage: {
        height: 120,
        width: 200,
        marginLeft: 15,
        borderRadius: 5,
    },
    text:{
        fontSize: 16,
        marginBottom: 5   
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },
    
    otherPhotoTitle: {
        marginLeft: 15,
        fontSize: 16
    },
    // otherPhotos: {
        
    // }
})

export default ResultShowScreen