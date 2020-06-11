import React from 'react'
import { SafeAreaView, View, ScrollView, KeyboardAvoidingView, StyleSheet, Image, Dimensions, Platform } from 'react-native'

import ToDo from './src/screens/ToDo'

const App = () => {
  return (
      <View style={{flex: 1}}>
        <ToDo></ToDo>
      </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#80cbc4"
  },
  imageStyle: {
    width: Dimensions.get("window").width / 2,
    height: Dimensions.get("window").height / 3,
    resizeMode: "contain",
    alignSelf: "center",
  }
})

export default App