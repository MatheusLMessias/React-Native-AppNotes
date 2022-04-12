import React from 'react';
import { Text, Button, StyleSheet, View, Alert, Image, StatusBar, TouchableOpacity, Icon, ScrollView, SafeAreaView } from 'react-native';
import { NoGrade } from '../components/NoGrade';
import { HeaderHome, HeaderCreated } from '../components/Headers';

export function Home() {
    return (
        
        <View>
            <View>
                <HeaderHome />
                <NoGrade />
            </View>
        </View>

    );
}