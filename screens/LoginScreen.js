import React, { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, View, KeyboardAvoidingView, Text, Keyboard, TouchableWithoutFeedback } from "react-native";
import { Button, Input, Pressable } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { Entypo } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Watering Flower",
            headerStyle: { backgroundColor: "#008000" },
            headerBackVisible: false,
            headerTitle: () => (
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                }}>
  
                    <Text style={{ color: "white", fontWeight: "800", fontSize: 18}}>
                        Watering Flower
                    </Text>
                </View>
            )
        })
    });

    const signIn = () => {
        navigation.navigate('Home');
    };

    return (
        <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
        
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style="light" />
            <Entypo name="flower" size={120} color="#008000" />
            <View style={styles.inputContainer}>
                <Input 
                    style={styles.textInput}
                    placeholder="Email"  
                    type="email" 
                    value={email} 
                    onChangeText={(text) => setEmail(text)}
                />
                <Input 
                    style={styles.textInput}
                    placeholder="Password" 
                    secureTextEntry 
                    type="password"
                    value={password} 
                    onChangeText={(text) => setPassword(text)}
                    onSubmitEditing={signIn}
                />
            </View>
            <Button containerStyle={styles.button} onPress={signIn} title="Login" />
            <Button onPress={() => navigation.navigate('Register')} containerStyle={styles.button} 
            type="outline" title="Register" />
            
        </KeyboardAvoidingView>
        
        </TouchableWithoutFeedback>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    inputContainer:{
        width: 300
    },
    button: {
        width: 160,
        maginTop: 10,
        padding: 5,
    },
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textInput: {
        flex: 1,
        backgroundColor: "#fff",
        color: "dimgrey",
        borderRadius: 5,
        fontSize: 16,
        fontWeight: "700",
        padding: 1,
        paddingTop: 10
    },
  });