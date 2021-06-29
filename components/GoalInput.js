import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    return (
        <View
            style={{
                flexDirection: 'row',
            }}
        >
            <TextInput
                placeholder="Course Goal"
                style={styles.inputItem}
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
        </View>
    );
};

const styles = StyleSheet.create({
    inputItem: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
});

export default GoalInput;
