import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { Perfil } from "../screens/Perfil/perfil";

const Tab = createBottomTabNavigator();

import { Image } from "react-native";
import House from "../assets/home.svg";
import Search from "../assets/search.svg";
import Store from "../assets/store.svg";
import Union from "../assets/union.svg";

export function TabsRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 65,
          backgroundColor: "#d265fc",
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <House color={color} />,
        }}
        name="Home2"
        component={Search}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <Search color={color} />,
        }}
        name="Home"
        component={Home}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <Union color={color} />,
        }}
        name="Home3"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <Store color={color} />,
        }}
        name="Home4"
        component={Home}
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
  );
}
