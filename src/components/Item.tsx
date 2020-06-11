import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

const Item = (props: any) => {
    const [okayText, setOkayText] = useState(true)

    let styles = props.data.status ? selected : unSelected
    return (
        <TouchableOpacity onPress={props.onPress} style={{ flexDirection: 'row-reverse', }}>
            <View style={styles.container}>
                <Text style={styles.textStyle} >{props.data.issue}</Text>
            </View>
        </TouchableOpacity >
    )
}

const selected = StyleSheet.create({
    container: {
        backgroundColor: '#CCFF90',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        width: Dimensions.get('window').width / 1.3,
        height: Dimensions.get('window').height / 20,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,

    },
    textStyle: {
        color: '#263238',
        fontSize: 30, fontWeight: 'bold'
    }
}
)

const unSelected = StyleSheet.create({
    container: {
        backgroundColor: '#FF8A80',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        width: Dimensions.get('window').width / 1.3,
        height: Dimensions.get('window').height / 20,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,

    },
    textStyle: {
        color: '#263238',
        fontSize: 30, fontWeight: 'bold',
        textDecorationLine: 'line-through'

    }
})
export default Item