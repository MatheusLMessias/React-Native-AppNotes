import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './Stack';

export default () => { 
  return (

    <SafeAreaView style={styles.container}>
        <NavigationContainer>
        <Stack />
        </NavigationContainer>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center', // horizontal
    //justifyContent: 'center', //vertical
  },
});
