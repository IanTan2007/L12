import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {datasource} from './Data.js';

const Add = ({navigation}) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [type, setType] = useState("Japanese Cuisine");

    return (
        <ScrollView contentContainerStyle={styles.container}>

            <View style={styles.titleContainer}>
                <MaterialIcons name="restaurant-menu"
                               size={32} color="#E53935"/>
                <Text style={styles.title}>Add Food</Text>
            </View>

            <Text style={styles.label}>Food Name:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setName(text)}
            />

            <Text style={styles.label}>Description:</Text>
            <TextInput
                style={styles.input}
                multiline={true}
                onChangeText={(text) => setDescription(text)}
            />

            <Text style={styles.label}>Price (S$):</Text>
            <TextInput
                style={styles.input}
                keyboardType="decimal-pad"
                onChangeText={(text) => setPrice(text)}
            />

            <Text style={styles.label}>Image URL:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                onChangeText={(text) => setImage(text)}
            />

            <Text style={styles.label}>Cuisine:</Text>

            <View style={styles.pickerContainer}>
                <Picker selectedValue={type}
                        onValueChange={(text) => setType(text)}>
                    <Picker.Item label="Japanese Cuisine"
                                 value="Japanese Cuisine"/>
                    <Picker.Item label="Italian Cuisine"
                                 value="Italian Cuisine"/>
                </Picker>
            </View>

            <View style={styles.buttonContainer}>
                <Button title="Add Food" color="#E53935"
                        onPress={() => {
                            let item = {
                                name: name,
                                description: description,
                                price: Number(price),
                                image: image
                            };

                            let indexnum = 1;

                            if (type == "Japanese Cuisine") {
                                indexnum = 0;
                            }

                            datasource[indexnum].data.push(item);
                            navigation.navigate("Home");
                        }}
                />
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
    },
});

export default Add;