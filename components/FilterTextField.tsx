import { View, TextInput, StyleSheet, Keyboard } from "react-native";
import { Colors } from "../styles/constants/Colors";
import IconButton from "./IconButton";
import { useState } from "react";
import { FilterTextFieldProps } from '../models/FilterTextFieldProps';

function searchHandler() {
    console.log("Search handler pressed.")
    Keyboard.dismiss();
}


function FilterTextField({ placeholderText, deleteText, onChangeText }: FilterTextFieldProps) {

    const [text, setText] = useState<string>("")
    const placeholder = placeholderText

    function deleteTextHandler() {
        console.log("Delete handler pressed.");
        setText("");
        deleteText();
    }

    function onChangeTextHandler(newText: string) {
        console.log("The search bar text has changed to: ", newText)
        setText(newText)
        onChangeText(newText);
    }

    return <View style={styles.container}>
        <View style={styles.searchIconContainer}>
            {/* Make custom component for this */}
            <IconButton name={"search"} color={Colors.primary500} size={24} onPress={searchHandler} />
        </View>
        <TextInput value={text} onChangeText={onChangeTextHandler} style={styles.textField} placeholder={placeholder} />
        <View style={styles.deleteIconContainer}>
            {/* Make custom component for this */}
            <IconButton name={"close"} color={Colors.primary500} size={24} onPress={deleteTextHandler} />
        </View>
    </View>
}

export default FilterTextField;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: Colors.primary500,
        borderWidth: 2,
        height: 50,
        borderRadius: 10,
        elevation: 4,
        // iOS needs a background color to apply Shadow
        backgroundColor: Colors.accent300,
        shadowColor: Colors.dark300,
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        margin: 10,
        justifyContent: 'center'
    },
    searchIconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    deleteIconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textField: {
        flex: 7,
        paddingHorizontal: 5
    }
});