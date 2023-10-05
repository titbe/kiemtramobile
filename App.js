import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen1 from './Screen1';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Screen2 from './Screen2';
import Like from './Like';
import Accout from './Accout';
import Chat from './Chat';
import Screen3 from './Screen3';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function StackScreen1() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HOuse" component={Screen1} options={{headerShown: false}}/>
      <Stack.Screen name="Next to you" component={Screen2} />
      <Stack.Screen name="CartDog" component={Screen3} options={{ headerBackTitleVisible:false}}/>
      
    </Stack.Navigator>          
  );
}

export default function App() {
  return (
        <NavigationContainer>
          <Tab.Navigator initialRouteName='Home'> 
            <Tab.Screen name="Home" component={StackScreen1} options={{headerShown: false, tabBarStyle:{display:'none'}}}/>
            <Tab.Screen name="Like" component={Like} />
            <Tab.Screen name="Chat" component={Chat} />
            <Tab.Screen name="Accout" component={Accout} />
          </Tab.Navigator>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
