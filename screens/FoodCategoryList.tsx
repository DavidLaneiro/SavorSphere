import { FlatList, StyleSheet, View, KeyboardAvoidingView, Platform } from "react-native";
import { FoodCategories, FoodCategory } from '../models/FoodCategory';
import FoodCategoryItem from "../components/FoodCategoryItem";
import { Colors } from "../styles/constants/Colors";
import FilterTextField from "../components/FilterTextField";
import { useDispatch, useSelector } from "react-redux";
import { setFoodCategories } from '../redux/FoodCategoriesSlice';
import { RootState } from "../redux/store";
import { useEffect } from "react";
import { useHeaderHeight } from "@react-navigation/elements"

const numColumns = 2

function renderFoodCategory({ item }: { item: FoodCategory }) {
    return <FoodCategoryItem category={item} numColumns={numColumns} />
}

function FoodCategoryList() {

    const headerHeight = useHeaderHeight()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setFoodCategories(FoodCategories))
    }, []);

    const filteredFoodCategories = useSelector((state: RootState) => state.foodCategoriesSlice.foodCategoriesFilteredList);

    return <View style={styles.container}>
        <View>
            <FilterTextField></FilterTextField>
        </View>
        <KeyboardAvoidingView style={styles.listContainer} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={Platform.OS === "ios" ? headerHeight : 0}>
            <FlatList numColumns={numColumns} data={filteredFoodCategories} renderItem={renderFoodCategory} keyExtractor={item => item.idCategory}
            />
        </KeyboardAvoidingView>
    </View>
}

export default FoodCategoryList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.accent300,
    },
    listContainer: {
        flex: 1
    }
})