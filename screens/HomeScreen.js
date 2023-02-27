import React, { useEffect, useLayoutEffect, useState }from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { Avatar, Button } from 'react-native-elements';
//import CustomListItem from './components/CustomListItem';
import { Entypo, FontAwesome } from "@expo/vector-icons";


const HomeScreen = ({ navigation }) => {
    const signOutUser = () => {
        navigation.replace("Login");
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "",
            headerStyle: { backgroundColor: "#008000" },
            headerTitleStyle: { color: "white" },
            headerTintColor: "white",
            headerBackVisible: false,
            
            headerLeft: () => (
                <View style={{ 
                    right: 3, 
                    bottom: 3,                    
                    flexDirection: "row",
                    width: 75,
                    justifyContent: "space-between", 
                }}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Avatar 
                            rounded 
                            size={35}
                            source={{ uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}}
                            avatarStyle={{
                                borderWidth: 2,
                                borderColor: '#fff'}}
                        />
                    </TouchableOpacity>
                    <Text style={styles.userName}>{"Name"}</Text>
                </View>
            ),
            headerRight: () => (
                <View style={{
                    left: 38,
                    bottom: 3,   
                    flexDirection: "row",
                    width: 70,
                    justifyContent: "space-between",
                    
                }}>
                    
                    <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
                        <FontAwesome name="sign-out" size={27} color="#FFF"/>
                    </TouchableOpacity>
                </View>
            ),
        });
    }, [navigation]);


    return (
      <SafeAreaView>
        <StatusBar style="light" />
        <ScrollView style={styles.container} >
            <Text style={styles.welcomeMessage}>Hi nickname, welcome to your smart plant care system</Text>
        </ScrollView>
        <Button onPress={() => navigation.navigate('AddFlower')} title="Add new plant" containerStyle={styles.button}/>
      </SafeAreaView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        
    },
    userName: {
        flexDirection: "row",
        color: "white",
        fontWeight: "600",
        fontSize: 20,
        alignSelf: "center",
        marginStart: 10,
        justifyContent: "center"
    },
    welcomeMessage: {
        flex: 1,
        backgroundColor: "#fff",
        color: "dimgrey",
        fontSize: 20,
        fontWeight: "700",
        padding: 1,
        paddingTop: 5,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'ceneter',
        
        width: '100%'
    },
    button: {
        width: 160,
        justifyContent: 'center',
        bottom: 40,
        alignSelf: 'center'
    },
});