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
        <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{category.strCategoryDescription}</Text>
        </View>
    </View>
}

export default FoodCategoryItem;

const styles = StyleSheet.create({

    container: {
        borderColor: Colors.orange500,
        borderWidth: 1,
        borderRadius: 20,
        alignItems: 'center',
        margin: 10,
        paddingHorizontal: 0,
        paddingVertical: 0,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    imageContainer: {
        width: '100%',
        height: 120,
        justifyContent: 'center',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },

    title: {
        fontFamily: 'arial',
        fontSize: 16,
        paddingVertical: 5,
        color: Colors.white500,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    description: {
        fontFamily: 'arial',
        fontSize: 14,
        color: Colors.white500,
        fontWeight: 'regular',
        textAlign: 'center',
    },
    categoryContainer:{
        width: '100%',
        backgroundColor: Colors.orange500
    },
    descriptionContainer:{
        padding: 20,
        backgroundColor: Colors.orange300,
        width: '100%',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,

    }

})