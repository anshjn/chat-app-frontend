import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChatList from './Pages/ChatList';
import Register from './Pages/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GroupChatList from './Pages/GroupChatList';
import RequestList from './Pages/RequestList';
import BottomTab from './Pages/BottomTab';

import { useEffect } from 'react/cjs/react.development';
import socket from './Socket';
import ChatPage from './Pages/ChatPage';
// import {AsyncStorage} from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();


export default function App() {
  
  
  useEffect(() => {
    socket.on("chat message", (data) => {
        /*For the listener we specify the event name and we give the callback to which be called one the 
        event is emitted*/
        //Log the Welcome message 
        
        console.log("Message: ", data);
    });
    
  }, [])
  socket.on('get-id', (data) => {
     localStorage.setItem(
      'userDetails',
      data
    );
  })

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerShown: false
          }}
          initialRouteName='one-to-one'>
          <Stack.Screen name="one-to-one" component={ChatList} />
          <Stack.Screen name="one-to-many" component={GroupChatList} />
          <Stack.Screen name="Request" component={RequestList} />
          <Stack.Screen name="ChatPage" component={ChatPage} />
        </Stack.Navigator>
      </NavigationContainer>
        <BottomTab />
    </>
    

  );
}

const styles = StyleSheet.create({
  container: {
    // height: "100vh",
    flex:1
  },
  chat_msg: {
    flex: 1,
    paddingBottom: 6,
    paddingHorizontal: 8,
    backgroundColor: "#d3d3d3",
  },
});
