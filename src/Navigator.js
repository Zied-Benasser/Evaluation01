import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Profil from "./screens/Profil";
import MapExample from "./screens/maps";


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Profil" component={Profil} options={{
                headerShown: false, tabBarIcon: ({ color }) => (<Ionicons name="home-outline" color={color} size={26} />
                )
            }} />
            <Tab.Screen name="Location" component={MapExample} options={{
                headerShown: false, tabBarIcon: ({ color }) => (<Ionicons name="home-outline" color={color} size={26} />
                )
            }} />
        </Tab.Navigator>
    );
};

export default TabNavigator;