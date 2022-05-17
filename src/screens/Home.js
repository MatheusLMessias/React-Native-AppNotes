import React from 'react';
import { Text, Button, StyleSheet, View, Alert, Image, StatusBar, TouchableOpacity, Icon, ScrollView, SafeAreaView } from 'react-native';
import { NoGrade } from '../components/NoGrade';
import { HeaderHome, HeaderCreated } from '../components/Headers';
import { NewNoteButton } from '../components/Buttons';

export function Home({navigation}) {
    return (
        
            <View style={styles.container}>
                <HeaderHome 
                    navigation={navigation}
                />
                <ScrollView>
                    <View>
                        <NoGrade />
                    </View>
                </ScrollView>
                <NewNoteButton
                    navigation={navigation}
                    dir={require("../img/icons/mais.png")}
                />
            </View>

    );
}

const styles = StyleSheet.create({
  
    container: {
      flex: 1
    },
})