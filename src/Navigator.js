import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {CreateNote} from './screens/CreateNote'
import {EditNote} from './screens/EditNote'
import {Home} from './screens/Home'
import {HomeNote} from './screens/HomeNote'
import {OpenNote} from './screens/OpenNote'

export default () => {

  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateNote"
          component={CreateNote}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeNote"
          component={HomeNote}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OpenNote"
          component={OpenNote}
          options={{ headerShown: false }}
        />  
        <Stack.Screen
          name="EditNote"
          component={EditNote}
          options={{ headerShown: false }}
        />    
      </Stack.Navigator>
    </NavigationContainer>
  )
}

