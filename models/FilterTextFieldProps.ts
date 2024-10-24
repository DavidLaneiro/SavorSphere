export interface FilterTextFieldProps{
    placeholderText : string, 
    deleteText: () => void, 
    onChangeText: (newText: string) => void
}