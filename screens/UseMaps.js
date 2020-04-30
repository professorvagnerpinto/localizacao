/**
 * Vídeo #11 ao #27: Localização - Módulo 18 - Localização, Câmera, React Navite avançado - B7Web
 * Adiquirindo conhecimento em features avançadas: Trabalhando com mapas.
 * Para instalar o react-native-maps, siga as instruções em: https://github.com/react-native-community/react-native-maps/blob/master/docs/installation.md
 * Ou execute: yarn add react-native-maps -E (se não funionar é pq mudou na documentação)
 * by: Vagner Pinto
 */

import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

export default class UseMaps extends React.Component{
    //TODO fazer a configuração do IOS_SDK (configuração do Android feita e testada)
    constructor(props) {
        super(props);
        this.state={
            mapType:'standard',
            textButton:'Ir para o IfSul',
            flag:true
        }

        this.moverMapa = this.moverMapa.bind(this);
    }

    //coordenadas do IFSul
    //-31.766108372781073
    //-52.35215652734042
    moverMapa(){
        this.map.animateCamera({
            center: {latitude:-31.766108372781073,longitude:-52.35215652734042},
            pitch: 2, heading: 20, altitude: 200, zoom: 15},2000);
    }

    render(){
        return(
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    ref={map => this.map = map}
                    style={styles.map}
                    mapType={this.state.mapType}
                    showsUserLocation={true}
                    followsUserLocation={true}
                    onPress={(e)=>{
                        alert('latitude= ' + e.nativeEvent.coordinate.latitude + ' longitude= ' + e.nativeEvent.coordinate.longitude);
                        console.log(e.nativeEvent.coordinate);}
                    }
                    onLongPress={()=>{alert('longPress')}}
                    region={{ //região onde deve focar o mapa
                        latitude: -31.765809799999992,
                        longitude: -52.2317581,
                        latitudeDelta: 0.015, //baseado na documentação
                        longitudeDelta: 0.0121, //baseado na documentação
                    }}
                >
                    <Marker coordinate={{latitude:-31.765809799999992, longitude:-52.2317581}} title="My Place" description='Melhor região do Laranjal.' pinColor="purple" />
                    <Marker coordinate={{latitude:-31.766108372781073, longitude:-52.35215652734042}} title="IFSul" description="Instituto Federal Sul-rio-grandense" />
                </MapView>
                <TouchableOpacity style={styles.button} onPress={()=>this.moverMapa()}>
                    <Text style={styles.textButton}>{this.state.textButton}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    button: {
        width:200,
        height:50,
        alignItems:'center',
        backgroundColor: '#a50000',
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
