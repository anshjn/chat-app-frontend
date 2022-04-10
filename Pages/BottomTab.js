import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ChatList from './ChatList';
import GroupChatList from './GroupChatList';
import RequestList from './RequestList';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      // The `merge: true` option makes sure that the params inside the tab screen are preserved
      navigation.navigate({ name: route.name, merge: true });
    }
  };
  
  return (
    <View style={styles.fixpos}>
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'HOME') {
                    iconName = focused
                        ? 'home'
                        : 'home';
                    } else if (route.name === 'JOURNEY') {
                        iconName = focused ? 'flag' : 'flag';
                        }else if (route.name === 'PROFILE') {
                            iconName = focused ? 'person' : 'person';
                            }else if (route.name === 'FAVOURITES') {
                                iconName = focused ? 'star' : 'star';
                                }else if (route.name === 'CHAT') {
                                    iconName = focused ? 'question_answer' : 'question_answer';
                                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                    },
                        tabBarActiveTintColor: 'tomato',
                        tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="one-to-one" component={ChatList} />
                <Tab.Screen name="one-to-many" component={GroupChatList} />
                <Tab.Screen name="Request" component={RequestList} />
            </Tab.Navigator>
        </NavigationContainer>        
    </View>

  );
}

const styles = StyleSheet.create({
  fixpos: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
  },
  user: {
    marginRight: 16,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  user_icon: {
    position: 'relative',
    borderRadius: '50%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    padding: 2,
    backgroundColor: '#ffffff',
  },
  user_active: {
    bottom: 0,
    right: 0,
    zIndex: 10,
    height: 6,
    width: 6,
    borderRadius: '50%',
    position: 'absolute',
    backgroundColor: '#FF0000',
  },
  icon_text: {
    fontSize: '12',
    color: '#000000',
  },
});
