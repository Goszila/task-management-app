import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Todo from './screens/Todo';
import InProgress from './screens/InProgress';
import Done from './screens/Done';
import { FontAwesome6 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="TODO"
          component={Todo}
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
            tabBarLabel: 'IN PROGRESS',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome6 name="check-double" color={color} size={size} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
