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


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    // <View style={styles.container}>
    //   {/* <Register /> */}
    //   <ChatList />
    //   <StatusBar style="auto" />
    // </View>
    <>
    <NavigationContainer>
       <Stack.Navigator
       screenOptions={{
        headerShown: false
        }}
        initialRouteName='Request'>
        <Stack.Screen name="one-to-one" component={ChatList} />
        <Stack.Screen name="one-to-many" component={GroupChatList} />
        <Stack.Screen name="Request" component={RequestList} />
       </Stack.Navigator>
    </NavigationContainer>
        <BottomTab />
    </>
    

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
