import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import  ToDo from './src/screens/ToDo'

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <ToDo></ToDo>
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {

  },
});
