import React from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';

export default function Loading(props) {
    return (
        <View styles={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="green" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
})

