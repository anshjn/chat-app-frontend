import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native';
import ChatApp from '../Components/ChatApp';
import InputMsg from '../Components/InputMsg';
import MessageLeft from '../Components/MessageLeft';
import MessageRight from '../Components/MessageRight';

export default function ChatPage() {
  return (
    <View>
      
      <ChatApp />
      <ScrollView style={styles.chat_msg}>
        <MessageRight />
        <MessageLeft />
        
        
      </ScrollView>
      <View>
        <InputMsg />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   // flex: 0.8,
  //   height: "100vh",
  // },
  chat_msg: {
    // flex: 1,
    paddingBottom: 6,
    paddingHorizontal: 8,
    backgroundColor: "#d3d3d3",
  },
});
