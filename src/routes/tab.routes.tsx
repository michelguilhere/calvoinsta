import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { Perfil } from "../screens/Perfil/perfil";
import { Procurar } from "../screens/Procurar/procurar";
import { Mensagem } from "../screens/Mensagem/mensagem";
import { Mais } from "../screens/Mais/Mais";
import { Login } from "../screens/Login";
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import { Image } from "react-native";
import House from "../assets/home.svg";
import Search from "../assets/search.svg";
import Store from "../assets/store.svg";
import Union from "../assets/union.svg";

export function TabsRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Main" options={{ headerShown: false }}>
        {() => (
          <Tab.Navigator
            screenOptions={{
              tabBarStyle: {
                height: 65,
                backgroundColor: '#d265fc',
              },
              tabBarShowLabel: false,
            }}
          >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <House color={color} />,
        }}
        name="Home2"
        component={Home}
      />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <Search color={color} />,
        }}
        name="Home"
        component={Procurar}
      />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <Union color={color} />,
        }}
        name="Home3"
        component={Mais}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <Store color={color} />,
        }}
        name="Home4"
        component={Mensagem}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              style={{ width: 30, height: 30, borderRadius: 50,borderWidth: 2, borderColor: "#000" }}
              source={{ uri: "https://instagram.fpoa12-1.fna.fbcdn.net/v/t51.2885-19/362103504_168876816204434_5501704256855316351_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fpoa12-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=pW-eayKrr9UAX-N-NHI&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfDFnZ6NxwiBHl-e9I0yfIKvTT6HpKH6qLcEogEHz8h0bw&oe=654EA77E&_nc_sid=ee9879" }}
            />
          ),
        }}
        name="Home5"
        component={Perfil}
      />
    </Tab.Navigator>
    )}
    </Stack.Screen>
    </Stack.Navigator>
  );
}
