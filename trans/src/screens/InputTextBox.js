import { View, Image, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const InputTextBox = () => {
    return (
        <View>
            <View style={styles.container}>
                <TextInput placeholder={'Enter the text...'} style={styles.inputTextBoxStyle}>
                </TextInput>
            </View>
            <View style={styles.buttonCard}>
                <TouchableOpacity style={styles.iconStyle}>
                    <Image resizeMode='contain' style={styles.imageStyle} source={require('../../assets/camraIcon.png')} />
                </TouchableOpacity>
                {/* For Normal Translation */}
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.textStyle}>Translate</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 250,
        marginTop: 20,
        marginHorizontal: 15,
        backgroundColor: '#F5F5F5',
        borderRadius: 10
    },
    inputTextBoxStyle: {
        fontSize: 18,
        marginHorizontal: 10,
        marginVertical: 7
    },
    buttonCard: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-around',
    },
    imageStyle: {
        height: 50,
        width: 50,
    },
    buttonStyle: {
        width: 120,
        display: 'flex',
        textAlign: 'center',
        textAlignVertical: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2f2cf2',
    },
    textStyle: {
        color: '#fff',
        letterSpacing: 1,
    }
});

export default InputTextBox