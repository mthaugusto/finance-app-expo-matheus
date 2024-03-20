import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./pages/Home";
import Money from "./pages/Money";
import Store from "./pages/Store";

import CustomTabBar from "./components/CustomTabBar";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        // para tirar o nome do ícone/página
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#212121",

        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: "#FFF",
        },
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: "compare-arrows",
        }}
      />
      <Tab.Screen
        name="Money"
        component={Money}
        options={{
          tabBarIcon: "attach-money",
        }}
      />
      <Tab.Screen
        name="Store"
        component={Store}
        options={{
          tabBarIcon: "storefront",
        }}
      />
    </Tab.Navigator>
  );
}
