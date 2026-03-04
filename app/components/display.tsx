import { Text, View, StyleSheet } from "react-native"

type DisplayProps = {
    value: string | undefined
}

export function Display({ value }: DisplayProps) {
    return (
        <View style={styles.container}>
            <Text 
                style={styles.text}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {value ?? "0"}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#374151',
        padding: 20,
        borderRadius: 16,
        minHeight: 100,
        justifyContent: 'flex-end'
    },
    text: {
        color: '#E5E7EB',
        fontSize: 48,
        textAlign: 'right',
        fontWeight: '300'
    }
})