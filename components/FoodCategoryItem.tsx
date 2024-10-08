import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { FoodCategory } from "../models/FoodCategory";
import { Colors } from "../styles/constants/Colors";

interface FoodCategoryItemProps {
    category: FoodCategory;
}


function FoodCategoryItem({ category }: FoodCategoryItemProps) {
    return <View style={styles.container}>
        <Image style={styles.image} source={{ uri: category.strCategoryThumb }} />
        <Text style={styles.title}>{category.strCategory}</Text>
        <Text style={styles.description}>{category.strCategoryDescription}</Text>
    </View>
}

export default FoodCategoryItem;

const styles = StyleSheet.create({

    container: {
        borderColor: Colors.orange500,
        borderWidth: 2,
        borderRadius: 20,
        alignItems: 'center',
        margin: 10,
        padding: 12,
    },
    image: {
        width: '100%',
        height: 200
    },
    
    title: {
        fontFamily: 'arial',
        fontSize: 18,
        paddingVertical: 5,
        color: Colors.orange500,
        fontWeight: 'bold'
    },
    description: {
        fontFamily: 'arial',
        fontSize: 14,
        paddingVertical: 5,
        color: Colors.green300,
        fontWeight: 'bold'
    }

})