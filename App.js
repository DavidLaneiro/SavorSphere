import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import FoodCategoryList from "./screens/FoodCategoryList";
import FavoritesList from "./screens/FavoritesList";
import { NavigationContainer } from "@react-navigation/native";
import { Colors } from "./styles/constants/Colors";
import {FontAwesome6
} from "@expo/vector-icons";

// Create Navigators
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Create Bottom Tabs
function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.orange300 },
        headerTintColor: Colors.white500,
        tabBarStyle: { backgroundColor: Colors.orange300 },
        tabBarActiveTintColor: Colors.white500,
        tabBarInactiveTintColor: Colors.green500,
      }}
    >
      <Tab.Screen
        name="FoodCategoryList"
        component={FoodCategoryList}
        options={{
          title: "Food Categories",
          tabBarIcon: ({ color, size }) => (<FontAwesome6 name="bowl-food" color={color} size={size} />),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesList}
        options={{
          title: "Favorites",
          tabBarIcon: ({color, size }) => (<FontAwesome6 name="star" color={color} size={size} />)
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Tabs />
    </NavigationContainer>
  );
}
