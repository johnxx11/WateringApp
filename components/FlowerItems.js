import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';


const FlowerItems = () => {
    return (
        <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivider style={styles.container}>
            <Avatar
                size={40}
                source={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
                avatarStyle={{borderRadius: 5 }}
            />
        </ListItem>
    );
};

const styles = StyleSheet.create({
    chatName: {
        fontWeight: "800",
        flexDirection: "row",
        color: "#191970",
        fontSize: 16,
        alignSelf: "flex-start",
        right: 8,
        bottom: 3,
    },
    lastMessage: {
        color: "grey",
        fontWeight: "600",
        flexDirection: "row",
        alignSelf: "flex-start",
        right: 8,
        fontSize: "15",
    },
    time: {
        alignSelf: "flex-end",
        color: "grey",
        fontWeight: "600",
        fontSize: "15",
        alignSelf: "flex-end",
    }
});

export default FlowerItems;