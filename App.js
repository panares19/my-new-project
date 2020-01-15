
import React from 'react';
import{
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

 
export default class App extends React.Component {
  render() {
  return (
    <View style={styles.container}>
     <Image
      source={require('./assets/logo_with_text.png')}
    />
</View>
    
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  
  }
});
