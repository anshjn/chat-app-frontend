import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import ContactCard from '../Components/ContactCard';

export default function ChatList({navigation}) {
    const navigateTo = () => {
        Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );
        navigation.navigate('ChatPage')
    }
    return (
        <View style={styles.container}>
            <View style={styles.list_head}>
                <Text style={styles.text}>Chats</Text>
            </View>
            <ContactCard  />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // height: "100vh",
        flex:1
    },
    list_head: {
        height: 50,
        padding: 4,
        paddingLeft: 24,
        justifyContent: "center",
        backgroundColor: "#203636",
        marginTop: 23
    },
    text: {
        justifyContent: "center",
        color: "#ffffff",
        fontSize: 18,
    },
    chat_msg: {
      flex: 1,
      paddingBottom: 6,
      paddingHorizontal: 8,
      backgroundColor: "#d3d3d3",
    },
});
