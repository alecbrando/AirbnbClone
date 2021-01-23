import React , {useState} from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import GuestDetailScreen from '../../components/GuestsDetailScreen';

export default function GuestScreen() {
    const [adult, setAdults] = useState(0)
    const [children, setChildren] = useState(0)
    const [infants, setInfants] = useState(0)

    return (
        <View style={styles.container}>
            <View>
                <GuestDetailScreen type={"Adult"} age={"Ages 13 or above"} setter={setAdults}  />
                <GuestDetailScreen type={"Children"} age={"Ages 2-12"} setter={setChildren} />
                <GuestDetailScreen type={"Infants"} age={"Under 2"} setter={setInfants} />
            </View>
            <View>
                <Pressable style={styles.pressable}>
                    <Text style={styles.searchText}>Search</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    pressable: {
        backgroundColor: '#f15454',
        width: 390,
        borderRadius: 10,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 30
    },
    searchText: {
        fontSize: 25,
        color: 'white'
    }
})
