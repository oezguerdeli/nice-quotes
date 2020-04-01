import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Quote(props) {
    const { text, author } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            <Text style={styles.author}>&mdash; {author}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    text: {
        fontSize: 25,
        fontStyle: 'italic',
        margin: 30
    },
    author: {
        textAlign: 'right',
        fontSize: 20,
    }
})