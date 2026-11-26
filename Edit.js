import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, ScrollView, Alert} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {datasource} from './Data.js';

const Edit = ({navigation, route}) => {
    const [name, setName] = useState(route.params.name);
    const [description, setDescription] = useState(route.params.description);
    const [price, setPrice] = useState(String(route.params.price));
    const [image, setImage] = useState(route.params.image);

    return (
        <ScrollView contentContainerStyle={styles.container}>

            <View style={styles.titleContainer}>
                <MaterialIcons name="restaurant-menu"
                               size={32} color="#E53935"/>
                <Text style={styles.title}>Edit Food</Text>
            </View>

            <Text style={styles.label}>Food Name:</Text>
            <TextInput
                value={name}
                style={styles.input}
                onChangeText={(text) => setName(text)}
            />

            <Text style={styles.label}>Description:</Text>
            <TextInput
                value={description}
                style={styles.input}
                multiline={true}
                onChangeText={(text) => setDescription(text)}
            />

            <Text style={styles.label}>Price (S$):</Text>
            <TextInput
                value={price}
                style={styles.input}
                keyboardType="decimal-pad"
                onChangeText={(text) => setPrice(text)}
            />

            <Text style={styles.label}>Image URL:</Text>
            <TextInput
                value={image}
                style={styles.input}
                autoCapitalize="none"
                onChangeText={(text) => setImage(text)}
            />

            <View style={styles.buttonContainer}>
                <View style={{flex: 1}}>
                    <Button title="Save" color="#4CAF50"
                            onPress={() => {
                                let indexnum = 1;

                                if (route.params.type == "Japanese Cuisine") {
                                    indexnum = 0;
                                }

                                datasource[indexnum].data[route.params.index].name = name;
                                datasource[indexnum].data[route.params.index].description = description;
                                datasource[indexnum].data[route.params.index].price = Number(price);
                                datasource[indexnum].data[route.params.index].image = image;

                                navigation.navigate("Home");
                            }}
                    />
                </View>

                <View style={{flex: 1}}>
                    <Button title="Delete" color="#E53935"
                            onPress={() => {
                                let indexnum = 1;

                                if (route.params.type == "Japanese Cuisine") {
                                    indexnum = 0;
                                }

                                Alert.alert("Delete Food?",
                                    "Are you sure you want to delete " + route.params.name + "?",
                                    [
                                        {text: 'Yes', onPress: () => {
                                                datasource[indexnum].data.splice(route.params.index, 1);
                                                navigation.navigate("Home");
                                            }},
                                        {text: 'No'}
                                    ]
                                );
                            }}
                    />
                </View>
            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        paddingTop: 40,
        backgroundColor: '#FFFFFF',
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        marginBottom: 25,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#E53935',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 8,
        backgroundColor: '#F5F5F5',
        padding: 12,
        marginBottom: 18,
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 8,
        backgroundColor: '#F5F5F5',
    },
    buttonContainer: {
        marginTop: 25,
        flexDirection: 'row',
        gap: 15,
    },
});

export default Edit;