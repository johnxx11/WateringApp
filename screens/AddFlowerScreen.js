import React, { useState, useLayoutEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Input} from "react-native-elements";
import { Entypo, AntDesign } from '@expo/vector-icons';

const AddFlowerScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [humidity, setHumidity] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "New Plant",
            headerStyle: { backgroundColor: "#008000" },
            headerLeft: () => (
                <TouchableOpacity
                    style={{ left: -4 }}
                    onPress={navigation.goBack}
                >
                    <AntDesign name="caretleft" size={24} color="white" />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    const addPlant = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <Input
                placeholder="Plant Name (give a name for your plant)" 
                value={name} 
                onChangeText={(text) => setName(text)}
            />
            <Input
                placeholder="Plant Type (search for your plant)" 
                value={type} 
                onChangeText={(text) => setType(text)}
            />
            <Input
                placeholder="Humidity (default is 20%)" 
                value={humidity} 
                onChangeText={(text) => setHumidity(text)}
                onSubmitEditing={addPlant}
            />
            <Button onPress={addPlant} title='Add Plant' containerStyle={styles.button} disabled={!name || !type || !humidity || name.trim() === "" ||
                name.trim() === "" || type.trim() === "" || humidity.trim() === ""}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignSelf: "center",
        padding: 2,
        
    },
    button: {
        width: 160,
        justifyContent: 'center',
        bottom: 4,
        alignSelf: 'center'
    },
});

export default AddFlowerScreen;