import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';

const GoalItem = (props) => {
    return (
        <TouchableHighlight
            underlayColor="#21b786"
            onPress={props.onDelete.bind(this, props.id)}
        >
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 5,
        margin: 5,
    },
});

export default GoalItem;
