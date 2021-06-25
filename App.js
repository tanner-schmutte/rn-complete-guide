import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
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
                />
                <Button title="ADD" />
            </View>
            <View></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
