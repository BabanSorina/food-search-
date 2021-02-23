import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Button, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import yelp from '../api/yelp';
// import { FontAwesomeIcon } from '@fortawesome/fontawesome-free'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import IconAnt from 'react-native-vector-icons/AntDesign'
import IconEnt from 'react-native-vector-icons/Entypo'
const ResultsShowScreen = ({ navigation, route }) => {
    const [result, setResult] = useState(null);
    const id = route.params.id;

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }
    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) { return null; }


    return (
        <ScrollView>
            <View style={styles.containerStyle}>
                <Text style={styles.textStyle}>{result.name}</Text>
                <View style={styles.infoStyle}>
                    <IconAnt style={styles.iconStyle} name="phone"></IconAnt>
                    <Text>  {result.display_phone}  </Text>
                </View>
                <View style={styles.infoStyle}>
                    <IconEnt style={styles.iconStyle} name="location"></IconEnt>
                    <Text>  {result.location.display_address}   </Text>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Business reviews", { id: id })}
                    style={styles.buttonStyle}>
                    <Text style={{fontSize:20, alignSelf:'center', fontWeight:'bold',color:'#fff'}}>go to reviews</Text>
                </TouchableOpacity>
                <FlatList
                    data={result.photos}
                    keyExtractor={photo => photo}
                    renderItem={({ item }) => {
                        return <Image source={{ uri: item }}
                            style={styles.imageStyle}
                        />

                    }}
                />
                
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    containerStyle: {
        alignItems: 'center'
    },
    imageStyle: {
        height: 200,
        width: 300,
        marginBottom: 5,
        borderRadius: 10

    },
    textStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: 'red'
    },
    infoStyle: {
        flexDirection: 'row',
        fontSize: 20
    },
    iconStyle: {
        fontSize: 28
    },
    buttonStyle: {
        height: 40,
        width: 150,
        backgroundColor: "#201010", 
        borderRadius:10,
        margin:10
    }


})
export default ResultsShowScreen;