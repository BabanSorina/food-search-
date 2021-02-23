import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import yelp from '../api/yelp';

const ReviewsScreen = ({ navigation, route }) => {

    const [result, setResult] = useState(null);
    const id = route.params.id;

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}/reviews`);
        setResult(response.data.reviews);
    }

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) { return null; }
    console.log(result);

    return (
        <ScrollView>
            <View style={styles.container} >
                <FlatList
                    data={result}
                    keyExtractor={(id) => id}
                    renderItem={({ item }) => (
                        <View style={styles.reviewStyle}>
                            <Text style={[styles.ratingStyle, item.rating > 3 ? styles.goodRatingStyle : styles.badRatingStyle]} >{item.rating}</Text>
                            <View>
                            <Text style={styles.timeStyle}>{item.time_created}</Text>
                            <Text style={styles.textStyle}>{item.text}</Text>
                            <Text style={styles.timeStyle}>By {item.user.name}</Text>
                            </View>
                        </View>
                    )}>
                </FlatList>
               
            </View>
        </ScrollView>
    )
}
export default ReviewsScreen;
const styles = StyleSheet.create({
    container:{
margin:10
    },
    reviewStyle: {
        flexDirection: 'row',
        paddingBottom: 20,
        borderWidth:2,
        borderRadius:10
        
    },
    ratingStyle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginRight: 5
    },
    goodRatingStyle: {
        color: 'green'
    },
    badRatingStyle: {
        color: 'red'
    },
    textStyle: {
        fontSize: 20
    },
    timeStyle:{
        fontSize:18,
        color:'#202020'

    }
})