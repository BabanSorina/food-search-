import React, { isValidElement } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from '../components/ResultsDetail';

const ResultsList = ({ title, results , navigation}) => {

    if(!results.length){ return null;}
    return (
        <View style={styles.container} >
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({item}) => {
                    return (
                    <TouchableOpacity onPress={()=> navigation.navigate('Business details',{id:item.id})}>
                        <ResultsDetail result={item}/>
                    </TouchableOpacity>  )
                }}
            />
        </View>
    )
};
const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft:15,
        marginBottom:5
    },
    container: {
        marginBottom:10
    }
});
export default ResultsList;