import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Avatar from './components/Avatar';

export default function App() {
  return (
    <View style={styles.container}>
      <Avatar initials={'JB'} size={35} backgroundColor={'teal'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
