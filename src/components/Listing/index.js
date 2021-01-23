import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function Listing() {
    return (
        <View style={styles.container}>
        <Image style={styles.image} source={{ uri: 'https://www.apartments.com/images/default-source/default-album/apartment-kitchen.tmb-featuredim.jpg?sfvrsn=17473757_0'}} />
            <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>
            <Text numberOfLines={2} style={styles.description}>dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</Text>
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>36$ </Text>
                <Text style={styles.newPrice}> $30 </Text>
                 / night
            </Text>
                <Text style={styles.totalPrice}>230$ total</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 15
    },
    image: {
        width: '100%',
        aspectRatio: 3 / 2,
        resizeMode: 'cover',
        borderRadius: 10
    },
    bedrooms: {
        color: 'grey',
        marginVertical: 8,
        fontSize: 14
    },
    description: {
        fontSize: 18,
        lineHeight: 26
    },
    newPrice: {
        fontWeight: 'bold'
    },
    oldPrice: {
        color: 'grey',
        textDecorationLine: 'line-through',
        textDecorationColor: 'black'
    },
    prices: {
        marginVertical: 8,
        fontSize: 18,
        width: 250,
    },
    totalPrice: {
        textDecorationLine: 'underline',
        color: 'grey'
    }
})
