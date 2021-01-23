import React from 'react'
import { View, FlatList } from 'react-native'

import feed from '../../../assets/data/feed'
import Listing from '../../components/Listing/index';

export default function SearchResultScreen() {
    return (
        <View>
            <FlatList
                data={feed}
                renderItem={({item}) => <Listing listing={item} />}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
             />
        </View>
    )
}
