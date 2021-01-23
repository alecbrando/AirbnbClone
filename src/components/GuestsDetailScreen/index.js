import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Pressable, Dimensions } from 'react-native'



export default function GuestDetailScreen(props) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        props.setter(count)
    }, [count])

    return (
        <View style={styles.row}>
            <View style={styles.leftSide}>
                <Text style={styles.topText}>{props.type}</Text>
                <Text style={styles.ageText}>{props.age}</Text>
            </View>
            <View style={styles.innerRow}>
                <Pressable onPress={() => setCount(count === 0 ? count : count - 1)} style={styles.minus}>
                    <Text style={styles.minusText}>-</Text>
                </Pressable>
                <Text style={styles.counter}>{count}</Text>
                <Pressable onPress={() => setCount(count + 1)} style={styles.plus}>
                    <Text style={styles.plusText}>+</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        width: Dimensions.get('screen').width - 20,
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        height: 100,
        alignItems: 'center',
        marginHorizontal: 10
    },
    innerRow: {
        flexDirection: 'row',
        marginRight: 30,
        width: 100,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    plus: {
        borderWidth: 1,
        borderRadius: 100,
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'lightgrey'
    },
    plusText: {
        fontSize: 30,
        color: 'grey',
    }, 
    counter: {
        fontSize: 20,
        marginHorizontal: 35,
        alignSelf: 'center',
        color: 'darkgrey'
    },
    minus: {
        borderWidth: 1,
        borderRadius: 100,
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'lightgrey'
    },
    minusText: {
        fontSize: 30,
        color: 'grey',
    },
    leftSide: {
        marginLeft: 15,
        
    }, 
    topText: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 16
    },
    ageText: {
        color: 'grey',
        marginTop: 5,
        fontSize: 16
    }
})
