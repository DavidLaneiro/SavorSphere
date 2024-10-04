import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import FoodCategoryList from "./screens/FoodCategoryList";
import FavoritesList from "./screens/FavoritesList";
import { NavigationContainer } from "@react-navigation/native";

// Create Navigators
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="FoodCategoryList" component={FoodCategoryList}/>
      <Tab.Screen name="Favorites" component={FavoritesList}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
        <Tabs />
    </NavigationContainer>
  );
}
