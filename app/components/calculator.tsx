import { View, StyleSheet } from "react-native";
import { 
    Button, 
    OperatorButton, 
    ClearEqualsButton, 
    EmptyButton 
} from "./buttons";
import { Display } from "./display";
import { useState } from "react";

export function Calculator() {
    const [displayValue, setDisplayValue] = useState("0");

    function handlePress(label: string) {
        console.log(label)
    }

    return (
        <View style={styles.container}>
            
            <View style={styles.displayContainer}>
                <Display value={displayValue} />
            </View>

            <View style={styles.row}>
                <ClearEqualsButton label="C" onPress={handlePress} />
                <ClearEqualsButton label="=" onPress={handlePress} />
            </View>

            <View style={styles.row}>
                <Button label="7" onPress={handlePress} />
                <Button label="8" onPress={handlePress} />
                <Button label="9" onPress={handlePress} />
                <OperatorButton label="+" onPress={handlePress} />
            </View>

            <View style={styles.row}>
                <Button label="4" onPress={handlePress} />
                <Button label="5" onPress={handlePress} />
                <Button label="6" onPress={handlePress} />
                <OperatorButton label="-" onPress={handlePress} />
            </View>

            <View style={styles.row}>
                <Button label="1" onPress={handlePress} />
                <Button label="2" onPress={handlePress} />
                <Button label="3" onPress={handlePress} />
                <OperatorButton label="*" onPress={handlePress} />
            </View>

            <View style={styles.row}>
                <EmptyButton />
                <Button label="0" onPress={handlePress} />
                <Button label="." onPress={handlePress} />
                <OperatorButton label="/" onPress={handlePress} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1F2937',
        padding: 12,
        justifyContent: 'flex-end'
    },
    displayContainer: {
        marginBottom: 20
    },
    row: {
        flexDirection: 'row'
    }
});