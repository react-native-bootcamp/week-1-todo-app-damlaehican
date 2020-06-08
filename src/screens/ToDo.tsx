import React, { Component, useState } from 'react'
import { View, Text, ScrollView, ActivityIndicator, TouchableOpacity, FlatList, SafeAreaView, Dimensions, TextInput } from 'react-native'
import Item from '../components/Item'
const dummy = [
    {
        id: 1,
        issue: 'Alışveriş yapılacak',
        status: true
    },
    {
        id: 2,
        issue: 'React Native çalışılacak',
        status: true
    },
    {
        id: 3,
        issue: 'Hooks yapısı incelenecek',
        status: false
    }

]
type Issue = typeof dummy[0]


const ToDo = (props: any) => {

    const [data, setData] = useState<Issue[]>(dummy)
    const [width, height] = useState(Dimensions.get('window'))
    const changeStatus = (id: number) => {
        setData(data.map(issue => issue.id === id ? { ...issue, status: !issue.status } : issue))
        console.warn(id)
    }
    return (
        <SafeAreaView>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                margin: 20,
                borderRadius: 10,
            }}>
                <View style={{flexDirection: 'row'}}></View>
                <View style={{
                    borderRadius: 10, backgroundColor: '#e0e0e0', width: width.width / 1.2,
                    height: width.width / 10, justifyContent: 'center'
                }}>
                    <TextInput style={{ fontWeight: 'bold', marginHorizontal: 20 }} placeholder='Yapılacak bir şeyler ekle'></TextInput>

                </View>
                <View>
                    <TouchableOpacity style={{ backgroundColor: 'reed' }}>
                        <Text>Ekle</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={data}
                    renderItem={({ item }) => <Item data={item} press={() => changeStatus(item.id)}></Item>}
                />
            </View>
        </SafeAreaView>
    )
}
export default ToDo