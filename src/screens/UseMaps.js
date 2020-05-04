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
            markers:[
                {key:0, coords:{latitude:-31.7661083, longitude:-52.3521565}, image:require('../images/ic_map_car_blue.png'), title:'IFSul', description:'Instituto Federal Sul-rio-grandense'},
                {key:1, coords:{latitude:-31.7659234, longitude:-52.3460221}, image:require('../images/ic_map_car_green.png'),title:'Santa Casa', description:'Hospital Santa Casa'},
                {key:2, coords:{latitude:-31.7810932, longitude:-52.325668},  image:require('../images/ic_map_car_blue.png'), title:'UFPel Anglo', description:'Universidade Federal de Pelotas'},
                {key:3, coords:{latitude:-31.7736143, longitude:-52.3392507}, image:require('../images/ic_map_car_green.png'), title:'UCPel', description:'Universidade Católica de Pelotas'},
                {key:4, coords:{latitude:-31.7702478, longitude:-52.3418384}, image:require('../images/ic_map_car_blue.png'), title:'Prefeitura', description:'Prefeitura Municipal' }
            ]
        }

        this.moverMapa = this.moverMapa.bind(this);
        this.addMarker = this.addMarker.bind(this);
        this.updateMarker = this.updateMarker.bind(this);
    }

    addMarker(e){
        let s = this.state;
        this.state.markers.push({
            key:this.state.markers.length,
            coords:{latitude:e.nativeEvent.coordinate.latitude, longitude:e.nativeEvent.coordinate.longitude},
            image:require('../images/ic_map_car_red.png'),
            title:'My marker ' + this.state.markers.length,
            description:'My description '+this.state.markers.length});
        this.setState(s);
    }

    updateMarker(e) {
        let index = e._targetInst.return.key;
        let s = this.state;
        s.markers[index].coords = e.nativeEvent.coordinate;
        s.markers[index].pinColor = 'red';
        this.setState(s);
    }


    moverMapa(index){
        this.map.animateCamera({
            center: {latitude:this.state.markers[index].coords.latitude,longitude:this.state.markers[index].coords.longitude},
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
                        }
                    }
                    onLongPress={this.addMarker}
                    initialRegion={{ //região onde deve focar o mapa na inicialização
                        latitude: -31.766108372781073,
                        longitude: -52.35215652734042,
                        latitudeDelta: 0.015, //baseado na documentação
                        longitudeDelta: 0.0121, //baseado na documentação
                    }}
                >
                    {this.state.markers.map((marker)=>{
                        return <Marker key={marker.key}
                                       coordinate={marker.coords}
                                       title={marker.title}
                                       description={marker.description}
                                       draggable
                                       onDragEnd={this.updateMarker}
                                       image={marker.image}
                                />
                    })}
                </MapView>
                <TouchableOpacity style={styles.button} onPress={()=>this.moverMapa(2)}>
                    <Text style={styles.textButton}>Mover mapa para UFPel</Text>
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
