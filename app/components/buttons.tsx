import { Text, TouchableOpacity, StyleSheet } from "react-native"

type ButtonProps = {
    label: string
    onPress?: (label: string) => void
}

export function Button({ label, onPress }: ButtonProps) {
    return (
        <TouchableOpacity
            style={styles.numberButton}
            activeOpacity={0.7}
            onPress={() => onPress?.(label)}
        >
            <Text style={styles.numberText}>{label}</Text>
        </TouchableOpacity>
    )
}

export function OperatorButton({ label, onPress }: ButtonProps) {
    return (
        <TouchableOpacity
            style={styles.operatorButton}
            activeOpacity={0.7}
            onPress={() => onPress?.(label)}
        >
            <Text style={styles.operatorText}>{label}</Text>
        </TouchableOpacity>
    )
}

export function ClearEqualsButton({ label, onPress }: ButtonProps) {
    return (
        <TouchableOpacity
            style={styles.actionButton}
            activeOpacity={0.7}
            onPress={() => onPress?.(label)}
        >
            <Text style={styles.actionText}>{label}</Text>
        </TouchableOpacity>
    )
}

export function EmptyButton() {
    return <TouchableOpacity style={styles.emptyButton} disabled />
}

const styles = StyleSheet.create({
    numberButton: {
        flex: 1,
        margin: 6,
        height: 90,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9CA3AF'
    },

    operatorButton: {
        flex: 1,
        margin: 6,
        height: 90,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F97316'
    },

    actionButton: {
        flex: 1,
        margin: 6,
        height: 90,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    },

    emptyButton: {
        flex: 1,
        margin: 6,
        height: 90,
        borderRadius: 10,
        backgroundColor: '#000'
    },

    numberText: {
        fontSize: 40,
        fontWeight: '500',
        color: '#E5E7EB'
    },

    operatorText: {
        fontSize: 40,
        fontWeight: '600',
        color: '#fff'
    },

    actionText: {
        fontSize: 40,
        fontWeight: '600',
        color: '#fff'
    }
})
