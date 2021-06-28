import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
    const [enteredGoal, setEnteredGoal] = useState('');
    const [courseGoals, setCourseGoals] = useState([]);

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        setCourseGoals([...courseGoals, enteredGoal]);
    };

    return (
        <View style={styles.container}>
            <View
                style={{
                    flexDirection: 'row',
                }}
            >
                <TextInput
                    placeholder="Course Goals"
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                    }}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <Button title="ADD" onPress={addGoalHandler} />
            </View>
            <View>
                {courseGoals.map((goal) => (
                    <Text key={goal}>{goal}</Text>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
        paddingTop: 50,
    },
});
