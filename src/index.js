import React from 'react';
import { Text, Dimensions, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';

import Logo from './assets/images/logo.svg';

import api from './services/api';

const sizeIcon = Dimensions.get('screen').width * 0.5;
const fontSize = Dimensions.get('screen').width * 0.055;

export default class App extends React.Component {

  async componentDidMount(){
    let volume = 0;

    try{
      volume = await api.get('/');
    } catch(ex) {
      alert('Erro ao obter os dados');
    } finally {
      this.sleep(1500);
      if(volume !== 0) this.props.navigation.navigate('Home',{ volume: volume.data.volume });
    }
  }
  
  sleep = time => new Promise(res => setTimeout(res, time));

  render(){
    return(
        <LinearGradient colors={['#70a1ff','#5352ed']} style={ styles.container }>
            <SvgXml width={ sizeIcon } height={ sizeIcon } xml={ Logo } />
            <Text style={ styles.text }>
                Realizando a leitura dos dados
            </Text>
        </LinearGradient>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#ecf0f1',
    fontSize: fontSize,
    marginVertical: 2
  }
});