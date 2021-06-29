import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    ScrollView,
    FlatList,
} from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);

    const addGoalHandler = (goalTitle) => {
        setCourseGoals((currentGoals) => [
            ...currentGoals,
            { id: Math.random().toString(), value: goalTitle },
        ]);
    };

    const removeGoalHandler = (goalId) => {
        setCourseGoals((currentGoals) => {
            return currentGoals.filter((goal) => goal.id !== goalId);
        });
    };

    return (
        <View style={styles.container}>
            <GoalInput onAddGoal={addGoalHandler} />
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={courseGoals}
                renderItem={(itemData) => (
                    <GoalItem
                        id={itemData.item.id}
                        title={itemData.item.value}
                        onDelete={removeGoalHandler}

                    />
                )}
            />
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
