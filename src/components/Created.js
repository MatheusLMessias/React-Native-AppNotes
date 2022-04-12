import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Text, TouchableOpacity, Button, ScrollView, StatusBar } from "react-native";

export function Created() {
  const [nameNote, onChangeNameNote] = React.useState(null);
  const [errorNameNote, onChangeErrorNameNote] = React.useState(null);
  const [description, onChangeDescription] = React.useState(null);
  const [date, onChangeDate] = React.useState(null);
  const [properties, onChangeProperties] = React.useState(null);
  const [addTag, onChangeAddTag] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

   function validar(){
        onChangeErrorNameNote('Preencha seu nome corretamente')
        return false
  }

  function salvar(){

  }
  const countries = ["Urgent", "High", "Average", "Low"]

  return (

    <View style={styles.container1} >

<ScrollView>
    <View>
        <Text style={styles.textStyle}> {"\n"}Nome da nota (Obrigatório)</Text>
      <TextInput
      placeholder="Insira"
        style={styles.input}
        onChangeText={onChangeNameNote}
        value={nameNote}
        errorMessage={errorNameNote}
      />
    </View>

    <View>
        <Text style={styles.textStyle}>Descrição                                                                      240</Text>
      <TextInput
        maxLength={240} 
        multiline = {true}
        numberOfLines = {5}
        placeholder="Insira"
        style={styles.inputDescription}
        onChangeText={onChangeDescription}
        value={description}
      />
    </View>

    <View>
    <Text style={styles.textStyle}>Prioridade</Text>
    <TouchableOpacity style={styles.input}>   
    <Text>Escolha</Text>
    </TouchableOpacity>
    </View>

    <View>
        <Text style={styles.textStyle}> Data</Text>
      <TextInput
      placeholder="dd/mm/yyyy"
        style={styles.input}
        onChangeText={onChangeDate}
        value={date}
      />
    </View>

    <View>
        <Text style={styles.textStyle}>Adicionar tag</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeAddTag}
        value={addTag}
      />
    </View>

    <View>
        <Text style={styles.textStyle}>Adicionar tag</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeAddTag}
        value={addTag}
      />
    </View>

    <View>
        <Text style={styles.textStyle}>Adicionar tag</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeAddTag}
        value={addTag}
      />
    </View>

    <View>
        <Text style={styles.textStyle}>Adicionar tag</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeAddTag}
        value={addTag}
      />
    </View>

    <View>
        <Text style={styles.textStyle}>Adicionar tag</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeAddTag}
        value={addTag}
      />
    </View>
    
  </ScrollView>
 
</View>

  );
};

const styles = StyleSheet.create({

    container1: {
        padding: 10,
        //flex: 3,
      },

    textStyle:{
        fontSize: 15,
        color: 'black',
        marginLeft: 12,
        marginTop:11
        },

    inputDescription: {
        height:110,
        textAlignVertical: 'top',
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

});