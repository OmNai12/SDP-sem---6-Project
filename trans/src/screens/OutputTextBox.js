import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const OutputTextBox = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textBox}>{props.transText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginHorizontal: 15,
        backgroundColor: '#2f2cf2',
        borderRadius: 10
    },
    textBox: {
        height: 270,
        color: '#FFF',
        fontSize: 18,
        marginHorizontal: 10,
        marginVertical: 7
    }
});

export default OutputTextBox