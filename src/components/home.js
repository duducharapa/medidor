import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { LinearGradient } from 'react-native-linear-gradient';

import Logo from '../assets/images/logo.svg';
import Water from '../assets/images/water.svg';
import Warning from '../assets/images/warning.svg';

const sizeIcon = Dimensions.get('screen').width * 0.3;
const sizeIcons = Dimensions.get('screen').width * 0.14;
const sizeFont = Dimensions.get('screen').width * 0.05;
const sizeVolume = Dimensions.get('screen').width * 0.055;

export default class Home extends React.Component {

    render(){
        return(
            <View style={ styles.container }>
            
                <View style={ styles.row }>
                    <SvgXml width={ sizeIcon } height={ sizeIcon } xml={ Logo } />
                </View>

                <View style={ styles.row }>                    
                    <View style={ styles.header }>
                        <Text style={ styles.title }> Nível da água </Text>
                    </View>
                    
                    <View style={ styles.body }>
                        <View style={[ styles.row, styles.bodyRow ]}>
                            <SvgXml width={ sizeIcons } height={ sizeIcons } xml={ Water } />
                            <Text style={ styles.volume }> 25m³ </Text>
                        </View>
                    </View>
                </View>

                <View style={ styles.row }>
                    <View style={ styles.header }>
                        <Text style={ styles.title }> Estado </Text>
                    </View>

                    <View style={[ styles.body, styles.warning ]}>
                        <View style={[ styles.row, styles.bodyRow ]}>
                            <SvgXml width={ sizeIcons } height={ sizeIcons } xml={ Warning } />
                            <Text style={ styles.volume }> Moderado </Text>
                        </View>
                    </View>
                </View>

                <View style={ styles.row }>
                    <TouchableOpacity style={ styles.button }>
                        <Text style={ styles.textButton } > Atualizar informações </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#f1f2f6'
    },
    row: {
        width: '100%',
        alignItems: 'center'
    },
    header: {
        width: '70%',
        backgroundColor: '#5352ed',
        padding: 5
    },
    title: {
        textAlign: 'center',
        color: '#f1f2f6',
        fontSize: sizeFont
    },
    body: {
        width: '70%',
        backgroundColor: '#70a1ff',
        padding: 10
    },
    volume: {
        color: '#f1f2f6',
        fontWeight: 'bold',
        fontSize: sizeVolume
    },
    bodyRow: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button: {
        width: '70%',
        backgroundColor: '#5352ed',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        color: '#f1f2f6'
    },
    warning: {
        backgroundColor: '#e1b12c'
    }
});
