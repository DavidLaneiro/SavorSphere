import { View, TextInput, StyleSheet } from "react-native";
import { Colors } from "../styles/constants/Colors";
import { Ionicons } from "@expo/vector-icons";


function FilterTextField() {
    return <View style={styles.container}>
        <View style={styles.searchIconContainer}>
            {/* Make custom component for this */}
            <Ionicons name={"search"} color={Colors.primary500} size={24} />
        </View>
        <TextInput style={styles.textField} />
        <View style={styles.deleteIconContainer}>
            {/* Make custom component for this */}
            <Ionicons name={"close"} color={Colors.primary500} size={24} />
        </View>
    </View>
}

export default FilterTextField;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: Colors.primary500,
        borderWidth: 3,
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