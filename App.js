import { StyleSheet, View } from 'react-native';
import TabNavigator from './src/Navigator';
import { NavigationContainer } from "@react-navigation/native";
import Profil from './src/screens/Profil';

export default function App() {
  return (
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
