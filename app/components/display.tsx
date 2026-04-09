import { Text, View, StyleSheet } from "react-native"

type DisplayProps = {
    value: string | undefined
    operator?: string | null
}

export function Display({ value, operator }: DisplayProps){
    return (
        <View style={styles.container}>

            <Text
                style={styles.valueText}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {value}
            </Text>

            <Text style={styles.operatorText}>
                {operator ?? " "}
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: "#374151",
        borderRadius: 18,
        padding: 24,
        minHeight: 150,
        justifyContent: "center",
        alignItems: "flex-end"
    },

    valueText: {
        color: "#E5E7EB",
        fontSize: 72,
        fontWeight: "300"
    },

    operatorText: {
        color: "#F97316",
        fontSize: 42,
        marginBottom: 9,
        fontWeight: "600",
        height: 28
    }

})