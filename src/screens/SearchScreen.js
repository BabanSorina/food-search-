import React, { useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const SearchScreen = ({navigation}) => {

    const [term, setTerm] = useState('');
    const [searchApi,results,errorMessage]= useResults();
    
    const filterResultsByPrice=(price) =>{
        return results.filter( result=>{
            return result.price === price;
        });
    };
    return (
        <View style={styles.background}>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={
                        () => {searchApi(term)}
                        }></SearchBar>
            {errorMessage ? <Text>{errorMessage}</Text>: null}
            <ScrollView>
            <ResultsList title="Cost Effective" results={filterResultsByPrice('€')} navigation={navigation}/>
            <ResultsList title="Bit pricier" results={filterResultsByPrice('€€')} navigation={navigation}/>
            <ResultsList title="Big Spender" results={filterResultsByPrice('€€€')} navigation={navigation}/>
            </ScrollView>
        </View>
    )
};
const styles = StyleSheet.create({
    background: { 
        backgroundColor: 'white' ,
       flex:1
    }
});
export default SearchScreen;

