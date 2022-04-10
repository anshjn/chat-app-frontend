import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ContactCard from '../Components/ContactCard';

export default function RequestList() {
    return (
        <View style={styles.container}>
            <View style={styles.list_head}>
                <Text style={styles.text}>Request</Text>
            </View>
            <ContactCard />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100vh",
    },
    list_head: {
        height: 50,
        padding: 4,
        paddingLeft: 24,
        justifyContent: "center",
        backgroundColor: "#203636",
    },
    text: {
        justifyContent: "center",
        color: "#ffffff",
        fontSize: 18,
    },
    // chat_msg: {
    //   // flex: 1,
    //   paddingBottom: 6,
    //   paddingHorizontal: 8,
    //   backgroundColor: "#d3d3d3",
    // },
});
