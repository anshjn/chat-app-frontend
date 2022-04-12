import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native';
import ChatApp from '../Components/ChatApp';
import InputMsg from '../Components/InputMsg';
import MessageLeft from '../Components/MessageLeft';
import MessageRight from '../Components/MessageRight';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

export default function ChatPage() {
  return (
    <View style={{ height: vh(102) }}>
      
      <ChatApp />
      <ScrollView style={styles.chat_msg}>
        <MessageRight />
        <MessageLeft />
        <MessageRight />
        <MessageLeft />
        <MessageRight />
        <MessageLeft />
        <MessageRight />
        <MessageLeft />
        <MessageRight />
        <MessageLeft />
        <MessageRight />
        <MessageLeft />
        <MessageRight />
        <MessageLeft />
        <MessageRight />
        <MessageLeft />
        <MessageRight />
        <MessageLeft />
        
        
        
      </ScrollView>
      <View style={styles.msg_input}>
        <InputMsg />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  chat_msg: {
    paddingBottom: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#d3d3d3",
  },
  msg_input:{
    paddingVertical: 6,
    height: 40,
  },
});
