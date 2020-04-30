/**
 * Vídeo #11 ao #27: Localização - Módulo 18 - Localização, Câmera, React Navite avançado - B7Web
 * Adiquirindo conhecimento em features avançadas: Trabalhando com mapas.
 * Para instalar o react-native-maps, siga as instruções em: https://github.com/react-native-community/react-native-maps/blob/master/docs/installation.md
 * Ou execute: yarn add react-native-maps -E (se não funionar é pq mudou na documentação)
 * by: Vagner Pinto
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class UseMaps extends React.Component{
    //TODO fazer a configuração do IOS_SDK (configuração do Android feita, faltam testes)
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <View style={styles.container}>
                <Text>Maps</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    button: {
        width:200,
        height:50,
        alignItems:'center',
        backgroundColor: '#006400',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
    textButton:{
        fontSize:14,
        color:'#ffffff',
        fontWeight:'bold'
    }
});
