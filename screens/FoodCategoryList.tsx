import { FlatList, StyleSheet, View } from "react-native";
import { FoodCategories, FoodCategory } from "../models/FoodCategory";
import FoodCategoryItem from "../components/FoodCategoryItem";

function renderFoodCategory({ item }: { item: FoodCategory }) {
    return <FoodCategoryItem category={item} />
}


function FoodCategoryList() {
    return <View style={styles.container}>
        <FlatList style={styles.list} data={FoodCategories} renderItem={renderFoodCategory} keyExtractor={item => item.idCategory} />
    </View>
}

export default FoodCategoryList;

const styles = StyleSheet.create({
    container: {
       flex: 1,
    },

    list:{
       flexDirection: 'column'
    }



}
)