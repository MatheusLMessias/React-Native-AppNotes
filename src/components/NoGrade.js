import React from 'react';
import { Text, Button, StyleSheet, View, Alert, Image, StatusBar, TouchableOpacity, Icon, ScrollView, SafeAreaView } from 'react-native';
import { HeaderHome } from './Headers';

export function NoGrade() {
    return (
        <SafeAreaView style={styles.views}>
          
              <View >
                <Image 
                source={require('../.././assets/Pilha-de-papel-2.png')}
                style={styles.image}
                />
              </View>

              <View>
                <Text style={styles.thirdText}>
                Crie notas e poderá vê-las aqui
                </Text>
                <Text style={styles.secondText}>
                Não tem nenhuma nota aqui
                </Text>
              </View>

        </SafeAreaView>
  );
};
    
const styles = StyleSheet.create({

      views:{
        padding: 20,
      },

      secondText: {
        color: 'black',
        marginTop: -53,
        fontSize: 25
      },

      thirdText: {
        marginTop: -45,
        fontSize: 15
      },

      image:{
        resizeMode: 'contain',
        width: 150,
      },

    });


