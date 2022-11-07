import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AppMain from './my_dependencies/appMain';

export default function App() {
  return (
    <View style={styles.container}>
      <AppMain/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 23,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
