/**
 * Vídeo #11 ao #27: Localização - Módulo 18 - Localização, Câmera, React Navite avançado - B7Web
 * Adiquirindo conhecimento em features avançadas: Trabalhando com localização.
 * Para instalar o react-native-geolocation, siga as instruções em: https://github.com/react-native-community/react-native-geolocation
 * Ou execute: yarn add @react-native-community/geolocation (se não funionar é pq mudou na documentação)
 * by: Vagner Pinto
 */

import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

export default class SimpleLocation extends React.Component{

    constructor(props) {
        super(props);

        this.pegarPosicao = this.pegarPosicao.bind(this);
        this.monitorarPosicao = this.monitorarPosicao.bind(this);
    }

    pegarPosicao(){
        Geolocation.getCurrentPosition(
            (info)=>{
                console.log(info);
                if(info){
                    alert('latitude= ' + info.coords.latitude
                        + '\nlongitude= ' + info.coords.longitude
                        + '\naltitude= ' + info.coords.altitude);
                }
            },
            ()=>{
                alert('Erro ao pegar a localização.');
            },
            {enableHighAccuracy: false, timeout: 20000, maximumAge: 10000}
        );
    }

    //TODO ver se isso será implementado nesse projeto.
    monitorarPosicao(){
        alert('Em desenvolvimento.');
    }

    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={this.pegarPosicao}>
                    <Text style={styles.textButton}>Pegar Localização</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.monitorarPosicao}>
                    <Text style={styles.textButton}>Monitorar Posição</Text>
                </TouchableOpacity>
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
