/**
 * Vídeo #11 ao #27: Localização - Módulo 18 - Localização, Câmera, React Navite avançado - B7Web
 * Adiquirindo conhecimento em features avançadas: Trabalhando com mapas.
 * Para instalar o react-native-maps, siga as instruções em: https://github.com/react-native-community/react-native-maps/blob/master/docs/installation.md
 * Ou execute: yarn add react-native-maps -E (se não funionar é pq mudou na documentação)
 * by: Vagner Pinto
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Callout} from 'react-native-maps';

export default class PersonalCallout extends React.Component{

    render(){
        return(
            <Callout>
                <View style={styles.calloutView}>
                    <Text style={styles.calloutTitle}>{this.props.title}</Text>
                    <Text style={styles.calloutDescription}>{this.props.description}</Text>
                </View>
            </Callout>
        );
    }
}

const styles = StyleSheet.create({
    calloutView:{
        width:100,
        height:100,
        backgroundColor:'white'
    },
    calloutTitle:{
        fontSize:12,
        fontWeight:'bold',
        textAlign:'center',
        textAlignVertical:'center'
    },
    calloutDescription:{
        fontSize:10,
        textAlign:'center',
        textAlignVertical:'auto'
    }

});
