import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import FoodCategoryList from "./screens/FoodCategoryList";
import FavoritesList from "./screens/FavoritesList";
import { NavigationContainer } from "@react-navigation/native";
import { Colors } from "./styles/constants/Colors";
import {MaterialCommunityIcons
} from "@expo/vector-icons";

// Create Navigators
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Create Bottom Tabs
function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.secondary300 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: Colors.primary500 },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: Colors.secondary300,
      }}
    >
      <Tab.Screen
        name="FoodCategoryList"
        component={FoodCategoryList}
        options={{
          title: "Food Categories",
          tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="food-fork-drink" color={color} size={size} />),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesList}
        options={{
          title: "Favorites",
          tabBarIcon: ({color, size }) => (<MaterialCommunityIcons name="star" color={color} size={size} />)
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
