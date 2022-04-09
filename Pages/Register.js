import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Register() {
    return (
        <View style={styles.input_container}>
            <Text style={styles.title}>Register Your Self</Text>
            <View style={styles.form}>
                <View style={styles.msg_container}>
                    <TextInput
                        style={{
                            paddingLeft: 6,
                            height: 40,
                            borderColor: 'gray',
                            borderWidth: 1,
                            marginVertical: 10
                        }}
                        placeholder="Name me!"
                    />
                </View>
                <View style={styles.icon_container}>
                    <Icon name='send' size={25} style={styles.send}></Icon>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    input_container: {
        flex: 1,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    form: {
        alignItems: "center",
    },
    title: {
        color: "#000000",
        fontSize: 18,
    },
    msg_container: {
        flex: 1,
    },
    icon_container: {
        width: 50,
        height: 50,
        padding: 8,
        position: "relative",
        borderRadius: "50%",
        backgroundColor: "#50895f",
    },
    send: {
        // color: "#ffffff",
        left: "54%",    
        top: "50%",
        transform: "translate(-50%,-50%)",
        position: "absolute",
    },
});
