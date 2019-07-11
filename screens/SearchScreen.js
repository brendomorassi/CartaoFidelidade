import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';


class SearchScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>SearchScreen</Text>
      </View>
    );
  } 

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default SearchScreen;