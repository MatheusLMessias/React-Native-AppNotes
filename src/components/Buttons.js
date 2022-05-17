import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export const NewNoteButton = props => {
    
  return (
    <View style={styles.containerMirror}>
      <TouchableOpacity
        style={styles.mirrorButton}
        onPress={() => props.navigation.navigate("CreateNote")}
      >
        <Image 
          style={styles.imageButton}
          source={props.dir}
          tintColor="#FFF"
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({ 

  containerMirror: {
    bottom: 50,
    right: 27,
    alignSelf: "flex-end",
    position: "absolute"
  },
  
  mirrorButton: {
    borderRadius: 10,
    width: 50,
    height: 50,
    backgroundColor: '#0000ff',
    alignItems: "center",
    justifyContent: "center"
  },
  
  imageButton: {
    width: 35,
    height: 35
  }
})
