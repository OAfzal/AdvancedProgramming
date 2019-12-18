import React from 'react';
import { View, Text } from 'react-native';

class Dashboard extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is the Dashboard</Text>
      </View>
    );
  }
}

export default Dashboard;