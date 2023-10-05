import Screen1 from './Screen1';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {useNavigation} from '@react-navigation/native'
import Screen2 from './Screen2';
import Like from './Like';
import Accout from './Accout';
import Chat from './Chat';
import Screen3 from './Screen3';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import Add from './Add';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const renderHomeIcon = () => (
  <Image source={require('./assets/iconMenuList.png')}  />
);

const renderLikeIcon = () => (
  <Image tintColor={'#313131'} source={require('./assets/iconMenuHeart.png')}  />
);

const renderAddtIcon = () => (
  <Image source={require('./assets/iconAdd.png')}  />
);

const renderChatIcon = () => (
  <Image source={require('./assets/iconMenuChat.png')}  />
);

const renderAccountIcon = () => (
  <Image source={require('./assets/iconMenuUser.png')}  />
);

function StackScreen1() {

  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Screen1} options={{ headerShown: false, tabBarIcon:renderHomeIcon }} />
      <Tab.Screen name="Like" component={Like} options={{tabBarIcon:renderLikeIcon}}/>
      <Tab.Screen name="Add" component={Add} options={{tabBarIcon:renderAddtIcon, tabBarLabel:''}}/>
      <Tab.Screen name="Chat" component={Chat} options={{tabBarIcon:renderAccountIcon}}/>
      <Tab.Screen name="Account" component={Accout} options={{tabBarIcon:renderAccountIcon}}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={StackScreen1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Next to you"
          component={Screen2}
          options={{ headerTitleAlign: 'center' }}
        />
        <Stack.Screen
          name="CartDog"
          component={Screen3}
          options={{
            headerShown: false,
            headerLeft: () => {
              <TouchableOpacity onPress={() => useNavigation().goBack()}>
                <Image source={require('./assets/Return.png')} />
              </TouchableOpacity>
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}