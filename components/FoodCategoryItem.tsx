import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { FoodCategory } from "../models/FoodCategory";
import { Colors } from "../styles/constants/Colors";

interface FoodCategoryItemProps {
    category: FoodCategory;
}


function FoodCategoryItem({ category }: FoodCategoryItemProps) {
    return <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: category.strCategoryThumb }} />
        </View>
        <View style={styles.categoryContainer}>
            <Text style={styles.title}>{category.strCategory}</Text>
        </View>
    </View>
}

export default FoodCategoryItem;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    imageContainer: {
        height: 100,
        width: 100,
        overflow: 'hidden',
        borderColor: Colors.orange500,
        borderWidth: 1,
        borderRadius: 20,
        alignItems: 'center',
        margin: 10,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },

    title: {
        fontFamily: 'arial',
        fontSize: 16,
        paddingVertical: 5,
        color: Colors.orange500,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    categoryContainer:{
        width: '100%',
    }
})