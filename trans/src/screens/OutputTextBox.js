import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const OutputTextBox = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textBox}>OutputTextBox</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 250,
        marginTop: 20,
        marginHorizontal: 15,
        //     backgroundColor: '#F5F5F5',
        //     borderRadius: 10
    },
    // textBox: {
    //     height: 250,
    //     marginTop: 20,
    //     marginHorizontal: 15,
    //     backgroundColor: '#F5F5F5',
    //     borderRadius: 10
    // }
});

export default OutputTextBox