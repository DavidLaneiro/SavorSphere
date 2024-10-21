import { View, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { IconButtonProps } from "../models/IconButtonProps";

function IconButton({ name, color, size, onPress }: IconButtonProps) {
    return <Pressable style={({pressed}) => pressed && styles.pressed} onPress={onPress}>
            <Ionicons name={name} color={color} size={size} />
        </Pressable>
}

export default IconButton;

const styles = StyleSheet.create({
    pressed:{
        opacity: 0.7
    }
});