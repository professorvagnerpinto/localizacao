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

    //TODO ver problema da API para renderizar Callout personalizado
    render(){
        return(
            <Callout tooltip={true}>
                <View styles={styles.calloutView}>
                    <Text styles={styles.calloutTitle}>{this.props.title}</Text>
                    <Text styles={styles.calloutDescription}>{this.props.description}</Text>
                </View>
            </Callout>
        );
    }
}

const styles = StyleSheet.create({
    calloutView:{
        width:200,
        height:200,
        backgroundColor:'white'
    },
    calloutTitle:{
        fontSize:12,
        textAlign:'center',
        textAlignVertical:'center'
    },
    calloutDescription:{
        fontSize:10,
        textAlign:'justify',
        textAlignVertical:'center'
    }

});
