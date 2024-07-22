import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Todo from './screens/Todo';
import InProgress from './screens/InProgress';
import Done from './screens/Done';
import { FontAwesome6 } from '@expo/vector-icons';
import TaskProvider from './context/TaskProvider';
import TaskDetail from './screens/TaskDetail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="main-todo" component={Todo} options={{ headerShown: false }}/>
      <SettingsStack.Screen name="NEW" component={TaskDetail} options={{ headerBackTitle: 'BACK' }}/>
      <SettingsStack.Screen name="DETAIL" component={TaskDetail} options={{ headerBackTitle: 'BACK' }}/>
    </SettingsStack.Navigator>
  );
}

export default function App() {
  return (
    <TaskProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="TODO"
            component={SettingsStackScreen}
            options={{
              tabBarLabel: 'TODO',
              tabBarIcon: ({ color, size }) => (
                <FontAwesome6 name="list-ul" color={color} size={size} />
              )
            }}
          />
          <Tab.Screen
            name="IN PROGRESS"
            component={InProgress}
            options={{
              tabBarLabel: 'IN PROGRESS',
              tabBarIcon: ({ color, size }) => (
                <FontAwesome6 name="play-circle" color={color} size={size} />
              )
            }}
          />
          <Tab.Screen
            name="DONE"
            component={Done}
            options={{
              tabBarLabel: 'DONE',
              tabBarIcon: ({ color, size }) => (
                <FontAwesome6 name="check-double" color={color} size={size} />
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </TaskProvider >
  );
}