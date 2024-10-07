import { FlatList, ScrollView, StyleSheet, Text } from "react-native";
import { FoodCategories, FoodCategory } from "../models/FoodCategory";
import FoodCategoryItem from "../components/FoodCategoryItem";

function renderFoodCategory({ item }: { item: FoodCategory }) {
    return <FoodCategoryItem category={item} />
}


function FoodCategoryList() {
    return <ScrollView style={styles.scrollContainer}>
        <FlatList data={FoodCategories} renderItem={renderFoodCategory} keyExtractor={item => item.idCategory} />
    </ScrollView>
}

export default FoodCategoryList;

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1
    },


}
)