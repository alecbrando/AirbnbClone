import React, {useState} from 'react'
import { View, TextInput, StyleSheet, FlatList, Text, Pressable } from 'react-native'
import search from '../../../assets/data/search'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'

export default function DestinationScreen() {
    const navigation = useNavigation()
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <Pressable onPress={() => navigation.navigate('Guests')} style={styles.container}>
            <TextInput style={styles.textInput} placeholder="Where are you going?" value={searchTerm} onChangeText={setSearchTerm}  />
            <FlatList
                data={search}
                renderItem={({item}) => (
                <View style={styles.row}>
                    <View style={styles.iconContainer}>
                        <Entypo size={30} name="location-pin"/>
                    </View>
                    <Text>{item.description}</Text>
                </View>
                )}
                keyExtractor={(item) => item.id}
             />
        </Pressable>
        
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    textInput: {
        fontSize: 18,
        marginBottom: 20
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: 'lightgrey'
    },
    iconContainer: {
        backgroundColor: '#e7e7e7',
        borderRadius: 10,
        marginRight: 10
    },
    locationText: {

    }
})
