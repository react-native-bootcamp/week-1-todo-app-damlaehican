import React, { useState } from 'react';
import {
    View,
    TextInput,
    Dimensions,
    TouchableOpacity,
    FlatList,
    Text,
    ImageBackground,
    Image
} from 'react-native';
import Item from '../components/Item';
import { EvilIcons } from '@expo/vector-icons';

const ToDo = () => {

    const [entry, setEntry] = useState('');
    const [data, setData] = useState<any>([
    ])

    const changeStatus = (id: number) => {
        setData(data.map(issue => issue.id === id ? { ...issue, status: !issue.status } : issue))
    }
    const changeText = (text: string) => {
        setEntry(text);
    };
    const addList = () => {
        const newListObj = {
            id: Math.floor(Math.random() * 10000),
            issue: entry,
            status: false
        }
        setData([...data, newListObj])
        setEntry('')
        console.warn(newListObj.status)
    };

    return (
        <ImageBackground source={require('../../assets/background.png')} style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height / 1.7, top: -100
        }}>
            <Image source={require('../../assets/light-1.png')} style={{ width: 100, height: 200 }}></Image>
            <View style={{
                alignItems: 'center',
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
            }}>
                <View style={{ flexDirection: 'row', margin: 40, }}>
                    <View style={{
                        backgroundColor: '#eeeeee',
                        width: Dimensions.get('window').width / 1.9,
                        height: Dimensions.get('window').height / 20,
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        flexDirection: 'row',
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10
                    }}>
                        <View style={{ alignItems: 'flex-start' }}>
                            <EvilIcons name="search" size={24} color="black" />
                        </View>
                        <TextInput onSubmitEditing={addList} returnKeyType='search' onChangeText={changeText}
                            placeholder={'Enter a job to be done.'}
                            value={entry}
                            style={{ textAlign: 'left', fontSize: 18, margin: 8, opacity: 1 }} ></TextInput>
                    </View>
                    <View style={{
                        backgroundColor: '#EF6C00',
                        width: Dimensions.get('window').width / 4,
                        height: Dimensions.get('window').height / 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderTopRightRadius: 10,
                        borderBottomRightRadius: 10,
                    }}>
                        <TouchableOpacity onPress={addList}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>SAVE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginTop: 75, justifyContent: 'center' }}>
                    <FlatList data={data} renderItem={({ item }) =>
                        <Item data={item} onPress={() => changeStatus(item.id)} >
                            <View>
                            </View>
                        </Item>
                    }></FlatList>
                </View>
            </View>
        </ImageBackground>

    )
}


export default ToDo
