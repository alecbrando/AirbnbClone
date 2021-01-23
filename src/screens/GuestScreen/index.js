import React , {useState} from 'react'
import { View, Text } from 'react-native'
import GuestDetailScreen from '../../components/GuestsDetailScreen';

export default function GuestScreen() {
    const [adult, setAdults] = useState(0)
    const [children, setChildren] = useState(0)
    const [infants, setInfants] = useState(0)

    return (
        <View>
            <GuestDetailScreen type={"Adult"} age={"Ages 13 or above"} setter={setAdults}  />
            <GuestDetailScreen type={"Children"} age={"Ages 2-12"} setter={setChildren} />
            <GuestDetailScreen type={"Infants"} age={"Under 2"} setter={setInfants} />
        </View>
    )
}
