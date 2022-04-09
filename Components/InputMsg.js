import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function InputMsg() {
    return (
        <View style={styles.input_container}>
            <Icon name='emoji-emotions' size={25}></Icon>
            <View style={styles.msg_container}>
                <TextInput
                    style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        borderRadius: 30,
                        padding: 10
                    }}
                    placeholder="Message"
                    multiline={true}
                />
            </View>
            <Icon name='send' size={25}></Icon>
        </View>
    );
}

const styles = StyleSheet.create({
    input_container: {
        // flex: 0.1,
        width: "100%",
        height: 46,
        alignItems: "center",
        flexDirection: "row",
    },
    msg_container: {
        flex: 1,
        marginLeft: 2,
        marginRight: 6,
    },
});
