import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChatList from './Pages/ChatList';
import Register from './Pages/Register';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Register /> */}
      <ChatList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100vh",
  },
  // chat_msg: {
  //   // flex: 1,
  //   paddingBottom: 6,
  //   paddingHorizontal: 8,
  //   backgroundColor: "#d3d3d3",
  // },
});
