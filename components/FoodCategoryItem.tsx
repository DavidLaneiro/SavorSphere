import React from "react";
import { Image, Text, View } from "react-native";
import { FoodCategory } from "../models/FoodCategory";

interface FoodCategoryItemProps {
    category: FoodCategory;
}


function FoodCategoryItem({ category }: FoodCategoryItemProps) {
    return <View>
        <Image />
        <Text>{category.strCategory}</Text>
        <Text>{category.strCategoryDescription}</Text>
    </View>
}

export default FoodCategoryItem;