import { FlatList, StyleSheet, View } from "react-native";
import { FoodCategories, FoodCategory } from "../models/FoodCategory";
import FoodCategoryItem from "../components/FoodCategoryItem";
import { Colors } from "../styles/constants/Colors";

const numColumns = 2

function renderFoodCategory({ item }: { item: FoodCategory }) {
    return <FoodCategoryItem category={item} numColumns={numColumns} />
}

function FoodCategoryList() {
    return <View style={styles.container}>
        <FlatList numColumns={numColumns} data={FoodCategories} renderItem={renderFoodCategory} keyExtractor={item => item.idCategory} 
      />
    </View>
}

export default FoodCategoryList;

const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: Colors.accent300,
       
    },
}
)