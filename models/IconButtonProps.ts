import { Ionicons } from "@expo/vector-icons";


export interface IconButtonProps{
    name: keyof typeof Ionicons.glyphMap;
    color: string;
    size: number;
    onPress: () => void;
};