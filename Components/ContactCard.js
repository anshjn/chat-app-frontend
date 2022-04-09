import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ContactCard() {
    return (
        <View style={styles.chat_head}>
            <Icon name='account-circle' size={40} style={styles.profile}></Icon>
            <View style={styles.card}>
                <Text style={styles.user_name}>UserName</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    chat_head: {
        height: 50,
        padding: 4,
        alignItems: "center",
        flexDirection: 'row',
        backgroundColor: "#ffffff",
    },
    profile: {
        marginRight: 2,
    },
    card: {
        flex: 1,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderStyle: "solid",
        borderColor: "#808080",
    },
    user_name: {
        flex: 1,
        color: "#000000",
        fontSize: 18,
    },
});
