import React from 'react';
import { Text, Button, StyleSheet, View, Alert, Image, StatusBar, TouchableOpacity, Icon, ScrollView, SafeAreaView } from 'react-native';
import { Created } from './Created';

export const HeaderHome = props => {
    return (
        
        <View >

            <StatusBar 
                backgroundColor={'blue'}
                barStyle="default"
                />

            <View style={styles.teste}>
                
                <View>
                    <Text style={styles.titleText}>        
                        Notas                 
                    </Text>
                </View>

                <View></View>
                <View></View>
                <View></View>

                <TouchableOpacity
                    style={styles.buttonHeader}
                    onPress={() => Alert.alert('New Search')}
                    //   onPress={() => props.function()}
                    >
                    <Image
                        style={styles.image}
                        source={require("../img/icons/procurar.png")}
                        tintColor="#FFF"
                    />
                </TouchableOpacity> 

                <TouchableOpacity
                    style={styles.buttonHeader}
                    onPress={() => props.navigation.navigate("CreateNote")}
                    //   onPress={() => props.function()}
                    >
                    <Image
                        style={styles.image}
                        source={require("../img/icons/mais.png")}
                        tintColor="#FFF"
                    />
                </TouchableOpacity> 

            </View>
        </View>


);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function HeaderCreated() {
    return (

    <View>

        <View style={styles.container}>

            <StatusBar 
                backgroundColor={'blue'}
                barStyle="default"
                />

            <View  style={styles.teste}>
                <Text style={styles.titleText}>        
                    Criar nota                 
                </Text>

                <TouchableOpacity
                    color={'transparent'} 
                    onPress={() => Alert.alert('Closed')}
                    >
                    <Text style={styles.txtButtonMais}>X</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonCreate}>

                <TouchableOpacity style={styles.buttonCreateNote}
                    color={'blue'} 
                    onPress={() => Alert.alert('New Note')}
                >
                    <Text style={styles.txtButtonMais}>Criar Nota</Text>
                </TouchableOpacity>

            </View>

        </View>

    </View>

);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function HeaderEdit() {
    return (

    <View>

        <View style={styles.container}>

            <StatusBar 
                backgroundColor={'blue'}
                barStyle="default"
                />

            <View style={styles.teste}>

                <Text style={styles.titleText}>        
                    Editar nota                 
                </Text>

                <View></View>
                <View></View>
                <View></View>
                <View></View>

                <TouchableOpacity 
                    color={'transparent'} 
                    onPress={() => Alert.alert('Deleted')}
                    >
                    <Text style={styles.txtButtonMais}>D</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    color={'transparent'} 
                    onPress={() => Alert.alert('Closed')}
                    >
                    <Text style={styles.txtButtonMais}>X</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.buttonCreate}>

                <TouchableOpacity style={styles.buttonCreateNote}
                    color={'blue'} 
                    onPress={() => Alert.alert('New Note')}
                >
                    <Text style={styles.txtButtonMais}>Criar Nota</Text>
                </TouchableOpacity>

            </View>

        </View>

    </View>

);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function HeaderNoteOpen() {
    return (

    <View>
        <View style={styles.containerTwo}>

            <StatusBar 
                backgroundColor={'blue'}
                barStyle="default"
                />

            <View style={styles.teste}>

                <Text style={styles.titleTextNoteOpen}>v</Text>
                
                <TouchableOpacity 
                    color={'transparent'} 
                    onPress={() => Alert.alert('Back')}
                    >
                    <Text style={styles.txtButtonNoteOpen}>Voltar</Text>
                </TouchableOpacity>

                <View></View>
                <View></View>
                <View></View>
                <View></View>

                <TouchableOpacity 
                    color={'transparent'} 
                    onPress={() => Alert.alert('Deleted')}
                    >
                    <Text style={styles.txtButtonNoteOpen}>D</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    color={'transparent'} 
                    onPress={() => Alert.alert('Closed')}
                    >
                    <Text style={styles.txtButtonNoteOpen}>X</Text>
                </TouchableOpacity>

            </View>

        </View>

    </View>

);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor: '#0000ff',
        padding: 60, 
    },

    containerTwo: {
        flex:1,
        backgroundColor: '#0000ff',
        padding: 50, 
    },

   teste: {
        flexDirection:'row',
        backgroundColor: '#0000ff',
        padding: 40,
        paddingBottom: 10,
        //paddingHorizontal: 20,
        //height: 60, 
        alignItems: 'center',
       justifyContent: 'space-between',
       // marginTop: 50,
       // marginRight: 50,
       
    },

    buttonCreate: {
        flexDirection:'row',
        paddingTop: 577, 
        alignItems: 'center',
        justifyContent: 'center',

    },
    
    buttonStyleTwo: {
        backgroundColor: 'blue',
        resizeMode: 'contain',
        height: 50,
        width: 50,
        alignItems: 'center', // horizontal
        justifyContent: 'center', //vertical
    },

    buttonCreateNote: {
        backgroundColor: 'blue',
        height: 70,
        width: 412,
        alignItems: 'center', // horizontal
        justifyContent: 'center', //vertical
    },
      
    txtButtonMais: {
        color: 'white',
        fontSize: 25
    },

    txtButtonNoteOpen: {
        color: 'white',
        fontSize: 20
    },

    titleText: {
        color: 'white',
        fontSize: 37,
    },

    titleTextNoteOpen: {
        color: 'white',
        fontSize: 22,
    },

    image: {
        marginLeft: 50,
        marginTop: 5,
        height: 30,
        width: 30
      },
    
      buttonHeader: {
        width: 35,
        height: 35,
        marginRight: 20,
        alignItems: "center",
      },

  });