/**
 * Vídeo #11 ao #27: Localização - Módulo 18 - Localização, Câmera, React Navite avançado - B7Web
 * Adiquirindo conhecimento em features avançadas: Trabalhando com mapas.
 * Para instalar o react-native-maps, siga as instruções em: https://github.com/react-native-community/react-native-maps/blob/master/docs/installation.md
 * Ou execute: yarn add react-native-maps -E (se não funionar é pq mudou na documentação)
 * by: Vagner Pinto
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class PersonalPin extends React.Component{

    render(){
        return(
            <View style={[styles.pinView, {backgroundColor:this.props.color}]}>
                <Text style={styles.textPin}>{this.props.quantidade}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    pinView:{
        width:30,
        height:30,
        alignItems:'center',
        justifyContent:'center'
    },
    textPin:{
        fontSize:10,
        color:'white',
        textAlign:'center',
        textAlignVertical:'center'
    }
});

