import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Navbar = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Translator</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 35,
        backgroundColor: '#2f2cf2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        letterSpacing: 4,
        fontSize: 35,
        color: 'white',
        fontWeight: '500',
    }
});


export default Navbar