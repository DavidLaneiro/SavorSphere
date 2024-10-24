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
import {setFilteredFoodCategories } from "../redux/FoodCategoriesSlice";

const numColumns = 2

function renderFoodCategory({ item }: { item: FoodCategory }) {
    return <FoodCategoryItem category={item} numColumns={numColumns} />
}

function FoodCategoryList() {

    // Variables 
    const headerHeight = useHeaderHeight()
    const dispatch = useDispatch();

    // All categories
    const foodCategories = useSelector((state: RootState) => state.foodCategoriesSlice.foodCategoriesList)

    // Filtered Categories
    const filteredFoodCategories = useSelector((state: RootState) => state.foodCategoriesSlice.foodCategoriesFilteredList);

    function deleteText(){
        dispatch(setFilteredFoodCategories(foodCategories))
    }

    function onChangeText(newText : string){
        if (newText === ""){
            dispatch(setFilteredFoodCategories(foodCategories))
            return;
        }

        const filteredCategories = foodCategories.filter(foodCategory => foodCategory.strCategory.toLowerCase().trim().includes(newText.toLowerCase().trim()))

        dispatch(setFilteredFoodCategories(filteredCategories))
    }

    useEffect(() => {
        dispatch(setFoodCategories(FoodCategories))
    }, []);

    return <View style={styles.container}>
        <View>
            <FilterTextField placeholderText={"Enter your food category here"} deleteText={deleteText} onChangeText={onChangeText}/>
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