import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const ResultsDetail = ({ result }) => {

    return (
        <View style={styles.container}>
            <Image 
                source={{uri:result.image_url}}
                style={styles.ImageStyle}
            />
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
};
export default ResultsDetail;
const styles=StyleSheet.create({
    container:{
        marginLeft:15
    },
ImageStyle:{
    width:250,
    height:120,
    borderRadius:4,
    marginBottom:5
},
nameStyle: {
    fontWeight:'bold',
    fontSize:14
}
});