import { View, StyleSheet } from "react-native";
import { 
    Button, 
    OperatorButton, 
    ClearEqualsButton, 
} from "./buttons";
import { Display } from "./display";
import { useState } from "react";

export function Calculator() {

    const [displayValue, setDisplayValue] = useState("0");
    const [firstValue, setFirstValue] = useState<number | null>(null);
    const [operator, setOperator] = useState<string | null>(null);
    const [waitingSecond, setWaitingSecond] = useState(false);

    function clear() {
        setDisplayValue("0");
        setFirstValue(null);
        setOperator(null);
        setWaitingSecond(false);
    }

    function inputNumber(num: string) {
        if (waitingSecond) {
            setDisplayValue(num);
            setWaitingSecond(false);
            return;
        }

        setDisplayValue(displayValue === "0" ? num : displayValue + num);
    }

    function inputDecimal() {
        if (!displayValue.includes(".")) {
            setDisplayValue(displayValue + ".");
        }
    }

    function chooseOperator(op: string) {
        const current = parseFloat(displayValue);

        if (firstValue === null) {
            setFirstValue(current);
        } else if (operator) {
            const result = calculate(firstValue, current, operator);
            setDisplayValue(String(result));
            setFirstValue(result);
        }

        setOperator(op);
        setWaitingSecond(true);
    }

    function calculate(a: number, b: number, op: string) {
        switch (op) {
            case "+": return a + b;
            case "-": return a - b;
            case "*": return a * b;
            case "/": return b !== 0 ? a / b : 0;
            default: return b;
        }
    }

    function handleEquals() {
        if (operator && firstValue !== null) {
            const second = parseFloat(displayValue);
            const result = calculate(firstValue, second, operator);

            setDisplayValue(String(result));
            setFirstValue(null);
            setOperator(null);
        }
    }

    function handleSquareRoot() {
        const value = parseFloat(displayValue);

        if (value >= 0) {
            const result = Math.sqrt(value);
            setDisplayValue(String(result));
        }
    }

    function handlePress(label: string) {

        if (!isNaN(Number(label))) {
            inputNumber(label);
            return;
        }

        switch (label) {

            case ".":
                inputDecimal();
                break;

            case "+":
            case "-":
            case "*":
            case "/":
                chooseOperator(label);
                break;

            case "=":
                handleEquals();
                break;

            case "C":
                clear();
                break;

            case "√":
                handleSquareRoot();
                break;
        }
    }

    return (
        <View style={styles.container}>
            
            <View style={styles.displayContainer}>
                <Display 
                    value={displayValue} 
                    operator={operator}
                />
            </View>

            <View style={{
                flex: 1,
                justifyContent: "flex-end"
            }}>
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
                    <OperatorButton label="√" onPress={handlePress} />
                    <Button label="0" onPress={handlePress} />
                    <Button label="." onPress={handlePress} />
                    <OperatorButton label="/" onPress={handlePress} />
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1F2937',
        padding: 12,
    },
    displayContainer: {
        marginBottom: 40
    },
    row: {
        flexDirection: 'row'
    }
});