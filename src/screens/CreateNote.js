import React from 'react';
import { Text, Button, StyleSheet, View, Alert, Image, StatusBar, TouchableOpacity, Icon, ScrollView, SafeAreaView } from 'react-native';
import { NoGrade } from '../components/NoGrade';
import { HeaderHome, HeaderCreated } from '../components/Headers';
import { Created } from '../components/Created';

export function CreateNote() {
    return (

        <View>
            <HeaderCreated />  
            <Created />    
        </View>
        
    );
}