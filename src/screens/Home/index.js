import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Pressable, Dimensions } from 'react-native'
import BG from '../../../assets/images/wallpaper.jpg'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen(props) {
    const navigation = useNavigation()
    return (
        <View>
            <ImageBackground source={BG} style={styles.background}>
                <Pressable
                    style={styles.searchButton}
                    onPress={() => navigation.navigate('Destination Search')}
                 >
                 <View style={styles.searchbar}>
                 <Fontisto name="search" size={25} color="#f15454" style={styles.searchIcon} />
                 <Text style={styles.headerText}>Where are you going?</Text>
                 </View>
                 </Pressable>
                <Text style={styles.title}>Go Near</Text>

                <Pressable
                    style={styles.button}
                    onPress={() => console.warn('Expore Btn clicked')}
                 >
                 <Text style={styles.buttonText}>Explore nearby stays</Text>
                 </Pressable>
            </ImageBackground>
        </View>
    )
}


const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: 500,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    title: {
        fontSize: 100,
        fontWeight: 'bold',
        color: 'white',
        width: '70%',
        marginLeft: 15
    },
    buttonText: {
        alignSelf: 'center',
        fontSize: 12,
        fontWeight: 'bold'
    },
    button: {
        marginTop: 20,
        backgroundColor: 'white',
        width: 150,
        marginLeft: 25,
        height: 30,
        borderRadius: 10,
        justifyContent: 'center'
    },
    searchButton: {
        backgroundColor: 'white',
        width: Dimensions.get('screen').width - 20,
        height: 30,
        borderRadius: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'absolute',
        zIndex: 100,
        top: 50,
        marginHorizontal: 10,
        borderRadius: 30,
        height: 50
    },
    searchbar: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-around', 
        width: 230
    },
    headerText: {
        fontSize: 19
    }
})
