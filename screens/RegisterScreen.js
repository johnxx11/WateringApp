import React, { useLayoutEffect, useState }from 'react';
import { StyleSheet, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Text } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { Avatar, Button, Input } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";


const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "",
            headerStyle: { backgroundColor: "#008000" },
            headerLeft: () => (
                <TouchableOpacity
                    style={{ left: -4 }}
                    onPress={navigation.goBack}
                >
                    <AntDesign name="caretleft" size={24} color="white" />
                </TouchableOpacity>
            ),
            headerTitle: () => (
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                }}>
  
                    <Text style={{ color: "white", fontWeight: "800", fontSize: 18}}>
                        Register
                    </Text>
                </View>
            )
        });
    }, [navigation]);

    const register = () => {
        navigation.navigate('Login');
    }

    return (
        <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />
            <TouchableOpacity activeOpacity={0.5}>
            <Avatar 
                rounded 
                size={130}
                source={{ uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}}
                containerStyle={{marginBottom: 30, alignSelf:"center"}}
                avatarStyle={{}}
            />
            </TouchableOpacity>
            <View style={styles.inputContainer}>
                <Input 
                    placeholder='User Name' 
                    style={styles.textInput}
                    type='text' 
                    value={name}
                    onChangeText={text => setName(text)}
                />
                <Input 
                    style={styles.textInput}
                    placeholder='Email' 
                    type='email' 
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <Input 
                    style={styles.textInput}
                    placeholder='Password' 
                    secureTextEntry
                    type='password' 
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
                <Input 
                    style={styles.textInput}
                    placeholder='Profile Picture URL (optional)' 
                    type='text' 
                    value={imageUrl}
                    onChangeText={text => setImageUrl(text)}
                    onSubmitEditing={register}
                />
            </View>

            <Button 
                containerStyle={styles.button}
                raised 
                onPress={register} 
                title="Continue" 
            />
        </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    button: {
        width: 160,
        marginBottom: 80,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        
    },
    inputContainer: {
        width: 280,
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