import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function Listing({listing}) {

    console.log(listing)
    return (
        <View style={styles.container}>
        <Image style={styles.image} source={{ uri: listing.image}} />
            <Text style={styles.bedrooms}>{listing.bed} bath {listing.bedroom} bedroom</Text>
            <Text numberOfLines={2} style={styles.description}>{listing.type} {listing.title}</Text>
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>{listing.oldPrice}$ </Text>
                <Text style={styles.newPrice}> ${listing.newPrice} </Text>
                 / night
            </Text>
                <Text style={styles.totalPrice}>{listing.totalPrice}$ total</Text>
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
