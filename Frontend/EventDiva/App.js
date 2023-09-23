import { StatusBar } from 'expo-status-bar';
import EventScreen from './components/EventScreen'
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import {Stack, useRouter, NavigationContainer } from 'expo-router';

export default function App() {
  const router = useRouter()
  return (


    <LinearGradient
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    colors={['#FDB21F', '#FF4D00']}
    style={styles.linearGradient}
    > 
      <SafeAreaView style={{ flex: 1 }}>
          <View style={{flex:1, padding: 10}}>
            <EventScreen/>
          </View>
      </SafeAreaView>
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    flex: 1
  }
});
