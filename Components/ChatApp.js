import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ChatApp() {
    return (
        <View style={styles.chat_head}>
            <Icon name='arrow-back' size={26} style={styles.icon}></Icon>
            <Icon name='account-circle' size={40} style={styles.profile}></Icon>
            <Text style={styles.user_name}>UserName</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    chat_head: {
        // flex: 0.14,
        height: 50,
        padding: 4,
        alignItems: "center",
        flexDirection: 'row',
        backgroundColor: "#203636",
    },
    icon: {
        color: "#ffffff",
    },
    profile: {
        color: "#ffffff",
        marginLeft: 1,
        marginRight: 2,
    },
    user_name: {
        flex: 1,
        color: "#ffffff",
        fontSize: 18,
    },
});
