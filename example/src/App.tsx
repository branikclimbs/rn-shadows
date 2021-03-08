import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import Shadow from 'rn-shadows';

export default function App() {
  return (
    <View style={styles.container}>
      <Shadow 
        elevation={4} 
        shadows={[
        	[-5, 16, 14,'#17479E', 0.4],
          [5, 16, 14,'#17479E', 0.4],
          [-2, 4, 6,'#17479E', 0.5],
          [2, 4, 6,'#17479E', 0.5]
        ]}
      >
        <View style={{ width: 100, height: 100, backgroundColor: '#444' }} />
      </Shadow>

      <View style={{ height: 100 }} />

      <Shadow 
        elevation={4}
        borderRadius={12} 
        shadows={[
          [-5, 16, 14, '#17479E', 0.04],
          [5, 16, 14, '#17479E', 0.04],
          [-2, 4, 6, '#17479E', 0.08],
          [2, 4, 6, '#17479E', 0.08],
        ]}
      >
        <View style={{ width: 300, height: 200, backgroundColor: '#fff' }} />
      </Shadow>

      <View style={{ height: 100 }} />

      <Shadow 
        elevation={4}
        borderRadius={12} 
        shadows={[
          [-5, 26, 14, '#333', 0.14],
          [5, 26, 14, '#333', 0.14],
          [-2, 4, 6, '#333', 0.18],
          [2, 4, 6, '#333', 0.18],
        ]}
      >
        <View style={{ backgroundColor: '#fff', padding: 20 }}>
          <Text>Shadows Works !</Text>
          <View style={{ width: 60, height: 20, backgroundColor: 'red' }}/>
        </View>
      </Shadow>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 200,
  },
});
