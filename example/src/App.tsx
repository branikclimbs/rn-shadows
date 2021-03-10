import * as React from 'react';

import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Shadow from 'rn-shadows';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>


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
          borderRadius={200}
          shadows={[
            [-5, -10, 14,'#999', 0.2],
            [5, 15, 14,'#999', 0.2],
            [-2, 4, 6,'#999', 0.2],
            [2, 4, 6,'#999', 0.2]
          ]}
        >
          <View style={{ width: 200, height: 200, backgroundColor: '#fff' }} />
        </Shadow>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: 200,
  },
});
