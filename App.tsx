import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import TaskList from './screens/TaskList'
import { FontAwesome6 } from '@expo/vector-icons'
import TaskProvider from './context/TaskProvider'
import TaskDetail from './screens/TaskDetail'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Tab = createBottomTabNavigator()

const SettingsStack = createNativeStackNavigator()

function TodoStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="todo" component={TaskList} options={{ headerShown: false }} />
      <SettingsStack.Screen name="NEW" component={TaskDetail} options={{ headerBackTitle: 'BACK' }} />
      <SettingsStack.Screen name="DETAIL" component={TaskDetail} options={{ headerBackTitle: 'BACK' }} />
    </SettingsStack.Navigator>
  )
}

function InProgressStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="inprogress" component={TaskList} options={{ headerShown: false }} />
      <SettingsStack.Screen name="DETAIL" component={TaskDetail} options={{ headerBackTitle: 'BACK' }} />
    </SettingsStack.Navigator>
  )
}

function DoneStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="done" component={TaskList} options={{ headerShown: false }} />
      <SettingsStack.Screen name="DETAIL" component={TaskDetail} options={{ headerBackTitle: 'BACK' }} />
    </SettingsStack.Navigator>
  )
}

export default function App() {
  return (
    <TaskProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="TODO"
            component={TodoStackScreen}
            options={{
              tabBarLabel: 'TODO',
              tabBarIcon: ({ color, size }) => (
                <FontAwesome6 name="list-ul" color={color} size={size} />
              )
            }}
          />
          <Tab.Screen
            name="IN PROGRESS"
            component={InProgressStackScreen}
            options={{
              tabBarLabel: 'IN PROGRESS',
              tabBarIcon: ({ color, size }) => (
                <FontAwesome6 name="play-circle" color={color} size={size} />
              )
            }}
          />
          <Tab.Screen
            name="DONE"
            component={DoneStackScreen}
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
  )
}