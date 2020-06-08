import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const Item = (props: any) => {

    let styles = props.data.status ? unSelected : selected
    return (
        <View>
            <TouchableOpacity style={{ justifyContent: 'center' }} onPress={props.press}>
                <View style={styles.container}>
                    <Text style={styles.textStyle}>{props.data.issue}</Text>
                </View>
            </TouchableOpacity>
        </View >

    )
}

const selected = StyleSheet.create({
    container: {
        margin: 10,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#aed581'

    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
}
)

const unSelected = StyleSheet.create({
    container: {
        margin: 10,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#ef5350'

    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        textDecorationLine: 'line-through'

    }
})
export default Item