import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default function Redirect() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redirect</Text>
      <Text style={styles.text}>(To be continued...)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    marginVertical: 15,
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    marginVertical: 5,
  },
});
