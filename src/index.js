import React from 'react';
import { Text, Dimensions, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';

import Logo from './assets/images/logo.svg';

const sizeIcon = Dimensions.get('screen').width * 0.5;
const fontSize = Dimensions.get('screen').width * 0.055;

export default class App extends React.Component {

  state = {
    dots: '',
    loading: true,
    counter: 0
  }

  async componentDidMount(){
    const { loading, dots } = this.state;

    await this.sleep(500);
    
    if(loading)
      this.setState({ dots: dots === '...' ? '' : `${ dots }.` });
  }

  async componentDidUpdate(){
    const { dots, counter, loading } = this.state;

    await this.sleep(500);

    if(loading){
      this.setState({ 
        dots: dots === '...' ? '' : `${ dots }.`,
        loading: counter !== 6,
        counter: counter + 1   
      });
    }else{
      this.props.navigation.navigate('Home');
    }

  }

  sleep = time => new Promise(res => setTimeout(res, time));

  render(){
    const { dots } = this.state;

    return(
        <LinearGradient colors={['#70a1ff','#5352ed']} style={ styles.container }>
            <SvgXml width={ sizeIcon } height={ sizeIcon } xml={ Logo } />
            <Text style={ styles.text }>
                { `Realizando a leitura dos dados${ dots }` }
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