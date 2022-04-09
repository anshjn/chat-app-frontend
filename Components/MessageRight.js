import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

export default function MessageRight() {
    return (
        <View style={styles.msg_container}>
            <Text>Lorem ipsum, or lipsum as it is sometimes known</Text>
            <View style={styles.time_container}>
                <Text style={styles.msg_time}>5:30 PM</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    msg_container: {
        padding: 4,
        width: "60%",
        borderRadius: 8,
        marginBottom: 8,
        position: "relative",
        backgroundColor: "#ffffff",
    },
    msg: {
        fontSize: 14,
        color: "#203636",
    },
    time_container: {
        right: 4,
        bottom: 0,
        position: "absolute",
    },
    msg_time: {
        color: "#808080",
        fontSize: 11,
    },
});
