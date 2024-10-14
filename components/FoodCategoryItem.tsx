import React from "react";
import { Image, Text, View, StyleSheet, Platform, Dimensions } from "react-native";
import { Colors } from "../styles/constants/Colors";
import { FoodCategoryItemProps } from "../models/FoodCategoryItemProps";

function FoodCategoryItem({ category, numColumns }: FoodCategoryItemProps) {

    const windowWidth = Dimensions.get('window').width;
    const itemWidth = windowWidth / numColumns - 15; 

    return <View style={[styles.container, {width: itemWidth}]}>
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
        marginLeft: 10,
        marginTop: 10,
        height: 150,
        borderRadius: 10,
        elevation: 4,
        // iOS needs a background color to apply Shadow
        backgroundColor: Colors.primary500,
        shadowColor: Colors.dark300,
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
    },
    imageContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: "white"
    },
    image: {
        width: '80%',
        height: '80%',
        resizeMode: 'contain'
    },

    title: {
        fontSize: 16,
        color: "white",
        fontWeight: 'bold',
        textAlign: 'center',
    },

    categoryContainer: {
        marginVertical: 10,
    }
})