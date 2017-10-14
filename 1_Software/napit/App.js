import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './src/components/Login/Login';
import Registration from './src/components/Registration/Registration';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'NapIT',
    textAlign: 'center'
  };
    render() {
    const { navigate } = this.props.navigation;
    return (
      // <View style={styles.logoContainer}>
      //   <Image style={styles.logo} source={require('./src/images/sleep.jpeg')}></Image>
      // </View>

      <View style={styles.container}>

        <View style={styles.containerButton}>
          <Button style={styles.ButtonHomeScreen}
            onPress={() => navigate('LoginLink')}
            title="Login">
          </Button>
        </View>
        <View style={styles.containerButton}>
          <Button style={styles.ButtonHomeScreen}
            onPress={() => navigate('RegistrationLink')}
            title="Registration" >
          </Button>
        </View>
      


      </View>
    );
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };
  render() {
    return <Text>Hello, Navigation!</Text>;
  } //render
} //end of chat 

export const NapitApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
  LoginLink: { screen: Login },
  RegistrationLink: { screen: Registration }
});


export default class App extends React.Component {
  render() {
    return <NapitApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    justifyContent: 'space-around',
    //alignItems: 'center',
    //justifyContent: 'center'
  },
  containerButton: {
    flex: 0.4,
    height: 50,
  },
  ButtonHomeScreen: {
    flex: 0.8,
    width: 150,
    height: 50,
    textAlign: 'center'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    marginTop: 10,
    textAlign: 'center',
    opacity: 0.9
  }
});
