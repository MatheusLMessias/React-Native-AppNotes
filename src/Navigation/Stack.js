import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { Home } from '../screens/Home';
import { CreateNote } from '../screens/CreateNote';
import { HomeNote } from '../screens/HomeNote';
import { OpenNote } from '../screens//OpenNote';
import { EditNote } from '../screens/EditNote';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator

export default props => {
    return (
<Stack.Navigator initilRouteName="Home">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="CreateNote" component={CreateNote} />
    <Stack.Screen name="HomeNote" component={HomeNote} />
    <Stack.Screen name="OpenNote" component={OpenNote} />
    <Stack.Screen name="EditNote" component={EditNote} />
</Stack.Navigator>

    );
}