import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{headerShown: false}}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused, color }) => <Ionicons name={focused ? 'home-outline' : 'home'} color={color} size={28}/>
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: 'Library',
          tabBarIcon: ({ focused, color }) => <Ionicons name={focused ? 'library-outline' : 'library'} color={color} size={28}/>
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused, color }) => <Ionicons name={focused ? 'person-outline' : 'person'} color={color} size={28}/>
        }}
      />

      <Tabs.Screen
        name="manga/[id]"
        options={{
          href: null
        }}
      />
    </Tabs>
  );
}