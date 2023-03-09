import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const LanguageSelection = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.englishTextStyle, styles.commonTextStyle]}>English</Text>
      <Image resizeMode='contain' style={styles.imageStyle} source={require('../../assets/arrownew.png')} />
      <Text style={[styles.gujTextStyle, styles.commonTextStyle]}>Gujarati</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around',
  },
  commonTextStyle: {
    width: 140,
    letterSpacing: 2,
    padding: 5,
    fontWeight: '600',
    display: 'flex',
    textAlign: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  englishTextStyle: {
    backgroundColor: '#FFF5EE',
    color: '#2f2cf2',
  },
  imageStyle: {
    height: 50,
    width: 50
  },
  gujTextStyle: {
    backgroundColor: '#2f2cf2',
    color: '#fff',
  }
});

export default LanguageSelection