import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InputTextBox from './src/screens/InputTextBox';
import LanguageSelection from './src/screens/LanguageSelection';
// Custom Components
import Navbar from './src/screens/Navbar';
import OutputTextBox from './src/screens/OutputTextBox';

export default function App() {
  return (
    <View>
      <Navbar />
      <LanguageSelection />
      <InputTextBox />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// <View style={styles.container}>
// {/* <Text>Open up App.js to start working on your app!</Text> */ }
// {/* <StatusBar style="auto" /> */ }
// {/* </View> */ }
